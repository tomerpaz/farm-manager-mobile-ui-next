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
    // fertilizer_id means the record is a farmer's explicit declaration that
    // nothing was applied, so date/amount are forced (last day of the
    // month / 0) and locked instead of being left editable. Only the
    // trigger field(s) are watched (not the whole form), so this doesn't
    // re-run on every keystroke elsewhere in the dialog.
    const triggerFields = useMemo(() => schema.filter((f) => f.zeroLinksTo), [schema]);
    const triggerNames = useMemo(() => triggerFields.map((f) => f.name), [triggerFields]);
    const triggerValues = useWatch({ control, name: triggerNames });

    const disabledByZero = useMemo(() => {
        const disabled = new Set();
        triggerFields.forEach((f, i) => {
            if (triggerValues[i] === 0) {
                f.zeroLinksTo.forEach((name) => disabled.add(name));
            }
        });
        return disabled;
    }, [triggerFields, triggerValues]);
    // Fields any zeroLinksTo points at — these get the stricter "must be
    // positive" rule (not just "0 or greater") once a real resource is
    // picked instead of the "None" option.
    const autoManagedFields = useMemo(
        () => new Set(schema.flatMap((f) => f.zeroLinksTo || [])),
        [schema]
    );

    useEffect(() => {
        if (!open) return;
        triggerFields.forEach((f, i) => {
            if (triggerValues[i] !== 0) return;
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
            onSave(record);
            onClose();
        })(event);
    };

    return (
        <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth slotProps={{ paper: { elevation: 3 } }}>
            <DialogTitle sx={{ pb: 1, fontWeight: 700 }}>
                {initialData ? `Edit ${title || "Entry"}` : `Add New ${title || "Entry"}`}
            </DialogTitle>
            <form onSubmit={handleFormSubmit} noValidate>
                <DialogContent sx={{ pt: 1, pb: 2 }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 3, pt: 1 }}>
                        {schema.map((f) => {
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
                                // A field a "None" option zeroLinksTo forces to 0 while
                                // disabled — once a real resource is picked and it's
                                // enabled again, 0 itself is no longer a valid amount.
                                const mustBePositive = autoManagedFields.has(f.name) && !isDisabled;
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
                                                        endAdornment: f.unit ? (
                                                            <InputAdornment position="end">{f.unit}</InputAdornment>
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
                                        <TextField {...field} label={f.label} size="medium" fullWidth multiline={f.multiline} />
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
