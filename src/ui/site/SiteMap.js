import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useSelector } from 'react-redux';
import L from 'leaflet';
import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import { Layers } from '@mui/icons-material';
import { MapContainer, Polygon } from 'react-leaflet';

import { selectLang, selectMapZoom } from '../../features/app/appSlice';
import { safeParseJson, useGetFieldsBySiteQuery } from '../../features/fields/fieldsApiSlice';
import { useGetSiteQuery } from '../../features/sites/sitesApiSlice';
import { DEFAULT_COORDINATES, MapToolTip } from '../FarmUtil';
import SatelliteMapProvider from '../../components/map/SatelliteMapProvider';
import GeoLocation from '../../components/GeoLocation';
import Loading from '../../components/Loading';
import GoBackAppBar from '../../appbar/content/GoBackAppBar';
import GoBackDesktopButton from '../../components/ui/GoBackDesktopButton';
import { FieldSearchBox, useFieldFilter } from './FieldSearch';
import SiteMapLayersDialog, { useSiteMapLayers } from './SiteMapLayers';
import { useGetCropGeneraQuery, useGetProductCategoriesQuery } from '../../features/ida/idaApiSlice';

const DEFAULT_COLOR = '#43a047';

// All of a site's field polygons on one map, each in its own color (50%
// fill) and labelled with the lines picked in the Layers dialog (name by
// default; alias, product category, crop genus); tapping one opens that field.
const SiteMap = () => {
    const { siteId } = useParams();
    const navigate = useNavigate();
    const text = useSelector(selectLang);
    const mapZoom = useSelector(selectMapZoom);
    const [map, setMap] = useState(null);
    const [layersOpen, setLayersOpen] = useState(false);
    const [layers, toggleLayer] = useSiteMapLayers();
    const { data: cropGenera = [] } = useGetCropGeneraQuery();
    const { data: productCategories = [] } = useGetProductCategoriesQuery();

    // IDA fields store the product category as their crop and the crop genus
    // as their variety — fall back to those names, as the field list export does.
    const labelLines = (field) => [
        layers.name && field.name,
        layers.alias && field.alias,
        layers.productCategory && (productCategories.find((c) => c.id === field.ggProductCategoryId)?.name ?? field.cropName),
        layers.cropGenus && (cropGenera.find((g) => g.id === field.ggCropGenusId)?.name ?? field.varietyName),
    ].filter(Boolean);

    const { data: fields, isLoading: isFieldsLoading } = useGetFieldsBySiteQuery(siteId);
    const { data: site, isLoading: isSiteLoading } = useGetSiteQuery(siteId);

    // Same free-text filter as the field list; only matching polygons are drawn.
    const [query, setQuery] = useState('');
    const visibleFields = useFieldFilter(fields, query);

    const toShapes = (list) => (list || [])
        .map((f) => ({ field: f, points: safeParseJson(f.polygon) }))
        .filter(({ points }) => Array.isArray(points) && points.length > 2);
    const allShapes = useMemo(() => toShapes(fields), [fields]);
    const shapes = useMemo(() => toShapes(visibleFields), [visibleFields]);

    // Fit every shown polygon in view; with none, fall back to the site's location.
    useEffect(() => {
        if (!map) return;
        if (shapes.length > 0) {
            map.fitBounds(L.latLngBounds(shapes.flatMap((s) => s.points)), { padding: [24, 24] });
        } else if (site?.lat != null && site?.lng != null && site.lat !== '' && site.lng !== '') {
            map.setView([Number(site.lat), Number(site.lng)], mapZoom);
        }
    }, [map, shapes, site, mapZoom]);

    if (isFieldsLoading || isSiteLoading) {
        return (
            <Box sx={{ p: 4, display: 'flex', justifyContent: 'center' }}>
                <Loading />
            </Box>
        );
    }

    return (
        // One screen tall: title on top, the map filling everything below it.
        // Desktop: a card with the usual margins. Mobile: minimal margins.
        <Box sx={{ width: '100%', height: '100dvh', display: 'flex', flexDirection: 'column' }}>
            <GoBackAppBar />
            <Box sx={{
                flex: 1,
                minHeight: 0,
                display: 'flex',
                flexDirection: 'column',
                boxSizing: 'border-box',
                // Mobile: trim the app bar's 16px bottom margin down to 8px.
                mt: { xs: -1, sm: 0 },
                mx: { xs: 0, sm: 4 },
                mb: { xs: 0, sm: 4 },
                p: { xs: 1, sm: 3 },
                borderRadius: { xs: 0, sm: 2 },
                boxShadow: { xs: 0, sm: 2 }
            }}>
                <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', columnGap: 1.5, rowGap: 1, mb: { xs: 1, sm: 2 }, px: { xs: 1, sm: 0 } }}>
                    <GoBackDesktopButton />
                    <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                        <Typography
                            variant="body2"
                            sx={{ color: 'success.main', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: { xs: '0.72rem', sm: '0.85rem' }, mb: 0.25 }}
                        >
                            {text.siteMap || 'Site Map'}
                        </Typography>
                        <Typography
                            variant="h4"
                            noWrap
                            sx={{ fontWeight: 800, fontSize: { xs: '1.35rem', sm: '1.85rem' }, color: 'text.primary', letterSpacing: '-0.02em' }}
                        >
                            {site?.name || ''}
                        </Typography>
                    </Box>
                    {/* Next to the title on desktop, its own row on phones. */}
                    {/* Search + Layers: next to the title on desktop, their own row on phones. */}
                    {allShapes.length > 0 && (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, marginInlineStart: { sm: 'auto' }, width: { xs: '100%', sm: 'auto' } }}>
                            <FieldSearchBox value={query} onChange={setQuery} text={text}
                                sx={{ width: { xs: '100%', sm: 280 } }} />
                            <Tooltip title={text.layers || 'Layers'}>
                                <IconButton
                                    aria-label={text.layers || 'Layers'}
                                    onClick={() => setLayersOpen(true)}
                                    sx={{ flexShrink: 0, border: 1, borderColor: 'divider', borderRadius: 1, width: 40, height: 40 }}
                                >
                                    <Layers />
                                </IconButton>
                            </Tooltip>
                        </Box>
                    )}
                </Box>

                <Box
                    dir="ltr"
                    sx={{
                        position: 'relative',
                        flex: 1,
                        minHeight: 0,
                        borderRadius: 3,
                        overflow: 'hidden',
                        border: '1px solid rgba(0, 0, 0, 0.12)',
                        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.04)'
                    }}
                >
                    {shapes.length === 0 && (
                        // Floats over the map (above Leaflet's panes) instead of taking a row.
                        <Typography
                            variant="body2"
                            sx={{
                                position: 'absolute', top: 12, left: '50%', transform: 'translateX(-50%)', zIndex: 1100,
                                bgcolor: 'background.paper', color: 'text.secondary', px: 1.5, py: 0.75, borderRadius: 2,
                                boxShadow: 2, maxWidth: 'calc(100% - 120px)', textAlign: 'center'
                            }}
                        >
                            {allShapes.length === 0
                                ? (text.noFieldPolygons || 'No field polygons have been drawn for this site yet.')
                                : (text.noMatchingFields || 'No fields match "{query}".').replace('{query}', query.trim())}
                        </Typography>
                    )}
                    <MapContainer
                        style={{ position: 'absolute', inset: 0 }}
                        center={site?.lat != null && site?.lng != null && site.lat !== '' && site.lng !== '' ? [Number(site.lat), Number(site.lng)] : DEFAULT_COORDINATES}
                        zoom={mapZoom}
                        scrollWheelZoom={true}
                        ref={setMap}
                    >
                        <SatelliteMapProvider />
                        <GeoLocation />
                        {shapes.map(({ field, points }) => {
                            const color = field.color || DEFAULT_COLOR;
                            return (
                                <Polygon
                                    key={field.id}
                                    positions={points}
                                    pathOptions={{ color, fillColor: color, fillOpacity: 0.5, weight: 3 }}
                                    eventHandlers={{ click: () => navigate(`/site/${siteId}/field/${field.id}`) }}
                                >
                                    {labelLines(field).length > 0 && <MapToolTip textArr={labelLines(field)} />}
                                </Polygon>
                            );
                        })}
                    </MapContainer>
                    <SiteMapLayersDialog open={layersOpen} onClose={() => setLayersOpen(false)} layers={layers} onToggle={toggleLayer} text={text} />
                </Box>
            </Box>
        </Box>
    );
};

export default SiteMap;
