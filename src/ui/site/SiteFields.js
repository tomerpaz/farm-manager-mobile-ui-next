import { useEffect, useMemo, useState } from 'react';
import { Navigate, useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Box, Button, Fab, Tooltip, Typography, Skeleton } from "@mui/material";
import { Add, PictureAsPdf, TableChart } from '@mui/icons-material';

import { selectLang, selectReportGenerating } from "../../features/app/appSlice";
import { clearJustAddedFieldId, clearJustEditedFieldId, getJustAddedFieldId, getJustEditedFieldId, useGetFieldsBySiteQuery } from '../../features/fields/fieldsApiSlice';
import { useGetSiteQuery, useGetSitesQuery } from '../../features/sites/sitesApiSlice';
import { useGetCropGeneraQuery, useGetProductCategoriesQuery } from '../../features/ida/idaApiSlice';
import Loading from '../../components/Loading';
import TintedPage from '../../components/ui/TintedPage';
import { ESRI_ATTRIBUTION } from '../field/FieldShapeThumb';
import { useGenerateReportMutation } from '../../features/reports/reportApiSlice';
import { downloadReportFile, reportFailed } from '../../features/reports/reportFile';
import { FieldSearchBox, useFieldFilter } from './FieldSearch';
import SiteSwitcher from './SiteSwitcher';
import { readSelectedSiteId, storeSelectedSiteId } from './selectedSite';
import {
    FieldGridView, FieldListView, FieldMapView, FieldStatusSelect, FieldViewToggle, FieldYearPager, filterByStatus, filterByYear, useFieldYear,
    STATUS_ROOTED, storeFieldView, useFieldStatus, useFieldViewMode, VIEW_GRID, VIEW_LIST, VIEW_MAP
} from './SiteFieldViews';

// Old /site/:siteId/fields links: show that site in the Sites tab.
export const SiteFieldsRedirect = () => {
    const { siteId } = useParams();
    storeSelectedSiteId(siteId);
    return <Navigate to="/tabs/ida/sites" replace />;
};

// Old /site/:siteId/map links (the Site Map page this tab's Map view replaced).
export const SiteMapRedirect = () => {
    const { siteId } = useParams();
    storeSelectedSiteId(siteId);
    storeFieldView(VIEW_MAP);
    return <Navigate to="/tabs/ida/sites" replace />;
};

