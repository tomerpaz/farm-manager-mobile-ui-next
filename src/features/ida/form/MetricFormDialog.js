import { useEffect, useMemo, useState } from "react";
import { useForm, Controller, useWatch } from "react-hook-form";
import dayjs from "dayjs";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Box,
    TextField,
    MenuItem,
    InputAdornment,
    Autocomplete,
    Typography,
    Badge,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import FieldSelectionDialog from "../../../ui/dialog/FieldsSelectionDialog";

// The app's LocalizationProvider is wired to AdapterDayjs (see
// LocaleApplication.js), so the pickers work in dayjs objects — form state
// stays as ISO strings either way, converted at these two edges.
const toPickerValue = (v) => (v ? dayjs(v) : null);
const toIso = (v) => (v && dayjs(v).isValid() ? dayjs(v).toISOString() : null);

// 0 is a real, selectable option meaning "every site" rather than one in
// particular — it's prepended ahead of the actual site list for any field
// with allOption: true.
const ALL_ID = 0;
const ALL_OPTION = { id: ALL_ID, name: "All Sites" };

const emptyValueFor = (f) => {
    if (f.type === "date") return null;
    if (f.type === "select" || f.type === "autocomplete") return f.allOption ? ALL_ID : "";
    if (f.type === "multiselect" || f.type === "fields") return [];
    return "";
};

