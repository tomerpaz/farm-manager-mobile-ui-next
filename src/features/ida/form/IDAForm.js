import { useEffect, useMemo, useRef, useState } from "react";
import { useForm, Controller, useWatch } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import {
    Alert,
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    Autocomplete,
    TextField,
    Typography,
} from "@mui/material";

import { selectLang } from "../../app/appSlice";
import {
    useCreateIdaMonthRecordMutation,
    useGetGGYearDataQuery,
    useGetIdaSystemDataQuery,
    useGetPestsQuery,
    useUpdateIdaMonthRecordMutation,
} from "../idaApiSlice";
import { getMonthName } from "../../../ui/FarmUtil";
import Loading from "../../../components/Loading";
import GoBackAppBar from "../../../appbar/content/GoBackAppBar";
import GoBackDesktopButton from "../../../components/ui/GoBackDesktopButton";
import { useGetResourcesQuery } from "../../resources/resourcesApiSlice";
import MetricFieldArray from "./MetricFieldArray";
import MetricPanel from "./MetricPanel";
import { fromRecord, getExistingRecord, toRecordPayload } from "../ggRecordMapper";

const WORKER = "WORKER";

// Every scalar field name below (date, amount, amountWaterUseIrrigation,
// energySourceId, ...) matches the Java server's GGElement class exactly
// (see ggRecordMapper.js), so toRecordPayload/fromRecord can copy them
// straight across. The four fields that don't map 1:1 (site_id, fertilizer_id
// / pesticideId, fieldIds, pests) are plain ids here — friendlier for
// <select>/Autocomplete matching — and get reshaped into GGElement's object
// references (site/resource/fields/pests) at submit time.
//
// Each schema entry describes one input: {name, type, label, unit, required,
// column, optionsFrom, allOption, defaultToFormDate}. `type` drives both the
// dialog control and the table cell (date | number | select | multiselect |
// fields | text). `column: false` keeps a field editable without cluttering
// the summary table. `optionsFrom` is resolved against the `dataSources` map
// built inside IDAForm from idaSystemData + the pests query.
const METRICS = [
    {
        id: "activeIngredients",
        title: "Active Ingredients",
        dateField: "date",
        totalField: "amount",
        totalUnit: "kg",
        schema: [
            { name: "date", type: "date", label: "Date", required: true, defaultToFormDate: true },
            { name: "pesticideId", type: "autocomplete", label: "Pesticide", required: true, optionsFrom: "pesticides", zeroLinksTo: ["date", "amount"] },
            { name: "pests", type: "multiselect", label: "Pests", optionsFrom: "pests" },
            { name: "fieldIds", type: "fields", label: "Fields", required: true },
            { name: "amount", type: "number", label: "Amount Applied", unit: "kg", required: true },
        ],
    },
    {
        id: "fertilizers",
        title: "Fertilizers",
        dateField: "date",
        totalField: "amount",
        totalUnit: "kg",
        schema: [
            { name: "date", type: "date", label: "Date", required: true, defaultToFormDate: true },
            { name: "fertilizer_id", type: "select", label: "Fertilizer", required: true, optionsFrom: "fertilizers", zeroLinksTo: ["date", "amount"] },
            { name: "fieldIds", type: "fields", label: "Fields", required: true },
            { name: "amount", type: "number", label: "Amount", unit: "kg", required: true },
        ],
    },
    {
        id: "waterUse",
        title: "Water Use",
        dateField: "date",
        totalField: "amount",
        totalUnit: "m³",
        schema: [
            { name: "date", type: "date", label: "Date", required: true, defaultToFormDate: true },
            { name: "site_id", type: "select", label: "Site", optionsFrom: "sites", allOption: true },
            {
                name: "amount", type: "number", label: "Total Amount", unit: "m³", required: true,
                // Derived, not user-entered — kept out of the dialog and summed
                // from the two fields below whenever the record is saved.
                hidden: true, computeFrom: ["amountWaterUseIrrigation", "amountWaterUseProductHandling"],
            },
            { name: "amountWaterUseIrrigation", type: "number", label: "Irrigation Amount", unit: "m³", column: false, required: true },
            { name: "amountWaterUseProductHandling", type: "number", label: "Product Handling", unit: "m³", column: false, required: true },
            { name: "flowRate", type: "text", label: "Flow Rate", column: false },
        ],
    },
    {
        id: "waterAbstracted",
        title: "Water Abstracted",
        dateField: "date",
        totalField: "amount",
        totalUnit: "m³",
        schema: [
            { name: "date", type: "date", label: "Date", required: true, defaultToFormDate: true },
            { name: "site_id", type: "select", label: "Site", optionsFrom: "sites", allOption: true },
            { name: "waterSourceId", type: "select", label: "Water Source", required: true, optionsFrom: "waterTypes" },
            { name: "amount", type: "number", label: "Volume Extracted", unit: "m³", required: true },
        ],
    },
    {
        id: "precipitation",
        title: "Precipitation",
        dateField: "date",
        totalField: "amount",
        totalUnit: "mm",
        schema: [
            { name: "date", type: "date", label: "Date", required: true, defaultToFormDate: true },
            { name: "site_id", type: "select", label: "Site", optionsFrom: "sites", allOption: true },
            { name: "amount", type: "number", label: "Rainfall Depth", unit: "mm", required: true },
        ],
    },
    {
        id: "energyUsed",
        title: "Energy Used",
        dateField: "date",
        totalField: "amount",
        totalUnit: "kWh",
        schema: [
            { name: "date", type: "date", label: "Date", required: true, defaultToFormDate: true },
            { name: "site_id", type: "select", label: "Site", optionsFrom: "sites", allOption: true },
            {
                name: "energySourceId", type: "select", label: "Energy Source", required: true, optionsFrom: "energyTypes",
                // Energy source 15 is "renewable"/self-generated — no external
                // amount was drawn, so date/amount/renewableAmount are forced
                // (last day of the month / 0) and locked, same idea as the
                // "None" pesticide/fertilizer option below (id 0 there).
                zeroLinksTo: ["date", "amount", "renewableAmount"], linkTriggerValue: 15,
            },
            { name: "amount", type: "number", label: "Power Absorbed", unit: "kWh", required: true },
            { name: "renewableAmount", type: "number", label: "Renewable Amount", unit: "kWh", column: false },
        ],
    },
    {
        id: "energyExportedOrGenerated",
        title: "Energy Exported / Generated",
        dateField: "date",
        totalField: "amountExportedToGrid",
        totalUnit: "kWh",
        schema: [
            { name: "date", type: "date", label: "Date Exported", required: true, defaultToFormDate: true },
            { name: "site_id", type: "select", label: "Site", optionsFrom: "sites", allOption: true },
            { name: "amountGenerated", type: "number", label: "Power Generated", unit: "kWh" },
            { name: "dateEnergyGenerated", type: "date", label: "Date Generated", column: false },
            { name: "amountExportedToGrid", type: "number", label: "Power Exported to Grid", unit: "kWh", required: true },
        ],
    },
];