// The IDA Sites tab: one site's fields at a time, with the site picked from the title.
// Only GLOBALG.A.P.-registered sites (ggId) have fields.
const SiteFields = () => {
    const navigate = useNavigate();
    const text = useSelector(selectLang);

    const { data: sites, isSuccess: isSitesSuccess, isLoading: isSitesLoading } = useGetSitesQuery();
    const [chosenId, setChosenId] = useState(readSelectedSiteId);
    const registered = useMemo(() => (sites || []).filter((s) => s.ggId), [sites]);
    // The remembered site while it's still registered, else the first registered one.
    const siteId = (registered.find((s) => String(s.id) === String(chosenId)) ?? registered[0])?.id;
    const selectSite = (id) => {
        setChosenId(String(id));
        storeSelectedSiteId(id);
    };

    // Queries
    const { data: siteFields, isSuccess: isFieldsSuccess, isLoading: isFieldsLoading } = useGetFieldsBySiteQuery(siteId, { skip: !siteId });
    // A field just created is shown first for this visit only; the next visit
    // (or reload) lists it in the server's order again.
    const [justAddedId] = useState(getJustAddedFieldId);
    useEffect(clearJustAddedFieldId, []);
    // A field just edited is selected where it is in the list (see selectedId below).
    const [justEditedId] = useState(getJustEditedFieldId);
    useEffect(clearJustEditedFieldId, []);
    const fields = useMemo(() => {
        const added = siteFields?.find((f) => f.id === justAddedId);
        return added ? [added, ...siteFields.filter((f) => f !== added)] : siteFields;
    }, [siteFields, justAddedId]);
    const { data: siteData, isSuccess: isSiteSuccess } = useGetSiteQuery(siteId, { skip: !siteId });
    const { data: cropGenera = [] } = useGetCropGeneraQuery();
    const { data: productCategories = [] } = useGetProductCategoriesQuery();

    // Free-text filter over what each card shows (see FieldSearch).
    const [query, setQuery] = useState('');
    // Switching site (SiteSwitcher) keeps this page mounted: start the new site unfiltered.
    useEffect(() => setQuery(''), [siteId]);
    // Planted / Rooted / All, remembered for the next visit; the search applies on top.
    // The year (fields whose start-to-end period overlaps it), then Planted / Rooted / All.
    const [year, setYear] = useFieldYear();
    const yearFields = useMemo(() => filterByYear(fields, year), [fields, year]);
    const [status, setStatus] = useFieldStatus();
    const statusFields = useMemo(() => filterByStatus(yearFields, status), [yearFields, status]);
    const filteredFields = useFieldFilter(statusFields, query);
    // A field just created or edited is selected (highlighted), and shown even if the
    // Planted/Rooted filter or the search would hide it - first, in that case.
    const selectedId = justAddedId ?? justEditedId;
    const visibleFields = useMemo(() => {
        const selected = fields?.find((f) => f.id === selectedId);
        if (!selected || !filteredFields || filteredFields.includes(selected)) return filteredFields;
        return [selected, ...filteredFields];
    }, [fields, filteredFields, selectedId]);

    // List / Grid / Map, remembered in localStorage for the next visit.
    const [view, setView] = useFieldViewMode();
    const viewProps = {
        // Created: shown first. Edited: highlighted in place, and the list scrolls to it.
        selectedId,
        cropGenera,
        productCategories,
        text,
        onOpen: (field) => navigate(`/site/${siteId}/field/${field.id}`),
        onDuplicate: (field) => navigate(`/site/${siteId}/field/0?from=${field.id}`),
    };

    const siteName = isSiteSuccess && siteData ? siteData.name : "";

    const handleAddField = () => navigate(`/site/${siteId}/field/0`);

    // Exports what the list currently shows, search filter and order included.
    const [generateReport] = useGenerateReportMutation();
    const reportGenerating = useSelector(selectReportGenerating);
    const dispatch = useDispatch();
    const canExport = isFieldsSuccess && visibleFields?.length > 0 && !reportGenerating;
    const handleExport = (format) => {
        generateReport({
            type: 'site-fields',
            format,
            params: {
                siteId: Number(siteId),
                fieldIds: visibleFields.map((f) => f.id),
                lang: text?.lang,
            },
        }).unwrap()
            .then(downloadReportFile)
            .catch((err) => reportFailed(err, dispatch, text));
    };
    const exportButtonSx = { textTransform: 'none', fontWeight: 700, borderRadius: 1.5, px: { xs: 1.25, sm: 2 }, height: 36, minWidth: 0 };

    if (isSitesLoading) {
        return <Box sx={{ p: 4, display: 'flex', justifyContent: 'center', flex: 1 }}><Loading /></Box>;
    }

    // No registered site yet: explain how to get one, and offer the unregistered sites to fix.
    if (isSitesSuccess && !siteId) {
        return (
            <Box sx={{ width: '100%', maxWidth: 640, mx: 'auto', boxSizing: 'border-box', p: { xs: 2, sm: 3 }, mt: { sm: 3 }, display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Alert severity="info">
                    {text?.idaNeedsSite || "To start IDA reporting you need an active site registered in GLOBALG.A.P. Sites are registered when saved with a map location, so add a site, or open an existing one and save it again."}
                </Alert>
                {(sites || []).map((s) => (
                    <Button key={s.id} variant="outlined" color="success" onClick={() => navigate(`/site/${s.id}`)}
                        sx={{ textTransform: 'none', fontWeight: 600, justifyContent: 'flex-start' }}>
                        {s.name}
                    </Button>
                ))}
                <Button variant="contained" color="success" startIcon={<Add />} onClick={() => navigate('/site/0')}
                    sx={{ textTransform: 'none', fontWeight: 700, alignSelf: 'flex-start' }}>
                    {text?.addSite || 'Add Site'}
                </Button>
            </Box>
        );
    }

    return (
        // A faint tint behind the page's card, so the card reads as a sheet on top of it.
        // pt: the gap above the card (see TintedPage).
        <TintedPage sx={{ pt: { xs: 0, sm: 2 } }}>
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    boxShadow: { xs: 'none', sm: 2 },
                    position: 'relative',
                    // FIX: Replaces rigid layout constraints with a fluid flex model for all resolutions
                    flex: { xs: '1 1 100% !important', sm: 'initial' },
                    // Full screen width; on desktop a small margin keeps the card's shadow visible.
                    width: { xs: '100% !important', sm: 'auto !important' },
                    maxWidth: '100% !important',
                    mx: { xs: 0, sm: 3 },
                    minWidth: '0px !important', // Drops the 500px rigid box constraint completely
                    boxSizing: 'border-box !important',
                    pt: { xs: 2, sm: 2.5 },
                    px: { xs: 2, sm: 3 },
                    // Map view: the map runs to the bottom of the screen, so only a small padding.
                    pb: view === VIEW_MAP ? { xs: 2, sm: 3 } : { xs: 10, sm: 6 },
                    borderRadius: { xs: 0, sm: 2 }
                }}
            >

                {/* Header: one row on desktop (site | view | search | actions), two on a
                    tablet, three on a phone. Search and view only once there are fields. */}
                <Box
                    sx={{
                        display: 'grid',
                        alignItems: 'center',
                        columnGap: 1.5,
                        rowGap: 1.5,
                        mb: 2,
                        gridTemplateColumns: {
                            xs: 'minmax(0, 1fr) auto',
                            sm: 'auto auto auto minmax(0, 1fr) auto',
                            md: 'minmax(0, auto) auto auto auto minmax(200px, 1fr) auto',
                        },
                        gridTemplateAreas: {
                            xs: '"title actions" "view view" "year status" "search search"',
                            sm: '"title title title title actions" "view year status search search"',
                            md: '"title view year status search actions"',
                        },
                    }}
                >
                    {/* Site name: a menu to switch site or add one, with Edit beside it. */}
                    <Box sx={{ gridArea: 'title', minWidth: 0 }}>
                        <SiteSwitcher siteId={siteId} siteName={siteName} sites={sites} onSelect={selectSite} text={text} />
                    </Box>

                    {isFieldsSuccess && fields?.length > 0 && (
                        <>
                            <FieldViewToggle view={view} onChange={setView} text={text}
                                sx={{ gridArea: 'view', '& .MuiToggleButton-root': { flex: { xs: 1, sm: 'none' } } }} />
                            <FieldYearPager year={year} onChange={setYear} text={text} sx={{ gridArea: 'year', justifySelf: { xs: 'stretch', sm: 'start' }, justifyContent: 'space-between' }} />
                            <FieldStatusSelect value={status} onChange={setStatus} text={text} sx={{ gridArea: 'status' }} />
                            <FieldSearchBox value={query} onChange={setQuery} text={text} sx={{ gridArea: 'search', minWidth: 0 }} />
                        </>
                    )}

                    {/* Exports (all screens) + desktop-only Add Button */}
                    <Box sx={{ gridArea: 'actions', display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Tooltip title={text?.exportAsPdf || "Export as PDF"}>
                            <span>
                                <Button variant="outlined" color="secondary" disabled={!canExport} onClick={() => handleExport('pdf')}
                                    startIcon={<PictureAsPdf sx={{ color: canExport ? '#B7261C' : undefined }} />} sx={exportButtonSx}>
                                    PDF
                                </Button>
                            </span>
                        </Tooltip>
                        <Tooltip title={text?.exportAsExcel || "Export as Excel"}>
                            <span>
                                <Button variant="outlined" color="secondary" disabled={!canExport} onClick={() => handleExport('xlsx')}
                                    startIcon={<TableChart sx={{ color: canExport ? '#175C35' : undefined }} />} sx={exportButtonSx}>
                                    Excel
                                </Button>
                            </span>
                        </Tooltip>
                        <Button
                            variant="contained"
                            color="success"
                            startIcon={<Add />}
                            onClick={handleAddField}
                            sx={{
                                textTransform: 'none',
                                borderRadius: 1.5,
                                fontWeight: 700,
                                height: 36,
                                whiteSpace: 'nowrap',
                                boxShadow: '0px 4px 12px rgba(46, 125, 50, 0.2)',
                                display: { xs: 'none', sm: 'inline-flex' }
                            }}
                        >
                            {text?.addFieldBtn || "Add Field"}
                        </Button>
                    </Box>
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

                    {isFieldsSuccess && visibleFields?.length > 0 && view === VIEW_LIST && (
                        <FieldListView fields={visibleFields} {...viewProps} />
                    )}
                    {isFieldsSuccess && visibleFields?.length > 0 && view === VIEW_GRID && (
                        <FieldGridView fields={visibleFields} {...viewProps} />
                    )}
                    {isFieldsSuccess && visibleFields?.length > 0 && view === VIEW_MAP && (
                        <FieldMapView fields={visibleFields} site={siteData} {...viewProps} />
                    )}
                </Box>

                {/* The thumbnails' satellite tiles are Esri's, which require attribution. */}
                {isFieldsSuccess && view !== VIEW_MAP && visibleFields?.some((f) => f.polygon) && (
                    <Typography variant="caption" color="text.disabled" sx={{ display: 'block', textAlign: 'end', mt: 0.5, fontSize: '0.625rem', lineHeight: 1.2, opacity: 0.75 }}>
                        {ESRI_ATTRIBUTION}
                    </Typography>
                )}

                {/* Empty Fallback State Area */}
                {isFieldsSuccess && fields?.length === 0 && (
                    <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', mt: 4, py: 2 }}>
                        {text?.noFieldsMessage || "No fields found. Click the button to add one."}
                    </Typography>
                )}
                {isFieldsSuccess && fields?.length > 0 && visibleFields?.length === 0 && (
                    <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', mt: 4, py: 2 }}>
                        {query.trim()
                            ? (text?.noMatchingFields || 'No fields match "{query}".').replace('{query}', query.trim())
                            : yearFields?.length === 0
                            ? (text?.noFieldsInYear || 'No fields in {year}.').replace('{year}', year)
                            : (status === STATUS_ROOTED
                                ? (text?.noRootedFields || 'No rooted fields on this site.')
                                : (text?.noPlantedFields || 'No planted fields on this site.'))}
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
        </TintedPage>
    );
}

export default SiteFields;
