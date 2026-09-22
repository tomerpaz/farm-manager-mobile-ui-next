import { Controller } from "react-hook-form";
import { Box, TextField, MenuItem, Typography, Stack } from "@mui/material";
import { OfflineBolt } from "@mui/icons-material";

const ENERGY_TYPES = [
  { id: 1, name: "Electricity" },
  { id: 2, name: "Diesel" },
  { id: 3, name: "Gas" }
];

const EnergyUsed = ({ control, errors, text }) => {
  return (
    <Box sx={{ p: 2, border: '1px solid rgba(0, 0, 0, 0.08)', borderRadius: 2, bgcolor: 'background.paper' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
        <OfflineBolt color="primary" />
        <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>
          {text?.energyMetrics || "Energy Audit Logs"}
        </Typography>
      </Box>

      <Stack spacing={2.5}>
        {/* ROW 1: Date & Energy Type Selection Dropdown */}
        <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
          <Controller
            name="energyUsed.date"
            control={control}
            render={({ field }) => (
              <TextField 
                {...field} 
                type="date" 
                label={text?.date || "Date"} 
                fullWidth 
                size="small" 
                slotProps={{ inputLabel: { shrink: true } }} 
              />
            )}
          />
          <Controller
            name="energyUsed.type"
            control={control}
            render={({ field }) => (
              <TextField 
                {...field} 
                select 
                label={text?.energyType || "Energy Type (Integer)"} 
                fullWidth 
                size="small"
              >
                {ENERGY_TYPES.map(type => (
                  <MenuItem key={type.id} value={type.id}>
                    {type.name}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />
        </Box>

        {/* ROW 2: Total Amount & Renewable Component Metrics */}
        <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
          <Controller
            name="energyUsed.amount"
            control={control}
            render={({ field }) => (
              <TextField 
                {...field} 
                type="number" 
                label={text?.totalAmount || "Total Amount (Float)"} 
                fullWidth 
                size="small" 
              />
            )}
          />
          <Controller
            name="energyUsed.renewableAmount"
            control={control}
            render={({ field }) => (
              <TextField 
                {...field} 
                type="number" 
                label={text?.renewableAmount || "Renewable Amount (Float)"} 
                fullWidth 
                size="small" 
              />
            )}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default EnergyUsed;
