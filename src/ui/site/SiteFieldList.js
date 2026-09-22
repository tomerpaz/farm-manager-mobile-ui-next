import { useNavigate, useParams } from "react-router";
import { useSelector } from 'react-redux';
import {
    Box,
    Button,
    Card,
    CardActionArea,
    Fab,
    Typography,
    Skeleton
} from "@mui/material";
import { Add, Agriculture, CalendarMonth, ChevronRight, Grass, Category, Spa } from '@mui/icons-material';

import { selectLang } from "../../features/app/appSlice";
import { useGetFieldsBySiteQuery } from '../../features/fields/fieldsApiSlice';
import { useGetSiteQuery } from '../../features/sites/sitesApiSlice';
import { useGetCropGeneraQuery, useGetProductCategoriesQuery } from '../../features/ida/idaApiSlice';
import GoBackAppBar from '../../appbar/content/GoBackAppBar';
import GoBackDesktopButton from '../../components/ui/GoBackDesktopButton';

const formatDate = (value) => (value ? new Date(value).toLocaleDateString("en-AU") : null);

const SiteFieldList = () => {
    const { siteId } = useParams();
    const navigate = useNavigate();
    const text = useSelector(selectLang);

    // Queries
    const { data: fields, isSuccess: isFieldsSuccess, isLoading: isFieldsLoading } = useGetFieldsBySiteQuery(siteId);
    const { data: siteData, isSuccess: isSiteSuccess } = useGetSiteQuery(siteId);
    const { data: cropGenera = [] } = useGetCropGeneraQuery();
    const { data: productCategories = [] } = useGetProductCategoriesQuery();

    const siteName = isSiteSuccess && siteData ? siteData.name : "";

    const handleAddField = () => navigate(`/site/${siteId}/field/0`);

    return (
        <Box sx={{ width: '100%' }}>
            <GoBackAppBar />
            <Box
                sx={{
                    mx: 'auto',
                    boxShadow: { xs: 'none', sm: 2 },
                    position: 'relative',
                    // FIX: Replaces rigid layout constraints with a fluid flex model for all resolutions
                    flex: { xs: '1 1 100% !important', sm: 'initial' },
                    width: '100% !important',
                    maxWidth: { xs: '100% !important', sm: '800px !important' },
                    minWidth: '0px !important', // Drops the 500px rigid box constraint completely
                    boxSizing: 'border-box !important',
                    mt: { xs: 0, sm: '32px !important' }, // Dynamic vertical separation on desktop viewports
                    pt: { xs: 2, sm: 3 },
                    px: { xs: 2, sm: 3 },
                    pb: { xs: 10, sm: 6 },
                    borderRadius: { xs: 0, sm: 2 }
                }}
            >

                {/* Header Layout Grid */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>

                    {/* Left Side: Title & Back Button align together */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <GoBackDesktopButton />

                        {/* Context Title Stack */}
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            {/* The "FIELDS" structural label goes on top */}
                            <Typography
                                variant="body2"
                                sx={{
                                    color: 'success.main',
                                    fontWeight: 800,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.08em',
                                    fontSize: { xs: '0.75rem', sm: '0.85rem' },
                                    mb: 0.25
                                }}
                            >
                                {text?.fieldsTitle || "Fields"}
                            </Typography>

                            {/* The unique Site Name becomes the massive primary title */}
                            <Typography
                                variant="h4"
                                sx={{
                                    fontWeight: 800,
                                    fontSize: { xs: '1.5rem', sm: '1.85rem' },
                                    color: 'text.primary',
                                    letterSpacing: '-0.02em'
                                }}
                            >
                                {siteName || "Loading Site..."}
                            </Typography>
                        </Box>
                    </Box>

                    {/* Right Side: Desktop-only Add Button */}
                    <Button
                        variant="contained"
                        color="success"
                        startIcon={<Add />}
                        onClick={handleAddField}
                        sx={{
                            textTransform: 'none',
                            borderRadius: 2,
                            fontWeight: 600,
                            boxShadow: '0px 4px 12px rgba(46, 125, 50, 0.2)',
                            display: { xs: 'none', sm: 'inline-flex' }
                        }}
                    >
                        {text?.addFieldBtn || "Add Field"}
                    </Button>
                </Box>

                {/* Main Fields List Box */}
                <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 1.25 }}>

                    {/* LOADING SHIMMER STATE */}
                    {isFieldsLoading && [...Array(3).keys()].map((item) => (
                        <Box
                            key={item}
                            sx={{
                                py: 2, px: 2.5, borderRadius: 2.5, border: '1px solid rgba(0, 0, 0, 0.04)',
                                minHeight: '60px', display: 'flex', alignItems: 'center'
                            }}
                        >
                            <Skeleton variant="text" width="50%" height={24} animation="wave" />
                        </Box>
                    ))}

                    {/* ACTIVE DATA RENDERING MAP */}
                    {isFieldsSuccess && fields?.map((value) => {
                        const startDateLabel = formatDate(value.startDate);
                        const cropGenusName = cropGenera.find((g) => g.id === value.ggCropGenusId)?.name;
                        const productCategoryName = productCategories.find((c) => c.id === value.ggProductCategoryId)?.name;
                        const details = [
                            startDateLabel && { icon: <CalendarMonth sx={{ fontSize: '0.95rem' }} />, label: startDateLabel },
                            value.cropName && { icon: <Agriculture sx={{ fontSize: '0.95rem' }} />, label: value.cropName },
                            value.varietyName && { icon: <Spa sx={{ fontSize: '0.95rem' }} />, label: value.varietyName },
                            cropGenusName && { icon: <Grass sx={{ fontSize: '0.95rem' }} />, label: cropGenusName },
                            productCategoryName && { icon: <Category sx={{ fontSize: '0.95rem' }} />, label: productCategoryName },
                        ].filter(Boolean);

                        return (
                            <Card
                                key={value.id}
                                elevation={0}
                                sx={{
                                    bgcolor: 'rgba(46, 125, 50, 0.03)',
                                    border: '1px solid rgba(0, 0, 0, 0.06)',
                                    borderRadius: 2.5,
                                    overflow: 'hidden',
                                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                    '&:hover': {
                                        bgcolor: 'rgba(46, 125, 50, 0.06)',
                                        borderColor: 'rgba(46, 125, 50, 0.3)'
                                    }
                                }}
                            >
                                <CardActionArea
                                    onClick={() => navigate(`/site/${siteId}/field/${value.id}`)}
                                    sx={{ display: 'flex', alignItems: 'center', gap: 1.5, py: 2, px: 2.5 }}
                                >
                                    <Box sx={{ flex: 1, minWidth: 0 }}>
                                        <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.primary' }} noWrap>
                                            {value.name}
                                        </Typography>
                                        {details.length > 0 && (
                                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mt: 0.5 }}>
                                                {details.map(({ icon, label }, i) => (
                                                    <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'text.secondary' }}>
                                                        {icon}
                                                        <Typography variant="body2" noWrap>{label}</Typography>
                                                    </Box>
                                                ))}
                                            </Box>
                                        )}
                                    </Box>
                                    <ChevronRight sx={{ color: 'text.disabled', flexShrink: 0 }} />
                                </CardActionArea>
                            </Card>
                        );
                    })}
                </Box>

                {/* Empty Fallback State Area */}
                {isFieldsSuccess && fields?.length === 0 && (
                    <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', mt: 4, py: 2 }}>
                        {text?.noFieldsMessage || "No fields found. Click the button to add one."}
                    </Typography>
                )}

                {/* Floating Action Button (FAB) for Mobile screens */}
                <Fab
                    color="success"
                    aria-label="add field"
                    onClick={handleAddField}
                    sx={{
                        position: 'fixed',
                        bottom: 24,
                        right: 24,
                        boxShadow: '0px 6px 16px rgba(46, 125, 50, 0.35)',
                        zIndex: 1100,
                        display: { xs: 'flex', sm: 'none' }
                    }}
                >
                    <Add />
                </Fab>
            </Box>
        </Box>
    );
}

export default SiteFieldList;