const EMPTY_RECORD = METRICS.reduce((acc, m) => ({ ...acc, [m.id]: [] }), {});
const METRIC_IDS = METRICS.map((m) => m.id);

const resolveSchema = (schema, dataSources) =>
    schema.map((f) => (f.optionsFrom ? { ...f, options: dataSources[f.optionsFrom] || [] } : f));

// A field with no startDate on record shouldn't be hidden from selection —
// only exclude it once we can actually tell it starts after this month.
const filterByStartDate = (fields, cutoff) =>
    (fields ?? []).filter((f) => !f.startDate || new Date(f.startDate) <= cutoff);

// Drafts can be left incomplete — a real submission can't. waterUse and
// energyUsed just need one record each; activeIngredients/fertilizers are
// keyed per field (crop_id server-side), so every field needs its own
// covering record — either a real application, or an explicit "No Active
// Ingredient"/"No NPK" (id 0) entry declaring nothing was applied.
// Returns a { [metricId]: message } map (only for metrics that actually have
// a problem) so each error can be shown right on its own panel instead of
// one bundled banner the user has to cross-reference.
function validateMandatoryMetrics(formData, availableFields, zeroOptionLabels) {
    if (formData.draft) return {};

    const errors = {};
    if ((formData.waterUse || []).length === 0) {
        errors.waterUse = "Needs at least one record before this can be finalized.";
    }
    if ((formData.energyUsed || []).length === 0) {
        errors.energyUsed = "Needs at least one record before this can be finalized.";
    }

    const checkFieldCoverage = (metricId, records, zeroLabel) => {
        // Baseline bar (matches waterUse/energyUsed) so an empty list is
        // always caught — the per-field check below only has something to
        // compare against when availableFields is non-empty, so on its own
        // it would silently pass a totally empty list for a site with no
        // fields set up yet.
        if ((records || []).length === 0) {
            errors[metricId] = "Needs at least one record before this can be finalized.";
            return;
        }
        const uncovered = (availableFields || []).filter(
            (field) => !(records || []).some((r) => (r.fieldIds || []).includes(field.id))
        );
        if (uncovered.length > 0) {
            errors[metricId] = `Needs a record (or "${zeroLabel}") for: ${uncovered.map((f) => f.name).join(", ")}.`;
        }
    };
    checkFieldCoverage("activeIngredients", formData.activeIngredients, zeroOptionLabels.activeIngredients);
    checkFieldCoverage("fertilizers", formData.fertilizers, zeroOptionLabels.fertilizers);

    return errors;
}

