import { useMemo } from 'react';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { Clear, Search } from '@mui/icons-material';
import { useGetCropGeneraQuery, useGetProductCategoriesQuery } from '../../features/ida/idaApiSlice';

// Free-text field filter shared by the site's field list and map: matches
// name, alias, crop, variety, crop genus and product category, ignoring case.
export const useFieldFilter = (fields, query) => {
    const { data: cropGenera = [] } = useGetCropGeneraQuery();
    const { data: productCategories = [] } = useGetProductCategoriesQuery();
    const trimmedQuery = query.trim().toLowerCase();
    return useMemo(() => {
        if (!trimmedQuery) return fields;
        return fields?.filter((f) => [
            f.name,
            f.alias,
            f.cropName,
            f.varietyName,
            cropGenera.find((g) => g.id === f.ggCropGenusId)?.name,
            productCategories.find((c) => c.id === f.ggProductCategoryId)?.name,
        ].some((v) => v && String(v).toLowerCase().includes(trimmedQuery)));
    }, [fields, trimmedQuery, cropGenera, productCategories]);
};

// Search input with a clear button once there's text.
export const FieldSearchBox = ({ value, onChange, text, sx }) => (
    <TextField
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={text?.searchFields || "Search fields"}
        size="small"
        fullWidth
        sx={sx}
        slotProps={{
            htmlInput: { 'aria-label': text?.searchFields || "Search fields" },
            input: {
                startAdornment: (
                    <InputAdornment position="start">
                        <Search sx={{ color: 'text.disabled' }} />
                    </InputAdornment>
                ),
                endAdornment: value && (
                    <InputAdornment position="end">
                        <IconButton size="small" edge="end" aria-label={text?.clear || "Clear"} onClick={() => onChange('')}>
                            <Clear fontSize="small" />
                        </IconButton>
                    </InputAdornment>
                ),
            },
        }}
    />
);
