import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {
    Box,
    Stack,
    TextField,
    Button,
    Typography,
    Autocomplete,
    MenuItem
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

import { selectLang, setSnackbar } from '../../features/app/appSlice';
import { asLocalDate, toDateOrNull, toPickerValue } from '../FarmUtil';
import ActionApprovalDialog from '../../components/ui/ActionApprovalDialog';
import Loading from '../../components/Loading';
import {
    useCreateFieldMutation,
    useDeleteFieldMutation,
    useGetFieldQuery,
    useUpdateFieldMutation
} from '../../features/fields/fieldsApiSlice';
import { useGetCropGeneraQuery, useGetProductCategoriesQuery } from '../../features/ida/idaApiSlice';
import GoBackAppBar from '../../appbar/content/GoBackAppBar';
import GoBackDesktopButton from '../../components/ui/GoBackDesktopButton';

const parseISO = (v) => dayjs(v).toDate()

const IdaFieldForm = () => {
    const navigate = useNavigate();
    const { siteId, fieldId } = useParams();
    const dispatch = useDispatch();
    const text = useSelector(selectLang);

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
                maxWidth: { xs: '100% !important', sm: '800px !important' },
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
                                    rules={{ required: text.areaRequired || 'Size is required' }}
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
                                    render={({ field }) => (
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
                                    render={({ field }) => (
                                        <Autocomplete
                                            {...field}
                                            options={cropGenera}
                                            getOptionLabel={(option) => option?.name || ''}
                                            isOptionEqualToValue={(option, value) => option?.id === value?.id}
                                            onChange={(_, data) => setValue('ggCropGenus', data)}
                                            renderInput={(params) => (
                                                <TextField {...params} label={text.cropGenus || "Crop Genus"} variant="outlined" />
                                            )}
                                        />
                                    )}
                                />
                            </Box>

                            <Box sx={{ flex: 1, minWidth: 0 }}>
                                <Controller
                                    name="ggProductCategory"
                                    control={control}
                                    render={({ field }) => (
                                        <Autocomplete
                                            {...field}
                                            options={productCategories}
                                            getOptionLabel={(option) => option?.name || ''}
                                            isOptionEqualToValue={(option, value) => option?.id === value?.id}
                                            onChange={(_, data) => setValue('ggProductCategory', data)}
                                            renderInput={(params) => (
                                                <TextField {...params} label={text.productCategory || "Product Category"} variant="outlined" />
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
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            select
                                            label={text.type || "Type"}
                                            variant="outlined"
                                            fullWidth
                                        >
                                            <MenuItem value="openField">Open Field</MenuItem>
                                            <MenuItem value="greenhouse">Greenhouse</MenuItem>
                                        </TextField>
                                    )}
                                />
                            </Box>

                            <Box sx={{ flex: 1, minWidth: 0 }}>
                                <Controller
                                    name="soilType"
                                    control={control}
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

                        {/* Row 5: Action Submissions Panel Bar */}
                        <Box sx={{
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
