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
import useIdaText from "./useIdaText";

const WORKER = "WORKER";
const GENERAL = "GENERAL";

// Every scalar field name below (date, amount, amountWaterUseIrrigation,
// energySourceId, ...) matches the Java server's GGElement class exactly
// (see ggRecordMapper.js), so toRecordPayload/fromRecord can copy them
// straight across. The three fields that don't map 1:1 (site_id, fieldIds,
// pests) are plain ids here — friendlier for <select>/Autocomplete matching —
// and get reshaped into GGElement's object references (site/fields/pests) at
// submit time. `resources` keeps GGElement's own shape.
//
// Each schema entry describes one input: {name, type, label, unit, required,
// column, optionsFrom, allOption, defaultToFormDate}. `type` drives both the
// dialog control and the table cell (date | number | select | multiselect |
// fields | resources | text). `column: false` keeps a field editable without cluttering
// the summary table. titleKey/labelKey/emptyLabelKey are src/lang/*.json
// keys, with title/label/emptyLabel as the English fallback. `optionsFrom` is resolved against the `dataSources` map
// built inside IDAForm from idaSystemData + the pests query.
const METRICS = [
    {
        id: "activeIngredients",
        title: "Active Ingredients", titleKey: "activeIngredients",
        dateField: "date",
        // The amount lives on each resource row now — the total sums those.
        totalField: "resources",
        totalUnit: "kg",
        schema: [
            { name: "date", type: "date", label: "Date", labelKey: "date", required: true, defaultToFormDate: true },
            // An empty list declares "No Active Ingredient" for the fields,
            // so the date gets the same forced/locked treatment the old id-0
            // "None" option had. Each row only takes a resource and its amount.
            {
                name: "resources", type: "resources", label: "Pesticides", labelKey: "pesticides", optionsFrom: "pesticides",
                emptyLabel: "No Active Ingredient", emptyLabelKey: "noActiveIngredient", zeroLinksTo: ["date"], rowFields: ["amount"], rowUnit: "kg",
            },
            { name: "pests", type: "multiselect", label: "Pests", labelKey: "pests", optionsFrom: "pests" },
            { name: "fieldIds", type: "fields", label: "Fields", labelKey: "fields", required: true },
        ],
    },
    {
        id: "fertilizers",
        title: "Fertilizers (NPK)", titleKey: "fertilizersNpk",
        dateField: "date",
        totalField: "resources",
        totalUnit: "kg",
        schema: [
            { name: "date", type: "date", label: "Date", labelKey: "date", required: true, defaultToFormDate: true },
            {
                name: "resources", type: "resources", label: "Fertilizers", labelKey: "fertilizers", optionsFrom: "fertilizers",
                emptyLabel: "No NPK", emptyLabelKey: "noNpk", zeroLinksTo: ["date"], rowFields: ["amount"], rowUnit: "kg",
            },
            { name: "fieldIds", type: "fields", label: "Fields", labelKey: "fields", required: true },
        ],
    },
    {
        id: "waterUse",
        title: "Water Use", titleKey: "waterUse",
        dateField: "date",
        totalField: "amount",
        totalUnit: "m³",
        schema: [
            { name: "date", type: "date", label: "Date", labelKey: "date", required: true, defaultToFormDate: true },
            { name: "site_id", type: "select", label: "Site", labelKey: "site", optionsFrom: "sites", allOption: true },
            {
                name: "amount", type: "number", label: "Total Amount", labelKey: "totalAmount", unit: "m³", required: true,
                // Derived, not user-entered — kept out of the dialog and summed
                // from the two fields below whenever the record is saved.
                hidden: true, computeFrom: ["amountWaterUseIrrigation", "amountWaterUseProductHandling"],
            },
            { name: "amountWaterUseIrrigation", type: "number", label: "Irrigation Amount", labelKey: "irrigationAmount", unit: "m³", column: false, required: true },
            { name: "amountWaterUseProductHandling", type: "number", label: "Product Handling", labelKey: "productHandling", unit: "m³", column: false, required: true },
            { name: "flowRate", type: "text", label: "Flow Rate", labelKey: "flowRate", column: false },
        ],
    },
    {
        id: "waterAbstracted",
        title: "Water Abstracted", titleKey: "waterAbstracted",
        dateField: "date",
        totalField: "amount",
        totalUnit: "m³",
        schema: [
            { name: "date", type: "date", label: "Date", labelKey: "date", required: true, defaultToFormDate: true },
            { name: "site_id", type: "select", label: "Site", labelKey: "site", optionsFrom: "sites", allOption: true },
            { name: "waterSourceId", type: "select", label: "Water Source", labelKey: "waterSource", required: true, optionsFrom: "waterTypes" },
            { name: "amount", type: "number", label: "Volume Extracted", labelKey: "volumeExtracted", unit: "m³", required: true },
        ],
    },
    {
        id: "precipitation",
        title: "Precipitation", titleKey: "precipitation",
        dateField: "date",
        totalField: "amount",
        totalUnit: "mm",
        schema: [
            { name: "date", type: "date", label: "Date", labelKey: "date", required: true, defaultToFormDate: true },
            { name: "site_id", type: "select", label: "Site", labelKey: "site", optionsFrom: "sites", allOption: true },
            { name: "amount", type: "number", label: "Rainfall Depth", labelKey: "rainfallDepth", unit: "mm", required: true },
        ],
    },
    {
        id: "energyUsed",
        title: "Energy Used", titleKey: "energyUsed",
        dateField: "date",
        totalField: "amount",
        totalUnit: "kWh",
        schema: [
            { name: "date", type: "date", label: "Date", labelKey: "date", required: true, defaultToFormDate: true },
            { name: "site_id", type: "select", label: "Site", labelKey: "site", optionsFrom: "sites", allOption: true },
            {
                name: "energySourceId", type: "select", label: "Energy Source", labelKey: "energySource", required: true, optionsFrom: "energyTypes",
                // Energy source 15 is "renewable"/self-generated — no external
                // amount was drawn, so date/amount/renewableAmount are forced
                // (last day of the month / 0) and locked, same idea as an
                // empty pesticide/fertilizer resources list above.
                zeroLinksTo: ["date", "amount", "renewableAmount"], linkTriggerValue: 15,
            },
            { name: "amount", type: "number", label: "Power Absorbed", labelKey: "powerAbsorbed", unit: "kWh", required: true },
            { name: "renewableAmount", type: "number", label: "Renewable Amount", labelKey: "renewableAmount", unit: "kWh", column: false },
        ],
    },
    {
        id: "energyExportedOrGenerated",
        title: "Energy Exported / Generated", titleKey: "energyExported",
        dateField: "date",
        totalField: "amountExportedToGrid",
        totalUnit: "kWh",
        schema: [
            { name: "date", type: "date", label: "Date Exported", labelKey: "dateExported", required: true, defaultToFormDate: true },
            { name: "site_id", type: "select", label: "Site", labelKey: "site", optionsFrom: "sites", allOption: true },
            { name: "amountGenerated", type: "number", label: "Power Generated", labelKey: "powerGenerated", unit: "kWh" },
            { name: "dateEnergyGenerated", type: "date", label: "Date Generated", labelKey: "dateGenerated", column: false },
            { name: "amountExportedToGrid", type: "number", label: "Power Exported to Grid", labelKey: "powerExported", unit: "kWh", required: true },
        ],
    },
    {
        id: "general",
        title: "General", titleKey: "general",
        dateField: "date",
        totalField: "amount",
        // No single unit here (unlike fertilizers' fixed "kg") — general
        // resources carry their own unit (kg/lit/unit), shown per resource
        // row, and the summary total is left unlabeled since rows can mix units.
        totalUnit: "",
        schema: [
            { name: "date", type: "date", label: "Date", labelKey: "date", required: true, defaultToFormDate: true },
            // Unlike fertilizers/activeIngredients, an empty list isn't a
            // "None" declaration here — a general resource application is
            // either logged or it isn't, so at least one row is required.
            { name: "resources", type: "resources", label: "Resources", labelKey: "resources", required: true, optionsFrom: "generalResources" },
            { name: "fieldIds", type: "fields", label: "Fields", labelKey: "fields", required: true },
            { name: "amount", type: "number", label: "Amount", labelKey: "amountLabel", required: true },
        ],
    },
].map((m) => ({
    ...m,
    // Every metric gets an optional free-text note, kept out of the summary
    // table (it's a detail you open the row to read, not scan a column for).
    schema: [...m.schema, { name: "note", type: "text", label: "Note", labelKey: "note", column: false, multiline: true }],
}));

