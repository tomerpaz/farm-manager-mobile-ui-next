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
} from "@mui/material";
import { Add, Delete, Edit } from "@mui/icons-material";
import MetricFormDialog from "./MetricFormDialog";

const CLOSED = { open: false, index: null, initialData: null };

const formatDate = (value) =>
    value ? new Date(value).toLocaleDateString("en-AU") : "—";

const formatQty = (value, unit) => {
    if (value === null || value === undefined || value === "") return "—";
    const n = Number(value);
    if (Number.isNaN(n)) return "—";
    return `${n.toLocaleString("en-AU", { maximumFractionDigits: 2 })}${unit ? ` ${unit}` : ""}`;
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
    const [dialogState, setDialogState] = useState(CLOSED);

    const rows = useMemo(
        () =>
            fields
                .map((field, index) => ({ field, index }))
                .sort((a, b) => new Date(b.field[dateField] ?? 0) - new Date(a.field[dateField] ?? 0)),
        [fields, dateField]
    );

    const total = useMemo(
        () => fields.reduce((sum, f) => sum + (Number(f[totalField]) || 0), 0),
        [fields, totalField]
    );

    const tableColumns = schema.filter((f) => f.column !== false);

    const formatCell = (f, field) => {
        const value = field[f.name];
        if (f.type === "date") return formatDate(value);
        if (f.type === "number") return formatQty(value, f.unit);
        if (f.type === "select" || f.type === "autocomplete") {
            const opt = (f.allOption ? [{ id: 0, name: "All Sites" }, ...(f.options || [])] : f.options || []).find(
                (o) => o.id === value
            );
            return opt?.name || (value === "" || value === undefined || value === null ? "—" : `#${value}`);
        }
        if (f.type === "multiselect") {
            if (!value?.length) return "—";
            const names = value.map((id) => (f.options || []).find((o) => o.id === id)?.name || `#${id}`);
            return names.join(", ");
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

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, width: "100%" }}>
            {mandatoryError && (
                <Alert severity="error" sx={{ borderRadius: 2 }}>
                    {mandatoryError}
                </Alert>
            )}
            <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 1.5 }}>
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
                    Add Record Entry
                </Button>
            </Box>

            {fields.length === 0 ? (
                <Box
                    sx={{
                        p: 4,
                        textAlign: "center",
                        border: "1px dashed",
                        borderColor: "divider",
                        borderRadius: 2,
                        bgcolor: "action.hover",
                    }}
                >
                    <Typography variant="body1" sx={{ color: "text.secondary" }}>
                        No records logged under this parameter segment.
                    </Typography>
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
                                    Actions
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
                                        <Box sx={{ display: "flex", justifyContent: "center", gap: 0.5 }}>
                                            <Tooltip title="Edit entry">
                                                <IconButton
                                                    size="small"
                                                    color="primary"
                                                    aria-label={`Edit ${title || "entry"} from ${formatDate(field[dateField])}`}
                                                    onClick={() => handleOpenEdit(index)}
                                                >
                                                    <Edit fontSize="small" />
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip title="Remove entry">
                                                <IconButton
                                                    size="small"
                                                    color="secondary"
                                                    aria-label={`Remove ${title || "entry"} from ${formatDate(field[dateField])}`}
                                                    onClick={() => remove(index)}
                                                >
                                                    <Delete fontSize="small" />
                                                </IconButton>
                                            </Tooltip>
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            ))}
                            <TableRow sx={{ bgcolor: "action.hover" }}>
                                <TableCell sx={{ fontWeight: 700 }} colSpan={Math.max(tableColumns.length - 1, 1)}>
                                    Total ({fields.length})
                                </TableCell>
                                <TableCell align="right" sx={{ fontWeight: 700 }}>
                                    {formatQty(total, totalUnit)}
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
