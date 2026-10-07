import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useSelector } from 'react-redux';
import L from 'leaflet';
import { Box, Typography } from '@mui/material';
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

const DEFAULT_COLOR = '#43a047';

// All of a site's field polygons on one map, each in its own color (50%
// fill) and labelled with the field name; tapping one opens that field.
const SiteMap = () => {
    const { siteId } = useParams();
    const navigate = useNavigate();
    const text = useSelector(selectLang);
    const mapZoom = useSelector(selectMapZoom);
    const [map, setMap] = useState(null);

    const { data: fields, isLoading: isFieldsLoading } = useGetFieldsBySiteQuery(siteId);
    const { data: site, isLoading: isSiteLoading } = useGetSiteQuery(siteId);

    const shapes = useMemo(
        () =>
            (fields || [])
                .map((f) => ({ field: f, points: safeParseJson(f.polygon) }))
                .filter(({ points }) => Array.isArray(points) && points.length > 2),
        [fields]
    );

    // Fit every polygon in view; with none, fall back to the site's location.
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
        <Box sx={{ width: '100%' }}>
            <GoBackAppBar />
            <Box sx={{
                width: '100% !important',
                boxSizing: 'border-box !important',
                maxWidth: { xs: '100% !important', sm: '1200px !important' },
                margin: '0 auto !important',
                px: { xs: 2, sm: 3 },
                pt: { xs: 2, sm: 3 },
                pb: { xs: 2, sm: 4 },
                mt: { xs: 0, sm: '32px !important' },
                borderRadius: { xs: 0, sm: 2 },
                boxShadow: { xs: 0, sm: 2 }
            }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
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
                </Box>

                {shapes.length === 0 && (
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1.5 }}>
                        {text.noFieldPolygons || 'No field polygons have been drawn for this site yet.'}
                    </Typography>
                )}

                <Box
                    dir="ltr"
                    sx={{
                        // Viewport height minus the app bar, page padding and title,
                        // so the whole map fits on screen without scrolling.
                        height: { xs: 'calc(100dvh - 250px)', sm: 'calc(100dvh - 340px)' },
                        minHeight: 320,
                        borderRadius: 3,
                        overflow: 'hidden',
                        border: '1px solid rgba(0, 0, 0, 0.12)',
                        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.04)'
                    }}
                >
                    <MapContainer
                        style={{ height: '100%', width: '100%' }}
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
                                    <MapToolTip textArr={[field.name]} />
                                </Polygon>
                            );
                        })}
                    </MapContainer>
                </Box>
            </Box>
        </Box>
    );
};

export default SiteMap;