const EMPTY_RECORD = METRICS.reduce((acc, m) => ({ ...acc, [m.id]: [] }), {});
const METRIC_IDS = METRICS.map((m) => m.id);

// The fertilizer/pesticide lists lead with a "none" entry (id 0) — never a
// valid resource row, since an empty resources list is what means "none"
// now. It's split off here and its label reused for the empty state.
const resolveSchema = (schema, dataSources, t) =>
    schema.map((spec) => {
        const f = {
            ...spec,
            label: t(spec.labelKey, spec.label),
            ...(spec.emptyLabelKey ? { emptyLabel: t(spec.emptyLabelKey, spec.emptyLabel) } : {}),
        };
        if (!f.optionsFrom) return f;
        const options = dataSources[f.optionsFrom] || [];
        if (f.type !== "resources") return { ...f, options };
        return {
            ...f,
            options: options.filter((o) => o.id !== 0),
            emptyLabel: options.find((o) => o.id === 0)?.name || f.emptyLabel,
        };
    });

// A field with no startDate on record shouldn't be hidden from selection —
// only exclude it once we can actually tell it starts after this month.
const filterByStartDate = (fields, cutoff) =>
    (fields ?? []).filter((f) => !f.startDate || new Date(f.startDate) <= cutoff);

// Drafts can be left incomplete — a real submission can't. waterUse and
// energyUsed just need one record each; activeIngredients/fertilizers are
// keyed per field (crop_id server-side), so every field needs its own
// covering record — either a real application, or an entry with no resources
// ("No Active Ingredient"/"No NPK") declaring nothing was applied.
// Returns a { [metricId]: message } map (only for metrics that actually have
// a problem) so each error can be shown right on its own panel instead of
// one bundled banner the user has to cross-reference.
function validateMandatoryMetrics(formData, availableFields, zeroOptionLabels, t) {
    if (formData.draft) return {};

    const needsOne = t("needsOneRecord", "Needs at least one record before this can be finalized.");
    const errors = {};
    if ((formData.waterUse || []).length === 0) {
        errors.waterUse = needsOne;
    }
    if ((formData.energyUsed || []).length === 0) {
        errors.energyUsed = needsOne;
    }

    const checkFieldCoverage = (metricId, records, zeroLabel) => {
        // Baseline bar (matches waterUse/energyUsed) so an empty list is
        // always caught — the per-field check below only has something to
        // compare against when availableFields is non-empty, so on its own
        // it would silently pass a totally empty list for a site with no
        // fields set up yet.
        if ((records || []).length === 0) {
            errors[metricId] = needsOne;
            return;
        }
        const uncovered = (availableFields || []).filter(
            (field) => !(records || []).some((r) => (r.fieldIds || []).includes(field.id))
        );
        if (uncovered.length > 0) {
            errors[metricId] = t(
                "needsFieldCoverage",
                'Needs a record for: {fields}. If nothing was applied, add an entry with no rows ("{none}").',
                { fields: uncovered.map((f) => f.name).join(", "), none: zeroLabel }
            );
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
    const t = useIdaText();

    const recordYear = Number(year);
    const recordMonth = Number(month); // 0-indexed

    const { data: idaSystemData, isLoading: isSystemLoading } = useGetIdaSystemDataQuery();
    const { data: workers = [], isLoading: isWorkersLoading } = useGetResourcesQuery({ type: WORKER });
    const { data: generalResources = [] } = useGetResourcesQuery({ type: GENERAL });
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
        const mandatoryErrors = validateMandatoryMetrics(
            formData,
            availableFields,
            {
                activeIngredients:
                    dataSources.pesticides.find((p) => p.id === 0)?.name || t("noActiveIngredient", "No Active Ingredient"),
                fertilizers: dataSources.fertilizers.find((f) => f.id === 0)?.name || t("noNpk", "No NPK"),
            },
            t
        );
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
                err?.data?.message || t("saveFailed", "Could not save this month's records. Please try again.")
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
        // Both lists lead with the server's "none" entry (id 0); resolveSchema
        // keeps it out of the resource rows and only uses its label.
        fertilizers: idaSystemData?.fertilizers || [],
        pesticides: idaSystemData?.pesticides || [],
        pests,
        generalResources,
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
                title={t(metric.titleKey, metric.title)}
                count={metricValues?.[indexInAll]?.length ?? 0}
                expanded={expanded.has(metric.id)}
                onChange={togglePanel(metric.id)}
            >
                <MetricFieldArray
                    control={control}
                    name={metric.id}
                    title={t(metric.titleKey, metric.title)}
                    schema={resolveSchema(metric.schema, dataSources, t)}
                    dateField={metric.dateField}
                    totalField={metric.totalField}
                    totalUnit={metric.totalUnit}
                    defaultDate={defaultDate}
                    minDate={firstDayOfMonth}
                    maxDate={lastDayOfMonth}
                    availableFields={availableFields}
                    disabled={noFieldsAvailable}
                    disabledReason={noFieldsAvailable ? t("noFieldsForMonth", "No fields available to select for this month.") : null}
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
                                {t("trackingMatrix", "IDA Tracking Matrix")}
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

                        <Box sx={{ ml: "auto", minWidth: { sm: 320 }, width: { xs: "100%", sm: "auto" }, mt: { xs: 1, sm: 0 } }}>
                            <Controller
                                control={control}
                                name="manager"
                                rules={{ required: t("managerRequired", "Select a manager") }}
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
                                                label={t("manager", "Manager")}
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
                            {t(
                                "noFieldsWarning",
                                "No fields are available for this month — records can't be logged and this matrix can't be saved until at least one field exists."
                            )}
                        </Alert>
                    )}

                    <Box
                        sx={{
                            display: "grid",
                            // minmax(0, 1fr) stops wide tables from stretching the track past the viewport
                            gridTemplateColumns: { xs: "minmax(0, 1fr)", lg: "repeat(2, minmax(0, 1fr))" },
                            gap: 3,
                            mb: 4,
                            alignItems: "start",
                        }}
                    >
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, minWidth: 0 }}>
                            {METRICS.slice(0, half).map((m, i) => renderPanel(m, i))}
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, minWidth: 0 }}>
                            {METRICS.slice(half).map((m, i) => renderPanel(m, i + half))}
                        </Box>
                    </Box>

                    {submitError && (
                        <Alert severity="error" sx={{ mb: 3 }} onClose={() => setSubmitError(null)}>
                            {submitError}
                        </Alert>
                    )}

                    {/* Docked to the bottom of the viewport so Save stays reachable without scrolling */}
                    <Box
                        sx={{
                            position: "sticky",
                            bottom: 0,
                            zIndex: (theme) => theme.zIndex.appBar,
                            display: "flex",
                            flexWrap: "wrap",
                            gap: 2,
                            justifyContent: "space-between",
                            alignItems: "center",
                            mx: { xs: -2, sm: -4 },
                            mb: -4,
                            px: { xs: 2, sm: 4 },
                            py: 1.5,
                            pb: "calc(12px + env(safe-area-inset-bottom))",
                            bgcolor: "background.paper",
                            borderTop: "2px solid",
                            borderColor: "divider",
                            boxShadow: "0 -4px 12px rgba(0, 0, 0, 0.08)",
                            borderBottomLeftRadius: { xs: 0, sm: 8 },
                            borderBottomRightRadius: { xs: 0, sm: 8 },
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
                                    label={t("markMatrixAsDraft", "Mark configuration matrix as Draft")}
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
                                ? t("saving", "Saving Records...")
                                : t("saveRecords", "Save Matrix Records")}
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default IDAForm;
