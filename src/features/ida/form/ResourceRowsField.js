import { Controller, useFieldArray, useFormState, useWatch } from "react-hook-form";
import {
    Autocomplete,
    Box,
    Button,
    IconButton,
    InputAdornment,
    Paper,
    TextField,
    Tooltip,
    Typography,
} from "@mui/material";
import { Add, Delete } from "@mui/icons-material";
import useIdaText from "./useIdaText";

// N/P/K are chemical symbols and stay untranslated.
const NUMBER_FIELDS = [
    { name: "qty", label: "Qty", labelKey: "qty" },
    { name: "n", label: "N" },
    { name: "p", label: "P" },
    { name: "k", label: "K" },
    { name: "amount", label: "Amount", labelKey: "amountLabel", unitFromResource: true },
];

export const EMPTY_RESOURCE_ROW = { resource: null, qty: "", n: "", p: "", k: "", amount: "" };

const validateNumber = (v, required, t) => {
    if (v === "" || v === null || v === undefined) return !required || t("required", "Required");
    const n = Number(v);
    if (Number.isNaN(n)) return t("enterNumber", "Enter a number");
    if (required && n <= 0) return t("mustBePositive", "Must be greater than 0");
    if (n < 0) return t("mustBeNonNegative", "Must be 0 or greater");
    return true;
};

// Editable list of GGElementResource rows ({ id, resource, qty, n, p, k,
// amount }) for one element. `id` stays on each row untouched so the
// server updates existing rows instead of recreating them. keyName "key"
// keeps useFieldArray's generated key from overwriting that `id`.
// `rowFields` limits which number inputs a row shows (all by default); when
// it's just ["amount"], that amount is the element's amount and is required.
export default function ResourceRowsField({ control, name, label, options, required, emptyLabel, rowFields, rowUnit }) {
    const t = useIdaText();
    const numberFields = rowFields ? NUMBER_FIELDS.filter((nf) => rowFields.includes(nf.name)) : NUMBER_FIELDS;
    const amountOnly = numberFields.length === 1 && numberFields[0].name === "amount";
    const { fields, append, remove } = useFieldArray({
        control,
        name,
        keyName: "key",
        rules: {
            validate: (rows) => !required || (rows?.length ?? 0) > 0 || t("addAtLeastOneRow", "Add at least one row"),
        },
    });
    const { errors } = useFormState({ control, name });
    const rows = useWatch({ control, name }) || [];
    const listError = errors?.[name]?.root?.message;

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                    {label}
                </Typography>
                <Button
                    size="small"
                    variant="contained"
                    disableElevation
                    startIcon={<Add />}
                    onClick={() => append({ ...EMPTY_RESOURCE_ROW })}
                    sx={{ textTransform: "none", fontWeight: 700, borderRadius: 2, px: 1.5 }}
                >
                    {t("add", "Add")}
                </Button>
            </Box>

            {fields.length === 0 && (
                <Typography variant="body2" sx={{ color: listError ? "error.main" : "text.secondary" }}>
                    {listError || emptyLabel || t("none", "None")}
                </Typography>
            )}

            {fields.map((row, index) => {
                // A resource already used in another row isn't offered again.
                const takenIds = new Set(
                    rows.filter((_, i) => i !== index).map((r) => r?.resource?.id).filter(Boolean)
                );
                const rowOptions = options.filter((o) => !takenIds.has(o.id));
                const unit = rows[index]?.resource?.unit || rowUnit;
                const renderNumber = (nf) => (
                    <Controller
                        key={nf.name}
                        control={control}
                        name={`${name}.${index}.${nf.name}`}
                        rules={{ validate: (v) => validateNumber(v, amountOnly, t) }}
                        render={({ field, fieldState }) => (
                            <TextField
                                {...field}
                                value={field.value ?? ""}
                                label={nf.labelKey ? t(nf.labelKey, nf.label) : nf.label}
                                type="number"
                                size="small"
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                                slotProps={{
                                    htmlInput: { min: 0, step: "any", inputMode: "decimal" },
                                    input: {
                                        endAdornment:
                                            nf.unitFromResource && unit ? (
                                                <InputAdornment position="end">{unit}</InputAdornment>
                                            ) : null,
                                    },
                                }}
                            />
                        )}
                    />
                );
                return (
                    <Paper key={row.key} variant="outlined" sx={{ p: 1.5, borderRadius: 2 }}>
                        <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                            <Controller
                                control={control}
                                name={`${name}.${index}.resource`}
                                rules={{ validate: (v) => !!v?.id || t("selectResource", "Select a resource") }}
                                render={({ field: { value, onChange, ref, ...field }, fieldState }) => (
                                    <Autocomplete
                                        {...field}
                                        sx={{ flex: 1, minWidth: 0 }}
                                        options={rowOptions}
                                        getOptionLabel={(option) => option?.name || (option?.id ? `#${option.id}` : "")}
                                        isOptionEqualToValue={(option, selected) => option.id === selected?.id}
                                        // Fall back to the row's own resource so a saved one
                                        // no longer in the options list still shows its name.
                                        value={value?.id ? options.find((o) => o.id === value.id) || value : null}
                                        onChange={(_, next) => onChange(next)}
                                        blurOnSelect
                                        slotProps={{ paper: { elevation: 3 } }}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                inputRef={ref}
                                                size="small"
                                                label={t("resource", "Resource")}
                                                error={!!fieldState.error}
                                                helperText={fieldState.error?.message}
                                            />
                                        )}
                                    />
                                )}
                            />
                            {amountOnly && <Box sx={{ width: { xs: 96, sm: 110 }, flexShrink: 0 }}>{renderNumber(numberFields[0])}</Box>}
                            <Tooltip title={t("removeRow", "Remove row")}>
                                <IconButton size="small" color="secondary" aria-label={t("removeRowAria", "Remove row {n}", { n: index + 1 })} onClick={() => remove(index)}>
                                    <Delete fontSize="small" />
                                </IconButton>
                            </Tooltip>
                        </Box>
                        {!amountOnly && (
                            <Box
                                sx={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(auto-fill, minmax(88px, 1fr))",
                                    gap: 1,
                                    mt: 1.5,
                                }}
                            >
                                {numberFields.map(renderNumber)}
                            </Box>
                        )}
                    </Paper>
                );
            })}

            {fields.length > 0 && listError && (
                <Typography variant="caption" sx={{ color: "error.main" }}>
                    {listError}
                </Typography>
            )}
        </Box>
    );
}