function IDAForm() {
    const { year, month } = useParams();
    const navigate = useNavigate();

    const text = useSelector(selectLang);
    const lang = text?.lang;

    const recordYear = Number(year);
    const recordMonth = Number(month); // 0-indexed

    const { data: idaSystemData, isLoading: isSystemLoading } = useGetIdaSystemDataQuery();
    const { data: workers = [], isLoading: isWorkersLoading } = useGetResourcesQuery({ type: WORKER });
    const { data: pests, isLoading: isPestsLoading } = useGetPestsQuery();
    const { data: ggYearData, isLoading: isYearDataLoading } = useGetGGYearDataQuery(recordYear);
    const [updateIdaMonthRecord, { isLoading: isUpdating }] = useUpdateIdaMonthRecordMutation();
    const [createIdaMonthRecord, { isLoading: isCreating }] = useCreateIdaMonthRecordMutation();
    const isSubmitting = isUpdating || isCreating;

    // A month can already have a saved GGRecord — Save must PUT to it (by
    // id) rather than POST a duplicate.
    const existingRecord = getExistingRecord(ggYearData, recordMonth);

    const { firstDayOfMonth, lastDayOfMonth, defaultDate } = useMemo(() => {
        const first = new Date(recordYear, recordMonth, 1);
        const last = new Date(recordYear, recordMonth + 1, 0, 23, 59, 59, 999);
        const now = new Date();
        // The original only compared the month, so January 2023 opened in
        // January 2026 defaulted to today's date. Compare the year too.
        const isCurrentMonth = now.getFullYear() === recordYear && now.getMonth() === recordMonth;
        return {
            firstDayOfMonth: first,
            lastDayOfMonth: last,
            defaultDate: (isCurrentMonth ? now : last).toISOString(),
        };
    }, [recordYear, recordMonth]);

    const [expanded, setExpanded] = useState(() => new Set());
    const [submitError, setSubmitError] = useState(null);
    const [metricErrors, setMetricErrors] = useState({});

    // Multiple panels can now stay open at once — with a two-column layout,
    // single-expand made opening a right-hand panel collapse a left-hand one
    // and jump the page.
    const togglePanel = (panelId) => (_event, isExpanded) => {
        setExpanded((prev) => {
            const next = new Set(prev);
            if (isExpanded) next.add(panelId);
            else next.delete(panelId);
            return next;
        });
    };

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({ defaultValues: EMPTY_RECORD });

    // useForm only reads defaultValues once, and ggYearData arrives async —
    // without this the form would stay blank even when the month already has
    // a saved record. Hydrate once so a later refetch (e.g. after saving)
    // can't clobber edits in progress. A brand-new month has no manager yet,
    // so default it to the first worker rather than leaving it blank.
    const hydrated = useRef(false);
    useEffect(() => {
        if (!hydrated.current && !isYearDataLoading && !isWorkersLoading) {
            if (existingRecord) {
                reset({ ...EMPTY_RECORD, ...fromRecord(existingRecord) });
            } else if (workers.length > 0) {
                reset({ ...EMPTY_RECORD, manager: { id: workers[0].id, name: workers[0].name } });
            }
            hydrated.current = true;
        }
    }, [existingRecord, isYearDataLoading, isWorkersLoading, workers, reset]);

    const metricValues = useWatch({ control, name: METRIC_IDS });

    const autocompleteOptions = useMemo(
        () => workers.map((w) => ({ id: w.id, name: w.name })),
        [workers]
    );

    const availableFields = useMemo(() => {
        const siteIds = new Set(idaSystemData?.sites?.map((s) => s.id) ?? []);
        // Only drop a field for being off-site once we can tell it actually
        // belongs to a *different* site — a field with no siteId shouldn't
        // vanish just because it can't be matched.
        const bySite = idaSystemData?.fields?.filter((f) => f.siteId == null || siteIds.has(f.siteId));
        return filterByStartDate(bySite, lastDayOfMonth);
    }, [idaSystemData, lastDayOfMonth]);

    const handleGoBack = () => navigate(-1);

    const handleFormSubmit = async (formData) => {
        setSubmitError(null);
        const mandatoryErrors = validateMandatoryMetrics(formData, availableFields, {
            activeIngredients: dataSources.pesticides.find((p) => p.id === 0)?.name || "None",
            fertilizers: dataSources.fertilizers.find((f) => f.id === 0)?.name || "None",
        });
        setMetricErrors(mandatoryErrors);
        if (Object.keys(mandatoryErrors).length > 0) {
            // Expand every panel with a problem so the inline message is
            // actually visible instead of sitting collapsed off-screen.
            setExpanded((prev) => new Set([...prev, ...Object.keys(mandatoryErrors)]));
            return;
        }
        const payload = toRecordPayload(formData, { id: existingRecord?.id, firstDayOfMonth });
        try {
            if (existingRecord?.id) {
                await updateIdaMonthRecord(payload).unwrap();
            } else {
                await createIdaMonthRecord(payload).unwrap();
            }
            handleGoBack();
        } catch (err) {
            console.error("Failed to save the monthly IDA record:", err);
            setSubmitError(
                err?.data?.message || text?.saveFailed || "Could not save this month's records. Please try again."
            );
        }
    };

    if (isSystemLoading || isWorkersLoading || isPestsLoading || isYearDataLoading) {
        return (
            <Box sx={{ p: 4, display: "flex", justifyContent: "center", flex: 1 }}>
                <Loading />
            </Box>
        );
    }

    const dataSources = {
        sites: idaSystemData?.sites,
        waterTypes: idaSystemData?.waterTypes,
        // Id 15 ("renewable") drives the auto-zero/disable behavior below —
        // surfaced first in the dropdown since it's the option farmers
        // reach for most often.
        energyTypes: [...(idaSystemData?.energyTypes || [])].sort((a, b) =>
            (a.id === 15 ? -1 : b.id === 15 ? 1 : 0)
        ),
        // id 0 is a real, selectable choice — it's how a farmer declares
        // "nothing was applied to this field" for the month, which still
        // counts toward the per-field coverage required when not a draft.
        // The server already returns its own id-0 entry for both lists, so
        // this only fills one in (with our label) if it's somehow missing,
        // rather than risk showing it twice.
        fertilizers: (idaSystemData?.fertilizers || []).some((f) => f.id === 0)
            ? idaSystemData.fertilizers
            : [{ id: 0, name: "No NPK" }, ...(idaSystemData?.fertilizers || [])],
        pesticides: (idaSystemData?.pesticides || []).some((p) => p.id === 0)
            ? idaSystemData.pesticides
            : [{ id: 0, name: "No Active Ingredient" }, ...(idaSystemData?.pesticides || [])],
        pests,
    };

    const renderPanel = (metric, indexInAll) => {
        // fertilizers and activeIngredients record their crop_id via a
        // selected field, so there's nothing valid to save without one.
        const needsFields = metric.schema.some((f) => f.type === "fields");
        const noFieldsAvailable = needsFields && availableFields.length === 0;

        return (
            <MetricPanel
                key={metric.id}
                id={metric.id}
                title={metric.title}
                count={metricValues?.[indexInAll]?.length ?? 0}
                expanded={expanded.has(metric.id)}
                onChange={togglePanel(metric.id)}
            >
                <MetricFieldArray
                    control={control}
                    name={metric.id}
                    title={metric.title}
                    schema={resolveSchema(metric.schema, dataSources)}
                    dateField={metric.dateField}
                    totalField={metric.totalField}
                    totalUnit={metric.totalUnit}
                    defaultDate={defaultDate}
                    minDate={firstDayOfMonth}
                    maxDate={lastDayOfMonth}
                    availableFields={availableFields}
                    disabled={noFieldsAvailable}
                    disabledReason={noFieldsAvailable ? "No fields available to select for this month." : null}
                    mandatoryError={metricErrors[metric.id]}
                />
            </MetricPanel>
        );
    };

    const half = Math.ceil(METRICS.length / 2);

    return (
        <Box component="form" sx={{ display: "flex", flex: 1 }} onSubmit={handleSubmit(handleFormSubmit)} noValidate>
            <Box sx={{ width: "100%" }}>
                <GoBackAppBar sticky />

                <Box
                    sx={{
                        position: "relative",
                        width: "100%",
                        boxSizing: "border-box",
                        maxWidth: { xs: "100%", sm: 1400 },
                        mx: "auto",
                        bgcolor: "background.paper",
                        borderRadius: { xs: 0, sm: 2 },
                        boxShadow: { xs: 0, sm: 2 },
                        px: { xs: 2, sm: 4 },
                        pt: { xs: 3, sm: 4 },
                        pb: 4,
                    }}
                >
                    <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 2, mb: 4 }}>
                        <GoBackDesktopButton />
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                            <Typography
                                variant="overline"
                                sx={{ color: "success.main", fontWeight: 800, letterSpacing: "0.06em" }}
                            >
                                IDA Tracking Matrix
                            </Typography>
                            <Typography
                                variant="h4"
                                sx={{
                                    fontWeight: 800,
                                    fontSize: { xs: "1.5rem", sm: "2.2rem" },
                                    color: "text.primary",
                                    letterSpacing: "-0.02em",
                                }}
                            >
                                {`${getMonthName(recordMonth + 1, lang)} ${recordYear}`}
                            </Typography>
                        </Box>

                        <Box sx={{ ml: "auto", minWidth: 320, width: { xs: "100%", sm: "auto" }, mt: { xs: 1, sm: 0 } }}>
                            <Controller
                                control={control}
                                name="manager"
                                rules={{ required: text?.managerRequired || "Select a manager" }}
                                render={({ field: { value, onChange, ref, ...field }, fieldState }) => (
                                    <Autocomplete
                                        {...field}
                                        options={autocompleteOptions}
                                        getOptionLabel={(option) => option?.name || ""}
                                        isOptionEqualToValue={(option, selected) => option.id === selected?.id}
                                        value={autocompleteOptions.find((opt) => opt.id === value?.id) || null}
                                        onChange={(_, newValue) => onChange(newValue)}
                                        blurOnSelect
                                        slotProps={{ paper: { elevation: 3 } }}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                inputRef={ref}
                                                label={text?.manager || "Manager"}
                                                size="medium"
                                                error={!!fieldState.error}
                                                helperText={fieldState.error?.message ?? " "}
                                            />
                                        )}
                                    />
                                )}
                            />
                        </Box>
                    </Box>

                    {availableFields.length === 0 && (
                        <Alert severity="warning" sx={{ mb: 3 }}>
                            No fields are available for this month — records can&apos;t be logged and this matrix
                            can&apos;t be saved until at least one field exists.
                        </Alert>
                    )}

                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
                            gap: 3,
                            mb: 4,
                            alignItems: "start",
                        }}
                    >
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                            {METRICS.slice(0, half).map((m, i) => renderPanel(m, i))}
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                            {METRICS.slice(half).map((m, i) => renderPanel(m, i + half))}
                        </Box>
                    </Box>

                    {submitError && (
                        <Alert severity="error" sx={{ mb: 3 }} onClose={() => setSubmitError(null)}>
                            {submitError}
                        </Alert>
                    )}

                    <Box
                        sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: 2,
                            justifyContent: "space-between",
                            alignItems: "center",
                            pt: 3,
                            borderTop: "2px solid",
                            borderColor: "divider",
                        }}
                    >
                        <Controller
                            control={control}
                            name="draft"
                            render={({ field: { value, onChange, ...field } }) => (
                                <FormControlLabel
                                    slotProps={{ typography: { variant: "body1", sx: { fontWeight: 500 } } }}
                                    control={
                                        <Checkbox
                                            size="medium"
                                            checked={!!value}
                                            onChange={(e) => onChange(e.target.checked)}
                                            {...field}
                                        />
                                    }
                                    label={text?.draft || "Mark configuration matrix as Draft"}
                                />
                            )}
                        />

                        <Button
                            type="submit"
                            variant="contained"
                            color="success"
                            size="large"
                            disabled={isSubmitting || availableFields.length === 0}
                            sx={{
                                textTransform: "none",
                                borderRadius: 2,
                                px: 6,
                                py: 1.5,
                                fontSize: "1.05rem",
                                fontWeight: 700,
                            }}
                        >
                            {isSubmitting
                                ? text?.saving || "Saving Records..."
                                : text?.save || "Save Matrix Records"}
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default IDAForm;
