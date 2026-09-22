import { Controller } from "react-hook-form";
import { Box, TextField, MenuItem, Typography, Stack } from "@mui/material";
import { WaterDrop } from "@mui/icons-material";

const WaterUse = ({ control, errors, text, sites }) => {
  return (
    <Box sx={{ p: 2, border: '1px solid rgba(0, 0, 0, 0.08)', borderRadius: 2, bgcolor: 'background.paper' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
        <WaterDrop color="primary" />
        <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>
          {text?.waterMetrics || "Water Use Metrics"}
        </Typography>
      </Box>

      <Stack spacing={2.5}>
        {/* ROW 1: Date & Total Amount */}
        <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
          <Controller
            name="waterUse.date"
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
            name="waterUse.amount"
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
        </Box>

        {/* ROW 2: Irrigation & Product Handling Allocations */}
        <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
          <Controller
            name="waterUse.amountWaterUseIrrigation"
            control={control}
            render={({ field }) => (
              <TextField 
                {...field} 
                type="number" 
                label={text?.irrigationAmount || "Irrigation Amount (Float)"} 
                fullWidth 
                size="small" 
              />
            )}
          />
          <Controller
            name="waterUse.amountWaterUseProductHandling"
            control={control}
            render={({ field }) => (
              <TextField 
                {...field} 
                type="number" 
                label={text?.productHandlingAmount || "Product Handling (Float)"} 
                fullWidth 
                size="small" 
              />
            )}
          />
        </Box>

        {/* ROW 3: Flow Rate & Monitoring Site Identifier */}
        <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
          <Controller
            name="waterUse.flowRate"
            control={control}
            render={({ field }) => (
              <TextField 
                {...field} 
                type="number" 
                label={text?.flowRate || "Flow Rate (Float)"} 
                fullWidth 
                size="small" 
              />
            )}
          />
          <Controller
            name="waterUse.siteId"
            control={control}
            render={({ field }) => (
              <TextField 
                {...field} 
                select 
                label={text?.monitoringSite || "Monitoring Site (Integer)"} 
                fullWidth 
                size="small"
                error={!!errors?.waterUse?.siteId}
              >
                {(sites || []).map(site => (
                  <MenuItem key={site.id} value={site.id}>
                    {site.name || `Site ${site.id}`}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default WaterUse;