// A metric record is described declaratively as a list of field specs
// (name/type/label/unit/options/required) — see IDAForm's METRICS config.
// This dialog and MetricFieldArray both read the same specs, so every
// GLOBALG.A.P.-aligned metric (water_abstracted, energy_use,
// energy_exported, precipitation, ...) gets its form/table for free instead
// of a bespoke component per record shape.
export default function MetricFormDialog({
    open,
    onClose,
    onSave,
    initialData,
    title,
    schema,
    defaultDate,
    minDate,
    maxDate,
    availableFields,
}) {
    const defaultValues = Object.fromEntries(schema.map((f) => [f.name, emptyValueFor(f)]));
    const { control, handleSubmit, reset, setValue } = useForm({ defaultValues });
    const [fieldPickerOpen, setFieldPickerOpen] = useState(false);

    useEffect(() => {
        if (!open) return;
        const values = {};
        schema.forEach((f) => {
            if (f.type === "date") {
                values[f.name] = initialData?.[f.name] ?? (f.defaultToFormDate ? defaultDate : null) ?? null;
            } else {
                values[f.name] = initialData?.[f.name] ?? emptyValueFor(f);
            }
        });
        reset(values);
    }, [open, initialData, defaultDate, reset, schema]);

    // A field can declare zeroLinksTo: ["date", "amount"] — e.g. picking the
    // "No Active Ingredient" / "No NPK" option (id 0) for pesticideId /
    // fertilizer_id, or energy source 15 ("renewable") for energySourceId —
    // means the record is a declaration that nothing external was applied,
    // so the linked fields are forced (last day of the month / 0) and
    // locked instead of being left editable. The trigger value defaults to
    // 0 (linkTriggerValue overrides it). Only the trigger field(s) are
    // watched (not the whole form), so this doesn't re-run on every
    // keystroke elsewhere in the dialog.
    const triggerFields = useMemo(() => schema.filter((f) => f.zeroLinksTo), [schema]);
    const triggerNames = useMemo(() => triggerFields.map((f) => f.name), [triggerFields]);
    const triggerValues = useWatch({ control, name: triggerNames });

    const disabledByZero = useMemo(() => {
        const disabled = new Set();
        triggerFields.forEach((f, i) => {
            if (triggerValues[i] === (f.linkTriggerValue ?? 0)) {
                f.zeroLinksTo.forEach((name) => disabled.add(name));
            }
        });
        return disabled;
    }, [triggerFields, triggerValues]);
    // Fields any zeroLinksTo points at — these get the stricter "must be
    // positive" rule (not just "0 or greater") once a real resource is
    // picked instead of the "None"/auto-managed option, but only if they
    // were already required — a linked field that's normally optional
    // (e.g. renewableAmount) shouldn't become mandatory just for being
    // auto-zeroed under the trigger.
    const autoManagedFields = useMemo(
        () => new Set(schema.flatMap((f) => f.zeroLinksTo || [])),
        [schema]
    );

    // A field can declare unitFrom: "resource_id" — e.g. general resources'
    // amount, whose unit (kg/lit/unit) depends on which resource was picked
    // rather than being fixed like fertilizers' "kg". Batched the same way
    // as triggerValues, so this doesn't re-run per keystroke elsewhere.
    const unitSourceFields = useMemo(() => schema.filter((f) => f.unitFrom), [schema]);
    const unitSourceNames = useMemo(() => unitSourceFields.map((f) => f.unitFrom), [unitSourceFields]);
    const unitSourceValues = useWatch({ control, name: unitSourceNames });

    const dynamicUnits = useMemo(() => {
        const units = {};
        unitSourceFields.forEach((f, i) => {
            const sourceSchema = schema.find((s) => s.name === f.unitFrom);
            const selected = (sourceSchema?.options || []).find((o) => o.id === unitSourceValues[i]);
            units[f.name] = selected?.unit;
        });
        return units;
    }, [unitSourceFields, unitSourceValues, schema]);

    useEffect(() => {
        if (!open) return;
        triggerFields.forEach((f, i) => {
            if (triggerValues[i] !== (f.linkTriggerValue ?? 0)) return;
            f.zeroLinksTo.forEach((linkedName) => {
                const linked = schema.find((s) => s.name === linkedName);
                if (!linked) return;
                if (linked.type === "date") {
                    setValue(linkedName, maxDate ? dayjs(maxDate).toISOString() : null);
                } else if (linked.type === "number") {
                    setValue(linkedName, 0);
                }
            });
        });
    }, [open, triggerFields, triggerValues, schema, setValue, maxDate]);

    const handleFormSubmit = (event) => {
        // MUI renders the Dialog through a portal, so this <form> is not nested
        // in the DOM — but React still bubbles the synthetic submit event up the
        // *component* tree into the parent IDA form, which would fire a save of
        // the whole month record. Stop it here.
        event.stopPropagation();
        return handleSubmit((data) => {
            const record = {};
            schema.forEach((f) => {
                const raw = data[f.name];
                // Date fields are already ISO strings here — each DatePicker's
                // onChange below converts via toIso() the moment it fires, so
                // running it again on a string (not a Date) would just return null.
                if (f.type === "number") record[f.name] = raw === "" ? null : Number(raw);
                else record[f.name] = raw;
            });
            // computeFrom fields (e.g. waterUse's amount = irrigation +
            // product handling) are never edited directly — derive them last
            // so they're summed from the already-converted numeric values.
            schema.forEach((f) => {
                if (f.computeFrom) {
                    record[f.name] = f.computeFrom.reduce((sum, name) => sum + (Number(record[name]) || 0), 0);
                }
            });
            onSave(record);
            onClose();
        })(event);
    };

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="xs"
            fullWidth
            // Without this, closing (Confirm/Cancel) restores focus to the
            // "Add Record Entry" button that opened it while this Dialog's
            // exit transition is still tearing down its aria-hidden effect
            // on #root — Chrome blocks that (a focused descendant under an
            // aria-hidden ancestor), and the resulting race is what makes
            // the very next click (often the form's own Save button) not
            // register until a second click.
            disableRestoreFocus
            // The default ~195ms exit fade left a window where clicking the
            // form's Save button right after Confirm/Cancel landed mid-close
            // — MUI was still unwinding the modal's body scroll-lock/aria-hidden
            // side effects, which visibly shifted the page (the "jump") and
            // ate that first click. Closing instantly removes that window;
            // the opening fade is untouched.
            transitionDuration={{ enter: 225, exit: 0 }}
            slotProps={{ paper: { elevation: 3 } }}
        >
            <DialogTitle sx={{ pb: 1, fontWeight: 700 }}>
                {initialData ? `Edit ${title || "Entry"}` : `Add New ${title || "Entry"}`}
            </DialogTitle>
            <form onSubmit={handleFormSubmit} noValidate>
                <DialogContent sx={{ pt: 1, pb: 2 }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 3, pt: 1 }}>
                        {schema.map((f) => {
                            if (f.hidden) return null;
                            if (f.type === "date") {
                                return (
                                    <Controller
                                        key={f.name}
                                        control={control}
                                        name={f.name}
                                        rules={{
                                            validate: (v) => !f.required || (v && dayjs(v).isValid()) || "Enter a valid date",
                                        }}
                                        render={({ field: { value, onChange, ref, ...field }, fieldState }) => (
                                            <DatePicker
                                                {...field}
                                                inputRef={ref}
                                                label={f.label}
                                                value={toPickerValue(value)}
                                                onChange={(next) => onChange(toIso(next))}
                                                disabled={disabledByZero.has(f.name)}
                                                minDate={minDate ? dayjs(minDate) : undefined}
                                                maxDate={maxDate ? dayjs(maxDate) : undefined}
                                                slotProps={{
                                                    textField: {
                                                        size: "medium",
                                                        fullWidth: true,
                                                        error: !!fieldState.error,
                                                        helperText: disabledByZero.has(f.name)
                                                            ? "Set automatically for “None” entries"
                                                            : fieldState.error?.message ?? " ",
                                                    },
                                                }}
                                            />
                                        )}
                                    />
                                );
                            }

                            if (f.type === "select") {
                                const options = f.allOption ? [ALL_OPTION, ...(f.options || [])] : f.options || [];
                                return (
                                    <Controller
                                        key={f.name}
                                        control={control}
                                        name={f.name}
                                        rules={{ validate: (v) => !f.required || v !== "" || `Select ${f.label}` }}
                                        render={({ field, fieldState }) => (
                                            <TextField
                                                {...field}
                                                select
                                                label={f.label}
                                                size="medium"
                                                fullWidth
                                                error={!!fieldState.error}
                                                helperText={fieldState.error?.message ?? " "}
                                            >
                                                {options.map((opt) => (
                                                    <MenuItem key={opt.id} value={opt.id}>
                                                        {opt.name || `#${opt.id}`}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        )}
                                    />
                                );
                            }

                            // "autocomplete" — same single-value select as "select", but with
                            // type-to-filter for option lists too long to scan in a dropdown.
                            if (f.type === "autocomplete") {
                                const options = f.options || [];
                                return (
                                    <Controller
                                        key={f.name}
                                        control={control}
                                        name={f.name}
                                        rules={{ validate: (v) => !f.required || v !== "" || `Select ${f.label}` }}
                                        render={({ field: { value, onChange, ref, ...field }, fieldState }) => (
                                            <Autocomplete
                                                {...field}
                                                options={options}
                                                getOptionLabel={(option) => option?.name || ""}
                                                isOptionEqualToValue={(option, selected) => option.id === selected?.id}
                                                value={options.find((o) => o.id === value) || null}
                                                onChange={(_, newValue) => onChange(newValue?.id ?? "")}
                                                blurOnSelect
                                                slotProps={{ paper: { elevation: 3 } }}
                                                renderInput={(params) => (
                                                    <TextField
                                                        {...params}
                                                        inputRef={ref}
                                                        label={f.label}
                                                        size="medium"
                                                        error={!!fieldState.error}
                                                        helperText={fieldState.error?.message ?? " "}
                                                    />
                                                )}
                                            />
                                        )}
                                    />
                                );
                            }

                            if (f.type === "number") {
                                const isDisabled = disabledByZero.has(f.name);
                                // A field a "None"/auto-managed trigger forces to 0 while
                                // disabled — once a real value is picked and it's enabled
                                // again, 0 itself is no longer valid, but only for fields
                                // that were already required (an optional linked field like
                                // renewableAmount stays optional once re-enabled).
                                const mustBePositive = autoManagedFields.has(f.name) && !isDisabled && f.required;
                                const unit = f.unitFrom ? dynamicUnits[f.name] : f.unit;
                                return (
                                    <Controller
                                        key={f.name}
                                        control={control}
                                        name={f.name}
                                        rules={{
                                            validate: (v) => {
                                                if (isDisabled) return true;
                                                if (v === "") return !f.required || "This field is required";
                                                const n = Number(v);
                                                if (Number.isNaN(n)) return "Enter a number";
                                                if (mustBePositive && n <= 0) return "Must be greater than 0";
                                                if (n < 0) return "Must be 0 or greater";
                                                return true;
                                            },
                                        }}
                                        render={({ field, fieldState }) => (
                                            <TextField
                                                {...field}
                                                label={f.label}
                                                type="number"
                                                size="medium"
                                                fullWidth
                                                disabled={isDisabled}
                                                error={!!fieldState.error}
                                                helperText={
                                                    isDisabled
                                                        ? "Set automatically for “None” entries"
                                                        : fieldState.error?.message ?? " "
                                                }
                                                slotProps={{
                                                    htmlInput: { min: mustBePositive ? 0.0001 : 0, step: "any", inputMode: "decimal" },
                                                    input: {
                                                        endAdornment: unit ? (
                                                            <InputAdornment position="end">{unit}</InputAdornment>
                                                        ) : null,
                                                    },
                                                }}
                                            />
                                        )}
                                    />
                                );
                            }

                            if (f.type === "multiselect") {
                                const options = f.options || [];
                                return (
                                    <Controller
                                        key={f.name}
                                        control={control}
                                        name={f.name}
                                        render={({ field: { value, onChange, ref, ...field } }) => (
                                            <Autocomplete
                                                {...field}
                                                multiple
                                                options={options}
                                                getOptionLabel={(option) => option?.name || ""}
                                                isOptionEqualToValue={(option, selected) => option.id === selected?.id}
                                                value={options.filter((o) => value?.includes(o.id))}
                                                onChange={(_, newValue) => onChange(newValue.map((o) => o.id))}
                                                slotProps={{ paper: { elevation: 3 } }}
                                                renderInput={(params) => (
                                                    <TextField {...params} inputRef={ref} label={f.label} size="medium" />
                                                )}
                                            />
                                        )}
                                    />
                                );
                            }

                            if (f.type === "fields") {
                                return (
                                    <Controller
                                        key={f.name}
                                        control={control}
                                        name={f.name}
                                        rules={{
                                            validate: (v) => !f.required || (v && v.length > 0) || "Select at least one field",
                                        }}
                                        render={({ field: { value, onChange }, fieldState }) => {
                                            const selectedNames = (availableFields || [])
                                                .filter((af) => value?.includes(af.id))
                                                .map((af) => af.name);
                                            return (
                                                <Box>
                                                    <Badge badgeContent={value?.length || 0} color="primary">
                                                        <Button
                                                            variant="outlined"
                                                            color={fieldState.error ? "error" : "primary"}
                                                            sx={{ textTransform: "none" }}
                                                            onClick={() => setFieldPickerOpen(true)}
                                                        >
                                                            {f.label}
                                                        </Button>
                                                    </Badge>
                                                    <Typography
                                                        variant="caption"
                                                        sx={{ display: "block", mt: 0.5, color: fieldState.error ? "error.main" : "text.secondary" }}
                                                    >
                                                        {fieldState.error?.message ?? (selectedNames.join(", ") || " ")}
                                                    </Typography>
                                                    <FieldSelectionDialog
                                                        open={fieldPickerOpen}
                                                        fields={availableFields || []}
                                                        hideActiveFilter
                                                        // This dialog itself is already open inside another Dialog
                                                        // (MetricFormDialog) — without disablePortal, both render as
                                                        // independent top-level modals under <body>, and their
                                                        // separate aria-hidden bookkeeping on #root can race when one
                                                        // closes, intermittently swallowing the next click (e.g. the
                                                        // month form's Save button) until a second click works.
                                                        disablePortal
                                                        handleClose={(selection) => {
                                                            if (selection) onChange(selection.map((s) => s.id));
                                                            setFieldPickerOpen(false);
                                                        }}
                                                    />
                                                </Box>
                                            );
                                        }}
                                    />
                                );
                            }

                            // "text" — free-text fields like description.
                            return (
                                <Controller
                                    key={f.name}
                                    control={control}
                                    name={f.name}
                                    render={({ field }) => (
                                        <TextField {...field} label={f.label} size="medium" fullWidth multiline={f.multiline} minRows={f.multiline ? 2 : undefined} />
                                    )}
                                />
                            );
                        })}
                    </Box>
                </DialogContent>
                <DialogActions sx={{ px: 3, pb: 2.5 }}>
                    <Button onClick={onClose} variant="outlined" color="inherit" sx={{ textTransform: "none" }}>
                        Cancel
                    </Button>
                    <Button type="submit" variant="contained" color="success" sx={{ textTransform: "none", px: 3 }}>
                        Confirm
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
}
