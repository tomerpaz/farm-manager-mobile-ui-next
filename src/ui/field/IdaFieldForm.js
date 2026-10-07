import { useState, useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useForm, Controller, useWatch } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {
    Box,
    Stack,
    TextField,
    Button,
    Typography,
    Autocomplete,
    MenuItem,
    useMediaQuery
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

import L from 'leaflet';
import { selectLang, selectMapZoom, setSnackbar } from '../../features/app/appSlice';
import { asLocalDate, DEFAULT_COORDINATES, toDateOrNull, toPickerValue } from '../FarmUtil';
import ActionApprovalDialog from '../../components/ui/ActionApprovalDialog';
import Loading from '../../components/Loading';
import {
    useCreateFieldMutation,
    useDeleteFieldMutation,
    useGetFieldQuery,
    useUpdateFieldMutation,
    safeParseJson
} from '../../features/fields/fieldsApiSlice';
import { useGetSiteQuery } from '../../features/sites/sitesApiSlice';
import FieldPolygonDraw from './FieldPolygonDraw';
import { useGetCropGeneraQuery, useGetProductCategoriesQuery } from '../../features/ida/idaApiSlice';
import GoBackAppBar from '../../appbar/content/GoBackAppBar';
import GoBackDesktopButton from '../../components/ui/GoBackDesktopButton';

const parseISO = (v) => dayjs(v).toDate()

const DEFAULT_COLOR = '#43a047';
// Crop-associated colors, picked to stay distinct from each other and
// readable at 50% fill over satellite imagery.
const COLOR_PRESETS = [
    '#43a047', // green — leafy vegetables, general crops
    '#9ccc65', // light green — lettuce, young/seedling crops
    '#827717', // olive — olives, orchards
    '#fdd835', // golden yellow — wheat, barley, cereals
    '#fb8c00', // orange — citrus, pumpkin, carrots
    '#e53935', // red — tomatoes, peppers, apples
    '#d81b60', // magenta — berries, cherries
    '#8e24aa', // purple — grapes, vineyards
    '#6d4c41', // brown — potatoes, root crops, fallow
    '#1e88e5', // blue — greenhouses, rice, irrigated plots
];
const isHexColor = (v) => /^#[0-9a-f]{6}$/i.test(v || '');
const isMobileWidth = () => typeof window !== 'undefined' && window.innerWidth <= 600;

const IdaFieldForm = () => {
    const navigate = useNavigate();
    const { siteId, fieldId } = useParams();
    const dispatch = useDispatch();
    const text = useSelector(selectLang);
    const mapZoom = useSelector(selectMapZoom);
    // Matches the grid's md breakpoint, where the map sits beside the fields.
    const isSideBySide = useMediaQuery((theme) => theme.breakpoints.up('md'));

    // Active UI modal tracking states
    const [deleteOpen, setDeleteOpen] = useState(false);

    // RTK Query hooks
    const isNewField = fieldId === '0';
    const { data: field, isSuccess: isFieldsSuccess, isLoading } = useGetFieldQuery(fieldId, { skip: isNewField });
    const { data: cropGenera = [], isSuccess: isCropGeneraSuccess } = useGetCropGeneraQuery();
    const { data: productCategories = [], isSuccess: isProductCategoriesSuccess } = useGetProductCategoriesQuery();

    const [createField] = useCreateFieldMutation();
    const [updateField] = useUpdateFieldMutation();
    const [deleteField] = useDeleteFieldMutation();

    // Safely normalise initial field states
    const getCleanFieldDefaults = (rawFieldData) => {
        return {
            id: rawFieldData?.id || null,
            name: rawFieldData?.name ?? '',
            area: rawFieldData?.area ?? '',
            endDate: rawFieldData?.endDate ? parseISO(rawFieldData.endDate) : null,
            startDate: rawFieldData?.startDate ? parseISO(rawFieldData.startDate) : null,
            siteId: rawFieldData?.siteId ?? siteId,
            ggCropGenus: rawFieldData?.ggCropGenusId ? { id: rawFieldData?.ggCropGenusId, name: cropGenera.find((g) => g.id === rawFieldData?.ggCropGenusId)?.name } : null,
            ggProductCategory: rawFieldData?.ggProductCategoryId ? { id: rawFieldData?.ggProductCategoryId, name: productCategories.find((c) => c.id === rawFieldData?.ggProductCategoryId)?.name } : null,
            ida: true,
            ggId: rawFieldData?.ggId ?? null,
            type: rawFieldData?.type ?? 'openField',
            soilType: rawFieldData?.soilType ?? 'soil',
            // Map shape — polygon is a JSON string of [lat, lng] points; lat/lng
            // is the polygon's center and zoom the view it was drawn at.
            polygon: rawFieldData?.polygon ?? null,
            lat: rawFieldData?.lat ?? null,
            lng: rawFieldData?.lng ?? null,
            zoom: rawFieldData?.zoom ?? null,
            color: rawFieldData?.color || DEFAULT_COLOR,
        };
    };

    // Form initialization hook
    const { control, handleSubmit, setValue, reset } = useForm({
        defaultValues: getCleanFieldDefaults(isNewField ? {} : field),
    });

    // Sync state modifications smoothly whenever async data finishes fetching
    useEffect(() => {
        if ((isFieldsSuccess && field) || (isNewField && isCropGeneraSuccess && isProductCategoriesSuccess)) {
            reset(getCleanFieldDefaults(isNewField ? {} : field));
        }
    }, [field, isFieldsSuccess, reset, isCropGeneraSuccess, isProductCategoriesSuccess, isNewField]);

    // Before a polygon exists the map opens on the field's site.
    const fieldSiteId = field?.siteId ?? siteId;
    const { data: site } = useGetSiteQuery(fieldSiteId, { skip: !fieldSiteId || String(fieldSiteId) === '0' });

    const [polygonJson, fieldLat, fieldLng, fieldZoom, color] = useWatch({ control, name: ['polygon', 'lat', 'lng', 'zoom', 'color'] });
    const polygonPoints = useMemo(() => {
        const points = safeParseJson(polygonJson);
        return Array.isArray(points) && points.length > 2 ? points : null;
    }, [polygonJson]);

    let mapCenter = DEFAULT_COORDINATES;
    if (polygonPoints) {
        mapCenter = fieldLat != null && fieldLng != null
            ? [Number(fieldLat), Number(fieldLng)]
            : (({ lat, lng }) => [lat, lng])(L.latLngBounds(polygonPoints).getCenter());
    } else if (site?.lat != null && site?.lng != null && site.lat !== '' && site.lng !== '') {
        mapCenter = [Number(site.lat), Number(site.lng)];
    }
    const mapViewZoom = (polygonPoints && fieldZoom) || mapZoom;

    const handlePolygonDraw = ({ polygon, lat, lng, zoom }) => {
        setValue('polygon', JSON.stringify(polygon), { shouldDirty: true });
        setValue('lat', lat, { shouldDirty: true });
        setValue('lng', lng, { shouldDirty: true });
        setValue('zoom', zoom, { shouldDirty: true });
    };


    if (!isCropGeneraSuccess || !isProductCategoriesSuccess || isLoading || (!isNewField && !field)) {
        return (
            <Box sx={{ p: 4, display: 'flex', justifyContent: 'center' }}>
                <Loading />
            </Box>
        );
    }
    const onSubmit = async (data) => {
        try {
            data.ggCropGenusId = data.ggCropGenus?.id || null;
            data.ggProductCategoryId = data.ggProductCategory?.id || null;
            data.startDate = data.startDate ? asLocalDate(data.startDate, true) : null;
            data.endDate = data.endDate ? asLocalDate(data.endDate, true) : null;

            if (data.id) {
                await updateField(data).unwrap();
            } else {
                await createField(data).unwrap();
            }
            dispatch(setSnackbar({ msg: data.id ? text.recordUpdated : text.recordCreated, severity: 'success' }));
            navigate(-1);
        } catch (err) {
            console.error("Failed to commit field form configuration updates:", err);
        }
    };

    const handleDelete = async (isConfirmed) => {
        setDeleteOpen(false);
        if (isConfirmed && field?.id) {
            try {
                await deleteField(field.id).unwrap();
                dispatch(setSnackbar({ msg: text.recordDeleted, severity: 'success' }));
                navigate(-1);
            } catch (err) {
                console.error("Failed to execute field data removal operation profiles:", err);
            }
        }
    };

    return (
        <Box sx={{ width: '100%' }}>
            <GoBackAppBar />
            <Box sx={{
                width: '100% !important',
                boxSizing: 'border-box !important',
                maxWidth: { xs: '100% !important', sm: '800px !important', md: '1200px !important' },
                minWidth: '0px !important',
                flex: { xs: '1 1 100% !important', sm: 'initial' },
                margin: '0 auto !important',
                position: 'relative',
                px: { xs: 2, sm: 3 },
                pt: { xs: 2, sm: '32px !important' },
                pb: { xs: 4, sm: 4 },
                borderRadius: { xs: 0, sm: 2 },
                boxShadow: { xs: 0, sm: 2 }
            }}>

                {/* Header Layout */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
                    <GoBackDesktopButton />

                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography
                            variant="body2"
                            sx={{ color: 'success.main', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: { xs: '0.72rem', sm: '0.85rem' }, mb: 0.25 }}
                        >
                            {text.field || "Field Details"}
                        </Typography>
                        <Typography
                            variant="h4"
                            sx={{ fontWeight: 800, fontSize: { xs: '1.35rem', sm: '1.85rem' }, color: 'text.primary', letterSpacing: '-0.02em' }}
                        >
                            {isNewField ? (text.createRecord || "New Field") : (field?.name || "Loading Field...")}
                        </Typography>
                    </Box>
                </Box>
                {/* Main Structural Inputs Form */}
                <form onSubmit={handleSubmit(onSubmit)} noValidate style={{ width: '100%' }}>
                    <Stack spacing={2.5} sx={{ width: '100%' }}>
                        {/* Mobile: fields, map, actions stacked. Desktop: fields with the
                            actions pinned under them on the left, the map filling the
                            whole right column. */}
                        <Box sx={{
                            display: 'grid',
                            width: '100%',
                            gridTemplateColumns: { xs: 'minmax(0, 1fr)', md: 'minmax(0, 1fr) minmax(0, 1fr)' },
                            gridTemplateRows: { md: 'auto 1fr' },
                            gridTemplateAreas: { xs: '"fields" "map" "actions"', md: '"fields map" "actions map"' },
                            columnGap: 3,
                            rowGap: 2.5,
                        }}>
                            <Stack spacing={2.5} sx={{ gridArea: 'fields', minWidth: 0 }}>

                                {/* Row 1: Name and Size permanently locked side-by-side (flex 3 to 1) */}
                                <Box sx={{ display: "flex", flexDirection: "row", gap: 2, width: '100%' }}>
                                    <Box sx={{ flex: 3, minWidth: 0 }}>
                                        <Controller
                                            name="name"
                                            control={control}
                                            rules={{
                                                required: text.nameRequired || 'Name is required',
                                                minLength: { value: 3, message: text.nameMinLength || 'Minimum 3 characters required' }
                                            }}
                                            render={({ field, fieldState: { error } }) => (
                                                <TextField
                                                    {...field}
                                                    label={text.name || "Name"}
                                                    variant="outlined"
                                                    fullWidth
                                                    error={!!error}
                                                    helperText={error?.message}
                                                    slotProps={{ htmlInput: { style: { fontSize: '1rem', padding: '16px 14px' } } }}
                                                />
                                            )}
                                        />
                                    </Box>

                                    <Box sx={{ flex: 1, minWidth: 0 }}>
                                        <Controller
                                            name="area"
                                            control={control}
                                            rules={{
                                                required: text.areaRequired || 'Size is required',
                                                validate: (v) => Number(v) > 0 || text.mustBePositive || 'Must be greater than 0'
                                            }}
                                            render={({ field, fieldState: { error } }) => (
                                                <TextField
                                                    {...field}
                                                    label={text.size || "Size (Area)"}
                                                    variant="outlined"
                                                    fullWidth
                                                    type="number"
                                                    error={!!error}
                                                    helperText={error?.message}
                                                    slotProps={{ htmlInput: { style: { fontSize: '1rem', padding: '16px 14px' } } }}
                                                />
                                            )}
                                        />
                                    </Box>
                                </Box>

                                {/* Row 2: DatePickers locked inside structured flex blocks to stop overflow width clipping */}
                                <Box sx={{ display: "flex", flexDirection: "row", gap: 2, width: '100%' }}>
                                    {/* FIX: Explicitly clamp the flex structure and set minWidth: 0 on the parent container element */}
                                    <Box sx={{ flex: 1, minWidth: 0 }}>
                                        <Controller
                                            name="startDate"
                                            control={control}
                                            rules={{
                                                validate: (v) => (v && dayjs(v).isValid()) || text.startRequired || 'Start date is required'
                                            }}
                                            render={({ field, fieldState: { error } }) => (
                                                <DatePicker
                                                    label={text.start || "Start Date"}
                                                    closeOnSelect
                                                    showToolbar={false}
                                                    localeText={{
                                                        cancelButtonLabel: text.cancel,
                                                        clearButtonLabel: text.clear,
                                                        okButtonLabel: text.save
                                                    }}
                                                    slotProps={{
                                                        textField: {
                                                            variant: 'outlined',
                                                            fullWidth: true,
                                                            error: !!error,
                                                            helperText: error?.message,
                                                            sx: {
                                                                '& .MuiInputBase-root': { fontSize: '1rem' },
                                                                '& .MuiInputBase-input': { padding: '16px 14px' }
                                                            }
                                                        },
                                                        actionBar: { actions: ["cancel"] }
                                                    }}
                                                    {...field}
                                                    value={toPickerValue(field.value)}
                                                    onChange={(v) => field.onChange(toDateOrNull(v))}
                                                />
                                            )}
                                        />
                                    </Box>

                                    {/* FIX: Explicitly clamp the flex structure and set minWidth: 0 on the parent container element */}
                                    <Box sx={{ flex: 1, minWidth: 0 }}>
                                        <Controller
                                            name="endDate"
                                            control={control}
                                            render={({ field }) => (
                                                <DatePicker
                                                    label={text.end || "End Date"}
                                                    closeOnSelect
                                                    showToolbar={false}
                                                    localeText={{
                                                        cancelButtonLabel: text.cancel,
                                                        clearButtonLabel: text.clear,
                                                        okButtonLabel: text.save
                                                    }}
                                                    slotProps={{
                                                        textField: {
                                                            variant: 'outlined',
                                                            fullWidth: true,
                                                            sx: {
                                                                '& .MuiInputBase-root': { fontSize: '1rem' },
                                                                '& .MuiInputBase-input': { padding: '16px 14px' }
                                                            }
                                                        },
                                                        actionBar: { actions: ["cancel"] }
                                                    }}
                                                    {...field}
                                                    value={toPickerValue(field.value)}
                                                    onChange={(v) => field.onChange(toDateOrNull(v))}
                                                />
                                            )}
                                        />
                                    </Box>
                                </Box>

                                {/* Row 3: Autocomplete Select Inputs (Crop Genus & Product Category) locked side-by-side */}
                                <Box sx={{ display: "flex", flexDirection: "row", gap: 2, width: '100%' }}>
                                    <Box sx={{ flex: 1, minWidth: 0 }}>
                                        <Controller
                                            name="ggCropGenus"
                                            control={control}
                                            rules={{ required: text.cropGenusRequired || 'Crop Genus is required' }}
                                            render={({ field, fieldState: { error } }) => (
                                                <Autocomplete
                                                    {...field}
                                                    options={cropGenera}
                                                    getOptionLabel={(option) => option?.name || ''}
                                                    isOptionEqualToValue={(option, value) => option?.id === value?.id}
                                                    onChange={(_, data) => setValue('ggCropGenus', data)}
                                                    renderInput={(params) => (
                                                        <TextField {...params} label={text.cropGenus || "Crop Genus"} variant="outlined" error={!!error} helperText={error?.message} />
                                                    )}
                                                />
                                            )}
                                        />
                                    </Box>

                                    <Box sx={{ flex: 1, minWidth: 0 }}>
                                        <Controller
                                            name="ggProductCategory"
                                            control={control}
                                            rules={{ required: text.productCategoryRequired || 'Product Category is required' }}
                                            render={({ field, fieldState: { error } }) => (
                                                <Autocomplete
                                                    {...field}
                                                    options={productCategories}
                                                    getOptionLabel={(option) => option?.name || ''}
                                                    isOptionEqualToValue={(option, value) => option?.id === value?.id}
                                                    onChange={(_, data) => setValue('ggProductCategory', data)}
                                                    renderInput={(params) => (
                                                        <TextField {...params} label={text.productCategory || "Product Category"} variant="outlined" error={!!error} helperText={error?.message} />
                                                    )}
                                                />
                                            )}
                                        />
                                    </Box>
                                </Box>

                                {/* Row 4: Dropdowns (Type & Soil Type) locked side-by-side */}
                                <Box sx={{ display: "flex", flexDirection: "row", gap: 2, width: '100%' }}>
                                    <Box sx={{ flex: 1, minWidth: 0 }}>
                                        <Controller
                                            name="type"
                                            control={control}
                                            rules={{ required: true }}
                                            render={({ field }) => (
                                                <TextField
                                                    {...field}
                                                    select
                                                    label={text.type || "Type"}
                                                    variant="outlined"
                                                    fullWidth
                                                >
                                                    <MenuItem value="openField">{text.openField || 'Open Field'}</MenuItem>
                                                    <MenuItem value="covered">{text.covered || 'Covered'}</MenuItem>
                                                </TextField>
                                            )}
                                        />
                                    </Box>

                                    <Box sx={{ flex: 1, minWidth: 0 }}>
                                        <Controller
                                            name="soilType"
                                            control={control}
                                            rules={{ required: true }}
                                            render={({ field }) => (
                                                <TextField
                                                    {...field}
                                                    select
                                                    label={text.soilType || "Soil Type"}
                                                    variant="outlined"
                                                    fullWidth
                                                >
                                                    <MenuItem value="soil">Soil</MenuItem>
                                                    <MenuItem value="substrate">Substrate</MenuItem>
                                                </TextField>
                                            )}
                                        />
                                    </Box>
                                </Box>

                            </Stack>

                            <Box sx={{ gridArea: 'map', minWidth: 0, display: 'flex' }}>
                                {/* Row 5: Map shape — color picker + polygon drawing */}
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, width: '100%', minHeight: { md: 480 } }}>
                                    <FieldPolygonDraw
                                        polygon={polygonPoints}
                                        color={color || DEFAULT_COLOR}
                                        center={mapCenter}
                                        zoom={mapViewZoom}
                                        // Side by side: no fixed height — the map fills the column.
                                        height={isSideBySide ? undefined : isMobileWidth() ? '45vh' : 420}
                                        text={text}
                                        onDraw={handlePolygonDraw}
                                        onRemove={() => setValue('polygon', null, { shouldDirty: true })}
                                    />
                                    <Controller
                                        name="color"
                                        control={control}
                                        render={({ field: { value, onChange } }) => (
                                            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 1 }}>
                                                <Typography variant="subtitle2" sx={{ fontWeight: 700, mr: 0.5 }}>
                                                    {text.color || 'Color'}
                                                </Typography>
                                                {COLOR_PRESETS.map((c) => (
                                                    <Box
                                                        key={c}
                                                        component="button"
                                                        type="button"
                                                        aria-label={c}
                                                        onClick={() => onChange(c)}
                                                        sx={{
                                                            width: 28, height: 28, p: 0, borderRadius: '50%', cursor: 'pointer',
                                                            bgcolor: c,
                                                            border: '2px solid',
                                                            borderColor: value?.toLowerCase() === c ? 'text.primary' : 'transparent',
                                                            boxShadow: value?.toLowerCase() === c ? '0 0 0 2px white inset' : 'none',
                                                        }}
                                                    />
                                                ))}
                                                {/* Any other color — a rainbow swatch over the native
                                                    picker; shows the chosen color once it's a custom one. */}
                                                {(() => {
                                                    const isCustom = isHexColor(value) && !COLOR_PRESETS.includes(value.toLowerCase());
                                                    return (
                                                        <Box
                                                            component="label"
                                                            sx={{
                                                                position: 'relative', width: 28, height: 28, borderRadius: '50%', cursor: 'pointer',
                                                                background: isCustom
                                                                    ? value
                                                                    : 'conic-gradient(#e53935, #fdd835, #43a047, #00acc1, #1e88e5, #8e24aa, #e53935)',
                                                                border: '2px solid',
                                                                borderColor: isCustom ? 'text.primary' : 'transparent',
                                                                boxShadow: isCustom ? '0 0 0 2px white inset' : 'none',
                                                            }}
                                                        >
                                                            <Box
                                                                component="input"
                                                                type="color"
                                                                value={isHexColor(value) ? value : DEFAULT_COLOR}
                                                                onChange={(e) => onChange(e.target.value)}
                                                                sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer', p: 0, border: 0 }}
                                                            />
                                                        </Box>
                                                    );
                                                })()}
                                            </Box>
                                        )}
                                    />
                                </Box>

                            </Box>

                            {/* Row 6: Action Submissions Panel Bar */}
                            <Box sx={{
                                gridArea: 'actions',
                                alignSelf: { md: 'end' },
                                display: "flex",
                                justifyContent: "center",
                                gap: 2,
                                pt: 0.5
                            }}>
                                {field?.id && field?.deletable === true && (
                                    <Button
                                        type="button"
                                        onClick={() => setDeleteOpen(true)}
                                        variant="outlined"
                                        color="secondary"
                                        sx={{ textTransform: 'none', borderRadius: 2, px: 5, py: 1, fontWeight: 600 }}
                                    >
                                        {text.delete || 'Delete'}
                                    </Button>
                                )}

                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="success"
                                    sx={{
                                        textTransform: 'none',
                                        borderRadius: 2,
                                        px: 6,
                                        py: 1,
                                        fontWeight: 600,
                                        boxShadow: '0px 4px 12px rgba(46, 125, 50, 0.2)'
                                    }}
                                >
                                    {text.save || 'Save'}
                                </Button>
                            </Box>
                        </Box>
                    </Stack>
                </form>

                {/* Confirmation Dialog Component */}
                {deleteOpen && (
                    <ActionApprovalDialog
                        open={deleteOpen}
                        handleClose={handleDelete}
                        title={text.deleteFormTitle || "Confirm Deletion"}
                        body={text.deleteFormBody || "Are you sure you want to drop this field reference permanently?"}
                        okText={text.delete || "Delete"}
                        cancelText={text.cancel || "Cancel"}
                        color="secondary"
                    />
                )}
            </Box>
        </Box>
    );
};

export default IdaFieldForm;
