import { Accordion, AccordionSummary, AccordionDetails, Typography, Chip } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

const accordionSx = {
    border: "1px solid",
    borderColor: "divider",
    borderRadius: "8px !important",
    "&::before": { display: "none" },
};

export default function MetricPanel({ id, title, count, expanded, onChange, children }) {
    return (
        <Accordion
            elevation={0}
            sx={accordionSx}
            expanded={expanded}
            onChange={onChange}
        >
            <AccordionSummary
                expandIcon={<ExpandMore />}
                sx={{ minHeight: 64, px: { xs: 2, sm: 3 }, gap: 1.5 }}
                aria-controls={`${id}-content`}
                id={`${id}-header`}
            >
                <Typography variant="h6" sx={{ fontWeight: 600, color: "text.primary", fontSize: "1.15rem" }}>
                    {title}
                </Typography>
                {count > 0 && <Chip size="small" label={count} color="success" variant="outlined" sx={{ ml: 1.5 }} />}
            </AccordionSummary>
            <AccordionDetails
                sx={{ p: { xs: 1.5, sm: 3 }, minWidth: 0, borderTop: "1px solid", borderColor: "divider", bgcolor: "background.default" }}
            >
                {children}
            </AccordionDetails>
        </Accordion>
    );
}
