import { useNavigate, useParams } from "react-router";
import { useSelector } from 'react-redux';
import {
    Box,
    Button,
    Card,
    CardActionArea,
    Fab,
    Typography,
    Skeleton,
} from "@mui/material";
import { Add, ChevronRight, Grass, Inventory2, Person } from '@mui/icons-material';

import { selectLang } from "../../../features/app/appSlice";
import { useGetResourcesQuery } from '../../../features/resources/resourcesApiSlice'; // Adjust import path to your project
import GoBackAppBar from '../../../appbar/content/GoBackAppBar';
import GoBackDesktopButton from '../GoBackDesktopButton';
import { FERTILIZER, WORKER } from '../../../ui/FarmUtil';

const getResourceIcon = (resourceType) => {
    if (resourceType === FERTILIZER) return <Grass />;
    if (resourceType === WORKER) return <Person />;
    return <Inventory2 />;
};

const ResourceList = () => {
    // 1. Grabs the generic type parameter from your router configuration path
    const { resourceType } = useParams();
    const navigate = useNavigate();
    const text = useSelector(selectLang);

    // 2. Dynamic query path hook execution passing resourceType directly
    const { data: resources, isSuccess: isResourcesSuccess, isLoading: isResourcesLoading } = useGetResourcesQuery({ type: resourceType });

    const handleAddResource = () => navigate(`/resource/${resourceType}/0`);

    // Compute dynamic layout headers based on your URL parameters
    const getPageTitle = () => {
        if (resourceType === FERTILIZER) return text?.fertilizers || "Fertilizers";
        if (resourceType === WORKER) return text?.managers || "Managers";
        return resourceType ? resourceType.charAt(0).toUpperCase() + resourceType.slice(1) : "";
    };

    const resourceIcon = getResourceIcon(resourceType);

    return (
        <Box sx={{ width: '100%' }}>
            <GoBackAppBar />
            <Box
                sx={{
                    position: 'relative',
                    width: '100% !important',
                    maxWidth: { xs: '100% !important', sm: '800px !important' },
                    minWidth: '0px !important',
                    flex: { xs: '1 1 100% !important', sm: 'initial' },
                    margin: '0 auto !important',

                    bgcolor: 'background.paper',
                    borderRadius: { xs: 0, sm: 2 },
                    boxShadow: { xs: 0, sm: 2 },

                    mt: { xs: 0, sm: '32px !important' }, // Direct spacing beneath the top bar on desktop
                    px: { xs: 2, sm: 3 },
                    pt: { xs: 2, sm: '32px !important' },
                    pb: { xs: 10, sm: 6 },
                    boxSizing: 'border-box !important'
                }}
            >

                {/* Header Layout Grid */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>

                    {/* Left Side: Title & Back Button align together */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <GoBackDesktopButton />

                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
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
                                {text.resources || "Resources"}
                            </Typography>

                            <Typography
                                variant="h4"
                                sx={{
                                    fontWeight: 800,
                                    fontSize: { xs: '1.5rem', sm: '1.85rem' },
                                    color: 'text.primary',
                                    letterSpacing: '-0.02em'
                                }}
                            >
                                {getPageTitle()}
                            </Typography>
                        </Box>
                    </Box>

                    {/* Primary Desktop-only Add Button */}
                    <Button
                        variant="contained"
                        color="success"
                        startIcon={<Add />}
                        onClick={handleAddResource}
                        sx={{
                            textTransform: 'none',
                            borderRadius: 2,
                            fontWeight: 600,
                            boxShadow: '0px 4px 12px rgba(46, 125, 50, 0.2)',
                            display: { xs: 'none', sm: 'inline-flex' }
                        }}
                    >
                        {text?.add || "Add"}
                    </Button>
                </Box>

                {/* Main Dynamic Resources List Box */}
                <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 1.25 }}>

                    {/* LOADING SHIMMER STATE */}
                    {isResourcesLoading && [...Array(3).keys()].map((item) => (
                        <Box
                            key={item}
                            sx={{
                                py: 2, px: 2.5, borderRadius: 2.5, border: '1px solid rgba(0, 0, 0, 0.04)',
                                minHeight: '60px', display: 'flex', alignItems: 'center', bgcolor: 'background.paper'
                            }}
                        >
                            <Skeleton variant="text" width="40%" height={24} animation="wave" />
                        </Box>
                    ))}

                    {/* ACTIVE DATA RENDERING MAP */}
                    {isResourcesSuccess && resources?.map((value) => (
                        <Card
                            key={value.id}
                            elevation={0}
                            sx={{
                                bgcolor: 'rgba(46, 125, 50, 0.03)',
                                border: '1px solid rgba(0, 0, 0, 0.08)',
                                borderRadius: 2.5,
                                overflow: 'hidden',
                                transition: 'all 0.15s ease-in-out',
                                '&:hover': {
                                    bgcolor: 'rgba(46, 125, 50, 0.06)',
                                    borderColor: 'rgba(46, 125, 50, 0.3)',
                                    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.06)'
                                }
                            }}
                        >
                            <CardActionArea
                                onClick={() => navigate(`/resource/${resourceType}/${value.id}`)}
                                sx={{ display: 'flex', alignItems: 'center', gap: 2, px: 2.5, py: 2 }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: 44,
                                        height: 44,
                                        borderRadius: '50%',
                                        flexShrink: 0,
                                        bgcolor: 'rgba(46, 125, 50, 0.1)',
                                        color: 'success.main'
                                    }}
                                >
                                    {resourceIcon}
                                </Box>

                                <Box sx={{ flex: 1, minWidth: 0 }}>
                                    <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.primary' }} noWrap>
                                        {value.name}
                                    </Typography>
                                    {resourceType === 'general' && value.category && (
                                        <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
                                            {value.category}
                                        </Typography>
                                    )}
                                </Box>

                                <ChevronRight sx={{ color: 'text.disabled', flexShrink: 0 }} />
                            </CardActionArea>
                        </Card>
                    ))}
                </Box>

                {/* Empty Fallback State Area */}
                {isResourcesSuccess && resources?.length === 0 && (
                    <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', mt: 4, py: 2 }}>
                        {text?.noRecordsMessage || "No resources found."}
                    </Typography>
                )}

                {/* Floating Action Button (FAB) for Mobile screens */}
                <Fab
                    color="success"
                    aria-label="add resource"
                    onClick={handleAddResource}
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
};

export default ResourceList;
