import { useMemo, useState } from "react";
import { useFieldArray } from "react-hook-form";
import {
    Alert,
    Box,
    Button,
    IconButton,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Tooltip,
    Divider,
    useMediaQuery,
} from "@mui/material";
import { Add, Delete, Edit } from "@mui/icons-material";
import MetricFormDialog from "./MetricFormDialog";
import useIdaText from "./useIdaText";
import { resourceRowUnit } from "./ResourceRowsField";

const CLOSED = { open: false, index: null, initialData: null };

const formatDate = (value) =>
    value ? new Date(value).toLocaleDateString("en-AU") : "—";

const formatQty = (value, unit) => {
    if (value === null || value === undefined || value === "") return "—";
    const n = Number(value);
    if (Number.isNaN(n)) return "—";
    return `${n.toLocaleString("en-AU", { maximumFractionDigits: 2 })}${unit ? ` ${unit}` : ""}`;
};

// unitFrom number fields take their unit from the option this row's
// select (e.g. energySourceId) points at.
const optionUnit = (schema, f, field) => {
    const sourceField = schema.find((s) => s.name === f.unitFrom);
    return (sourceField?.options || []).find((o) => o.id === field[f.unitFrom])?.unit;
};

// The field spec drives both the add/edit dialog (MetricFormDialog) and this
// table: schema[].column === false hides it from the table, and dateColumn/
// totalField pick which entries feed the "Log Date" header and totals row.
export default function MetricFieldArray({
    control,
    name,
    title,
    schema,
    dateField,
    totalField,
    totalUnit,
    defaultDate,
    minDate,
    maxDate,
    availableFields,
    disabled,
    disabledReason,
    mandatoryError,
}) {
    const { fields, append, remove, update } = useFieldArray({ control, name });
    const t = useIdaText();
    const [dialogState, setDialogState] = useState(CLOSED);
    // Phones get stacked cards instead of a wide table, which would otherwise
    // force horizontal scrolling inside the narrow accordion.
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

    const rows = useMemo(
        () =>
            fields
                .map((field, index) => ({ field, index }))
                .sort((a, b) => new Date(b.field[dateField] ?? 0) - new Date(a.field[dateField] ?? 0)),
        [fields, dateField]
    );

    // A totalField pointing at a resources list sums its rows' amounts —
    // per unit, since unitFromResource rows (fertilizers) can mix kg and L.
    // Nothing to sum (e.g. only "No NPK" entries) shows 0 in totalUnit.
    const totalText = useMemo(() => {
        const totalSpec = schema.find((s) => s.name === totalField) || {};
        const byUnit = new Map();
        const add = (unit, value) => byUnit.set(unit, (byUnit.get(unit) || 0) + (Number(value) || 0));
        fields.forEach((f) => {
            const value = f[totalField];
            if (Array.isArray(value)) value.forEach((r) => add(resourceRowUnit(r?.resource, totalSpec, t), r?.amount));
            else add((totalSpec.unitFrom && optionUnit(schema, totalSpec, f)) || totalUnit, value);
        });
        if (byUnit.size === 0) return formatQty(0, totalUnit);
        return [...byUnit].map(([unit, sum]) => formatQty(sum, unit)).join(", ");
    }, [fields, totalField, totalUnit, schema, t]);

    const tableColumns = schema.filter((f) => f.column !== false);

    const formatCell = (f, field) => {
        const value = field[f.name];
        if (f.type === "date") return formatDate(value);
        if (f.type === "number") {
            // unitFrom fields carry their unit on whichever option this
            // row's own select field points at, rather than a fixed
            // schema-level unit like fertilizers' "kg".
            return formatQty(value, f.unitFrom ? optionUnit(schema, f, field) : f.unit);
        }
        if (f.type === "select" || f.type === "autocomplete") {
            const opt = (f.allOption ? [{ id: 0, name: t("allSites", "All Sites") }, ...(f.options || [])] : f.options || []).find(
                (o) => o.id === value
            );
            return opt?.name || (value === "" || value === undefined || value === null ? "—" : `#${value}`);
        }
        if (f.type === "multiselect") {
            if (!value?.length) return "—";
            const names = value.map((id) => (f.options || []).find((o) => o.id === id)?.name || `#${id}`);
            return names.join(", ");
        }
        if (f.type === "resources") {
            // An empty list is the "No NPK" / "No Active Ingredient" declaration.
            if (!value?.length) return f.emptyLabel || "—";
            return value
                .map((r) => {
                    const name =
                        r.resource?.name ||
                        (f.options || []).find((o) => o.id === r.resource?.id)?.name ||
                        `#${r.resource?.id}`;
                    const unit = resourceRowUnit(r.resource, f, t);
                    return r.amount === null || r.amount === undefined || r.amount === ""
                        ? name
                        : `${name} (${formatQty(r.amount, unit)})`;
                })
                .join(", ");
        }
        if (f.type === "fields") {
            if (!value?.length) return "—";
            const names = value.map((id) => (availableFields || []).find((af) => af.id === id)?.name || `#${id}`);
            return names.join(", ");
        }
        return value || "—";
    };

    const handleOpenAdd = () => setDialogState({ open: true, index: null, initialData: null });

    const handleOpenEdit = (index) => {
        // useFieldArray injects its own `id` onto each field; drop it before
        // handing the row back to the dialog so it never lands in form state.
        const { id, ...initialData } = fields[index];
        setDialogState({ open: true, index, initialData });
    };

    const handleClose = () => setDialogState(CLOSED);

    const handleSave = (data) => {
        if (dialogState.index !== null) {
            update(dialogState.index, data);
        } else {
            append(data);
        }
    };

    const renderActions = (field, index) => (
        <Box sx={{ display: "flex", justifyContent: "center", gap: 0.5 }}>
            <Tooltip title={t("editEntry", "Edit entry")}>
                <IconButton
                    size="small"
                    color="primary"
                    aria-label={t("editEntryAria", "Edit {title} from {date}", { title, date: formatDate(field[dateField]) })}
                    onClick={() => handleOpenEdit(index)}
                >
                    <Edit fontSize="small" />
                </IconButton>
            </Tooltip>
            <Tooltip title={t("removeEntry", "Remove entry")}>
                <IconButton
                    size="small"
                    color="secondary"
                    aria-label={t("removeEntryAria", "Remove {title} from {date}", { title, date: formatDate(field[dateField]) })}
                    onClick={() => remove(index)}
                >
                    <Delete fontSize="small" />
                </IconButton>
            </Tooltip>
        </Box>
    );

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, width: "100%", minWidth: 0 }}>
            {mandatoryError && (
                <Alert severity="error" sx={{ borderRadius: 2 }}>
                    {mandatoryError}
                </Alert>
            )}
            <Box
                sx={{ display: "flex", flexWrap: "wrap", justifyContent: "flex-end", alignItems: "center", gap: 1.5 }}
            >
                {disabled && disabledReason && (
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                        {disabledReason}
                    </Typography>
                )}
                <Button
                    size="medium"
                    variant="contained"
                    startIcon={<Add />}
                    onClick={handleOpenAdd}
                    disabled={disabled}
                    sx={{ textTransform: "none" }}
                >
                    {t("addRecordEntry", "Add Record Entry")}
                </Button>
            </Box>

            {fields.length === 0 ? (
                <Box
                    sx={{
                        p: { xs: 2.5, sm: 4 },
                        textAlign: "center",
                        border: "1px dashed",
                        borderColor: "divider",
                        borderRadius: 2,
                        bgcolor: "action.hover",
                    }}
                >
                    <Typography variant="body1" sx={{ color: "text.secondary" }}>
                        {t("noRecords", "No records logged under this parameter segment.")}
                    </Typography>
                </Box>
            ) : isMobile ? (
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                    {rows.map(({ field, index }) => (
                        <Paper key={field.id} variant="outlined" sx={{ borderRadius: 2, overflow: "hidden" }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    pl: 1.5,
                                    pr: 0.5,
                                    py: 0.5,
                                    bgcolor: "action.hover",
                                }}
                            >
                                <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                                    {formatDate(field[dateField])}
                                </Typography>
                                {renderActions(field, index)}
                            </Box>
                            <Divider />
                            <Box
                                component="dl"
                                sx={{
                                    display: "grid",
                                    gridTemplateColumns: "auto minmax(0, 1fr)",
                                    columnGap: 2,
                                    rowGap: 0.75,
                                    m: 0,
                                    p: 1.5,
                                }}
                            >
                                {tableColumns
                                    .filter((f) => f.name !== dateField)
                                    .map((f) => (
                                        <Box key={f.name} sx={{ display: "contents" }}>
                                            <Typography component="dt" variant="body2" sx={{ color: "text.secondary" }}>
                                                {f.label}
                                            </Typography>
                                            <Typography
                                                component="dd"
                                                variant="body2"
                                                sx={{ m: 0, textAlign: "right", overflowWrap: "anywhere" }}
                                            >
                                                {formatCell(f, field)}
                                            </Typography>
                                        </Box>
                                    ))}
                            </Box>
                        </Paper>
                    ))}
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            px: 1.5,
                            py: 1,
                            borderRadius: 2,
                            bgcolor: "action.hover",
                            fontWeight: 700,
                        }}
                    >
                        <Typography variant="body2" sx={{ fontWeight: 700 }}>
                            {t("totalCount", "Total ({count})", { count: fields.length })}
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 700 }}>
                            {totalText}
                        </Typography>
                    </Box>
                </Box>
            ) : (
                <TableContainer component={Paper} variant="outlined" elevation={0} sx={{ borderRadius: 2 }}>
                    <Table size="medium">
                        <TableHead sx={{ bgcolor: "action.hover" }}>
                            <TableRow>
                                {tableColumns.map((f) => (
                                    <TableCell
                                        key={f.name}
                                        sx={{ fontWeight: 700 }}
                                        align={f.type === "number" ? "right" : "left"}
                                    >
                                        {f.label}
                                    </TableCell>
                                ))}
                                <TableCell sx={{ fontWeight: 700, width: 110 }} align="center">
                                    {t("actions", "Actions")}
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map(({ field, index }) => (
                                <TableRow
                                    key={field.id}
                                    hover
                                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                >
                                    {tableColumns.map((f) => (
                                        <TableCell key={f.name} align={f.type === "number" ? "right" : "left"}>
                                            {formatCell(f, field)}
                                        </TableCell>
                                    ))}
                                    <TableCell align="center">
                                        {renderActions(field, index)}
                                    </TableCell>
                                </TableRow>
                            ))}
                            <TableRow sx={{ bgcolor: "action.hover" }}>
                                <TableCell sx={{ fontWeight: 700 }} colSpan={Math.max(tableColumns.length - 1, 1)}>
                                    {t("totalCount", "Total ({count})", { count: fields.length })}
                                </TableCell>
                                <TableCell align="right" sx={{ fontWeight: 700 }}>
                                    {totalText}
                                </TableCell>
                                <TableCell />
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            )}

            <MetricFormDialog
                open={dialogState.open}
                onClose={handleClose}
                onSave={handleSave}
                initialData={dialogState.initialData}
                title={title}
                schema={schema}
                defaultDate={defaultDate}
                minDate={minDate}
                maxDate={maxDate}
                availableFields={availableFields}
            />
        </Box>
    );
}
