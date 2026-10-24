import { Controller, useFieldArray, useFormState, useWatch } from "react-hook-form";
import {
    Autocomplete,
    Badge,
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    IconButton,
    InputAdornment,
    TextField,
    Tooltip,
    Typography,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
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

// A section's title button (Fields, Pesticides, ...): outlined on a white
// fill, so the dialog's filled Confirm stays the one primary action.
export const sectionButtonSx = { textTransform: "none", bgcolor: "background.paper", "&:hover": { bgcolor: "background.paper" } };

// Soft tinted panel that groups a dialog section (Fields, a resource list)
// so sections read apart without adding more border lines. A faint
// translucent tint of the text color (lighter than action.hover's 0.04), so
// it works in light and dark themes. Inputs inside get a solid white fill
// (MUI X v9 pickers render MuiPickersOutlinedInput, not MuiOutlinedInput),
// and digits are fixed-width so number columns line up.
export const sectionPanelSx = {
    bgcolor: (theme) => alpha(theme.palette.text.primary, 0.025),
    borderRadius: 2,
    p: 2,
    fontVariantNumeric: "tabular-nums",
    "& .MuiOutlinedInput-root, & .MuiPickersOutlinedInput-root": { bgcolor: "background.paper" },
};

export const EMPTY_RESOURCE_ROW = { resource: null, qty: "", n: "", p: "", k: "", amount: "" };

// Unit shown next to a row's amount. With unitFromResource it's the picked
// resource's own usage unit (translated like elsewhere in the app, e.g.
// "KG" -> text.kg); otherwise — or with no resource/unit yet — the fixed rowUnit.
export const resourceRowUnit = (resource, { unitFromResource, rowUnit }, t) => {
    const raw = unitFromResource ? resource?.usageUnit || resource?.unit : null;
    return raw ? t(String(raw).toLowerCase(), raw) : rowUnit;
};

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
// `noneName` adds an emptyLabel checkbox ("No Active Ingredient") bound to
// that form value: ticked, the rows are cleared and Add is disabled;
// unticked, at least one row is required.
export default function ResourceRowsField({ control, name, label, options, required, emptyLabel, noneName, rowFields, rowUnit, unitFromResource }) {
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
    const { errors } = useFormState({ control, name: noneName ? [name, noneName] : name });
    const rows = useWatch({ control, name }) || [];
    // Hooks can't be conditional, so without a checkbox this just re-watches `name`.
    const noneValue = useWatch({ control, name: noneName ?? name });
    const noneChecked = !!noneName && noneValue === true;
    const listError = errors?.[name]?.root?.message || (noneName && errors?.[noneName]?.message);

    return (
        <Box
            sx={{
                ...sectionPanelSx,
                display: "flex",
                flexDirection: "column",
                gap: 2,
            }}
        >
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 1, mb: 0.5 }}>
                {/* The list's title is its add button — styled like the dialog's Fields button. */}
                <Badge badgeContent={fields.length} color="info">
                    <Button
                        variant="outlined"
                        size="large"
                        color={listError ? "error" : "primary"}
                        startIcon={<Add />}
                        disabled={noneChecked}
                        onClick={() => append({ ...EMPTY_RESOURCE_ROW })}
                        sx={sectionButtonSx}
                    >
                        {label}
                    </Button>
                </Badge>
                {noneName && (
                    <Controller
                        control={control}
                        name={noneName}
                        rules={{
                            validate: (checked, values) =>
                                checked ||
                                (values[name]?.length ?? 0) > 0 ||
                                t("addRowOrNone", 'Add at least one row, or check "{none}"', { none: emptyLabel }),
                        }}
                        render={({ field: { value, onChange, ref } }) => (
                            <FormControlLabel
                                sx={{ ml: "auto", mr: 0 }}
                                control={
                                    <Checkbox
                                        // MUI v9 dropped Checkbox's inputRef — the ref goes on the input slot.
                                        slotProps={{ input: { ref } }}
                                        size="small"
                                        checked={!!value}
                                        onChange={(e) => {
                                            if (e.target.checked) remove();
                                            onChange(e.target.checked);
                                        }}
                                    />
                                }
                                label={<Typography variant="body2">{emptyLabel}</Typography>}
                            />
                        )}
                    />
                )}
            </Box>

            {/* With the checkbox, an unticked empty list isn't "none" yet — only show its error. */}
            {fields.length === 0 && (!noneName || listError) && (
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
                const unit = resourceRowUnit(rows[index]?.resource, { unitFromResource, rowUnit }, t);
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
                    // Amount-only rows (pesticides/fertilizers) sit straight on the tinted
                    // panel with white inputs. Multi-number rows (General) keep a white
                    // card to hold the picker and its number grid together.
                    <Box key={row.key} sx={amountOnly ? undefined : { p: 1.5, borderRadius: 2, bgcolor: "background.paper" }}>
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
                    </Box>
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
