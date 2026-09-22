import { useState, useEffect, Fragment } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {
    Box,
    Stack,
    TextField,
    Button,
    Typography,
    MenuItem,
    FormControlLabel,
    Checkbox
} from '@mui/material';

import { selectLang, setSnackbar } from '../../../features/app/appSlice';
import ActionApprovalDialog from '../../../components/ui/ActionApprovalDialog';
import Loading from '../../../components/Loading';
import GoBackAppBar from '../../../appbar/content/GoBackAppBar'
import GoBackDesktopButton from '../../../components/ui/GoBackDesktopButton'

import {
    useGetResourceQuery,
    useCreateResourceMutation,
    useDeleteResourceMutation,
    useUpdateResourceMutation
} from '../../../features/resources/resourcesApiSlice';

const ResourceForm = () => {
    const navigate = useNavigate();
    const { resourceType, resourceId } = useParams();
    const dispatch = useDispatch();
    const text = useSelector(selectLang);

    const [deleteOpen, setDeleteOpen] = useState(false);

    // RTK Query Hooks
    const isNewRecord = resourceId === '0';
    const { data: resource, isSuccess: isResourceSuccess, isLoading } = useGetResourceQuery(resourceId, { skip: isNewRecord });

    const [createResource] = useCreateResourceMutation();
    const [updateResource] = useUpdateResourceMutation();
    const [deleteResource] = useDeleteResourceMutation();

    // Safely normalise initial state properties based on active route model parameters
    const getCleanResourceDefaults = (rawData) => {
        const baseDefaults = {
            id: rawData?.id || null,
            name: rawData?.name ?? '',
            code: rawData?.code ?? '',
            active: rawData?.active ?? true,
            type: resourceType.toUpperCase()
        };

        if (resourceType === 'fertilizer') {
            return {
                ...baseDefaults,
                specificGravity: rawData?.specificGravity ?? '',
                n: rawData?.n ?? '',
                p: rawData?.p ?? '',
                k: rawData?.k ?? '',
                usageUnit: rawData?.usageUnit ?? 'KG',
                inventoryUnit: rawData?.inventoryUnit ?? 'KG'
            };
        }

        if (resourceType === 'worker') {
            return {
                ...baseDefaults,
                email: rawData?.email ?? '',
                phone: rawData?.phone ?? ''
            };
        }

        return baseDefaults;
    };

    // Form initialization hook
    const { control, handleSubmit, reset } = useForm({
        defaultValues: getCleanResourceDefaults(isNewRecord ? {} : resource),
    });

    // Sync mutations whenever backend fetches resolve
    useEffect(() => {
        if (isResourceSuccess && resource) {
            reset(getCleanResourceDefaults(resource));
        }
    }, [resource, isResourceSuccess, reset]);

    const handleGoBack = () => navigate(-1);

    if (isLoading || (!isNewRecord && !resource)) {
        return (
            <Box sx={{ p: 4, display: 'flex', justifyContent: 'center' }}>
                <Loading />
            </Box>
        );
    }
    const onSubmit = async (data) => {
        console.log(data);
        try {
            if (resourceType === 'fertilizer') {
                data.specificGravity = data.specificGravity !== '' ? Number(data.specificGravity) : null;
                data.n = data.n !== '' ? Number(data.n) : null;
                data.p = data.p !== '' ? Number(data.p) : null;
                data.k = data.k !== '' ? Number(data.k) : null;
            }

            if (data.id) {
                await updateResource(data).unwrap();
            } else {
                await createResource(data).unwrap();
            }
            dispatch(setSnackbar({ msg: data.id ? text.recordUpdated : text.recordCreated, severity: 'success' }));
            navigate(-1);
        } catch (err) {
            console.error("Failed to commit resource details modifications:", err);
        }
    };

    const handleDelete = async (isConfirmed) => {
        setDeleteOpen(false);
        if (isConfirmed && resource?.id) {
            try {
                await deleteResource(resource.id).unwrap();
                dispatch(setSnackbar({ msg: text.recordDeleted, severity: 'success' }));
                navigate(-1);
            } catch (err) {
                console.error("Failed to perform delete queries over resources:", err);
            }
        }
    };

    const getSubTitleText = () => {
        if (resourceType === 'fertilizer') return text?.fertilizer || "Fertilizer Details";
        if (resourceType === 'worker') return text?.worker || "Worker/Manager Details";
        return "";
    };

    return (
        <Box sx={{ width: '100%' }}>
            {/* Global Top App Bar - Always visible in Primary Color */}
            <GoBackAppBar />

            {/* Form Content Card Wrapper */}
            <Box sx={{
                position: 'relative',
                width: '100% !important',
                boxSizing: 'border-box !important',
                maxWidth: { xs: '100% !important', sm: '800px !important' },
                minWidth: '0px !important',
                flex: { xs: '1 1 100% !important', sm: 'initial' },
                margin: '0 auto !important',
                bgcolor: 'background.paper',
                borderRadius: { xs: 0, sm: 2 },
                boxShadow: { xs: 0, sm: 2 },
                px: { xs: 2, sm: 3 },
                pt: { xs: 2, sm: '32px !important' },
                pb: { xs: 4, sm: 4 }
            }}>

                {/* Title Block Layout Container */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
                    <GoBackDesktopButton />


                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography
                            variant="body2"
                            sx={{ color: 'success.main', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: { xs: '0.72rem', sm: '0.85rem' }, mb: 0.25 }}
                        >
                            {getSubTitleText()}
                        </Typography>
                        <Typography
                            variant="h4"
                            sx={{ fontWeight: 800, fontSize: { xs: '1.35rem', sm: '1.85rem' }, color: 'text.primary', letterSpacing: '-0.02em' }}
                        >
                            {isNewRecord ? (text.createRecord || "Create Resource") : (resource?.name || "Loading...")}
                        </Typography>
                    </Box>
                </Box>

                {/* Dynamic Form Core */}
                <form onSubmit={handleSubmit(onSubmit)} noValidate style={{ width: '100%' }}>
                    <Stack spacing={3} sx={{ width: '100%' }}>

                        {/* ROW 1: Common Parameters: Name + Code */}
                        <Box sx={{ display: "flex", flexDirection: "row", gap: 2, width: '100%' }}>
                            <Box sx={{ flex: 3, minWidth: 0 }}>
                                <Controller
                                    name="name"
                                    control={control}
                                    rules={{ required: text?.nameRequired || 'Name is required' }}
                                    render={({ field, fieldState: { error } }) => (
                                        <TextField
                                            {...field}
                                            label={text?.name || "Name"}
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
                                    name="code"
                                    control={control}
                                    render={({ field, fieldState: { error } }) => (
                                        <TextField
                                            {...field}
                                            label={text?.code || "Code"}
                                            variant="outlined"
                                            fullWidth
                                            error={!!error}
                                            helperText={error?.message}
                                            slotProps={{ htmlInput: { style: { fontSize: '1rem', padding: '16px 14px' } } }}
                                        />
                                    )}
                                />
                            </Box>
                        </Box>

                        {resourceType === 'fertilizer' && (
                            <Fragment>
                                {/* ROW 2: Specific Gravity + Unit Select Dropdown */}
                                <Box sx={{ display: "flex", flexDirection: "row", gap: 2, width: '100%' }}>
                                    <Box sx={{ flex: 1, minWidth: 0 }}>
                                        <Controller
                                            name="specificGravity"
                                            control={control}
                                            rules={{ required: true }}
                                            render={({ field, fieldState: { error } }) => (
                                                <TextField
                                                    {...field}
                                                    label={text?.specificGravity || "Specific Gravity"}
                                                    variant="outlined"
                                                    fullWidth
                                                    type="number"
                                                    error={!!error}
                                                    helperText={error?.message}
                                                    slotProps={{ htmlInput: { step: "0.01", style: { fontSize: '1rem', padding: '16px 14px' } } }}
                                                />
                                            )}
                                        />
                                    </Box>
                                    <Box sx={{ flex: 1, minWidth: 0 }}>
                                        <Controller
                                            name="usageUnit"
                                            control={control}
                                            render={({ field }) => (
                                                <TextField
                                                    {...field}
                                                    select
                                                    label={text?.unit || "Unit"}
                                                    variant="outlined"
                                                    fullWidth

                                                >
                                                    <MenuItem value="KG">{text.kg}</MenuItem>
                                                    <MenuItem value="LIT">{text.lit}</MenuItem>
                                                </TextField>
                                            )}
                                        />
                                    </Box>
                                </Box>

                                {/* ROW 3: Chemical parameters (N, P, K) */}
                                <Box sx={{ display: "flex", flexDirection: "row", gap: 2, width: '100%' }}>
                                    <Box sx={{ flex: 1, minWidth: 0 }}>
                                        <Controller
                                            name="n"
                                            control={control}
                                            render={({ field }) => (
                                                <TextField {...field} label="N (%)" variant="outlined" fullWidth type="number" slotProps={{ htmlInput: { style: { fontSize: '1rem', padding: '16px 14px' } } }} />
                                            )}
                                        />
                                    </Box>
                                    <Box sx={{ flex: 1, minWidth: 0 }}>
                                        <Controller
                                            name="p"
                                            control={control}
                                            render={({ field }) => (
                                                <TextField {...field} label="P (%)" variant="outlined" fullWidth type="number" slotProps={{ htmlInput: { style: { fontSize: '1rem', padding: '16px 14px' } } }} />
                                            )}
                                        />
                                    </Box>
                                    <Box sx={{ flex: 1, minWidth: 0 }}>
                                        <Controller
                                            name="k"
                                            control={control}
                                            render={({ field }) => (
                                                <TextField {...field} label="K (%)" variant="outlined" fullWidth type="number" slotProps={{ htmlInput: { style: { fontSize: '1rem', padding: '16px 14px' } } }} />
                                            )}
                                        />
                                    </Box>
                                </Box>
                            </Fragment>
                        )}

                        {/* WORKER / MANAGER FIELDS MODEL */}
                        {resourceType === 'worker' && (
                            <Box sx={{ display: "flex", flexDirection: "row", gap: 2, width: '100%' }}>
                                <Box sx={{ flex: 1, minWidth: 0 }}>
                                    <Controller
                                        name="email"
                                        control={control}
                                        rules={{
                                            pattern: { value: /\S+@\S+\.\S+/, message: text?.invalidEmail || 'Invalid email address' }
                                        }}
                                        render={({ field, fieldState: { error } }) => (
                                            <TextField
                                                {...field}
                                                label={text?.email || "Email"}
                                                variant="outlined"
                                                fullWidth
                                                type="email"
                                                error={!!error}
                                                helperText={error?.message}
                                                slotProps={{ htmlInput: { style: { fontSize: '1rem', padding: '16px 14px' } } }}
                                            />
                                        )}
                                    />
                                </Box>
                                <Box sx={{ flex: 1, minWidth: 0 }}>
                                    <Controller
                                        name="phone"
                                        control={control}
                                        render={({ field }) => (
                                            <TextField
                                                {...field}
                                                label={text?.phone || "Phone"}
                                                variant="outlined"
                                                fullWidth
                                                type="tel"
                                                slotProps={{ htmlInput: { style: { fontSize: '1rem', padding: '16px 14px' } } }}
                                            />
                                        )}
                                    />
                                </Box>
                            </Box>
                        )}

                        {/* Active Status Checkbox Layout */}
                        <Box>
                            <Controller
                                name="active"
                                control={control}
                                render={({ field }) => (
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                {...field}
                                                checked={!!field.value}
                                                color="success"
                                            />
                                        }
                                        label={text?.active || "Active"}
                                    />
                                )}
                            />
                        </Box>

                        {/* Action Panel Bar */}
                        <Box sx={{
                            display: "flex",
                            justifyContent: "center",
                            gap: 2,
                            pt: 0.5
                        }}>
                            {!isNewRecord && (
                                <Button
                                    type="button"
                                    onClick={() => setDeleteOpen(true)}
                                    variant="outlined"
                                    color="secondary"
                                    sx={{ textTransform: 'none', borderRadius: 2, px: 5, py: 1, fontWeight: 600 }}
                                >
                                    {text?.delete || 'Delete'}
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
                                {text?.save || 'Save'}
                            </Button>
                        </Box>
                    </Stack>
                </form>

                {/* Confirmation Dialog Component */}
                {deleteOpen && (
                    <ActionApprovalDialog
                        open={deleteOpen}
                        handleClose={handleDelete}
                        title={text?.deleteFormTitle || "Confirm Deletion"}
                        body={text?.deleteFormBody || "Are you sure you want to drop this resource reference permanently?"}
                        okText={text?.delete || "Delete"}
                        cancelText={text?.cancel || "Cancel"}
                        color="secondary"
                    />
                )}
            </Box>
        </Box>
    );
};

export default ResourceForm;