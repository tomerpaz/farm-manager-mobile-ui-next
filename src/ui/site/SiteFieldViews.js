import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import L from 'leaflet';
import { MapContainer, Polygon, Tooltip as MapTooltip } from 'react-leaflet';
import {
    Alert,
    Box,
    Card,
    CardActionArea,
    Chip,
    IconButton,
    ToggleButton,
    ToggleButtonGroup,
    Tooltip,
    Typography
} from '@mui/material';
import {
    CalendarMonth, Category, ChevronRight, ContentCopy, GridView, Grass, Layers, Map as MapIcon, ViewList
} from '@mui/icons-material';

import { safeParseJson } from '../../features/fields/fieldsApiSlice';
import FieldShapeThumb from '../field/FieldShapeThumb';
import SatelliteMapProvider from '../../components/map/SatelliteMapProvider';
import { DEFAULT_COORDINATES, MapToolTip } from '../FarmUtil';
import SiteMapLayersDialog, { useSiteMapLayers } from './SiteMapLayers';

const formatDate = (value) => (value ? new Date(value).toLocaleDateString('en-AU') : null);
const DEFAULT_COLOR = '#43a047';

// ---------------------------------------------------------------------------
// View mode: List / Grid / Map, remembered per browser.

export const VIEW_LIST = 'list';
export const VIEW_GRID = 'grid';
export const VIEW_MAP = 'map';
const VIEWS = [VIEW_LIST, VIEW_GRID, VIEW_MAP];
const VIEW_STORAGE_KEY = 'siteFieldList.view';

// Storage can be blocked (private mode, site data off): fall back to List and keep going.
const readStoredView = () => {
    try {
        const stored = localStorage.getItem(VIEW_STORAGE_KEY);
        return VIEWS.includes(stored) ? stored : VIEW_LIST;
    } catch {
        return VIEW_LIST;
    }
};

export const useFieldViewMode = () => {
    const [view, setView] = useState(readStoredView);
    const choose = useCallback((next) => {
        if (!VIEWS.includes(next)) return;
        setView(next);
        try { localStorage.setItem(VIEW_STORAGE_KEY, next); } catch { /* not remembered, still switches */ }
    }, []);
    return [view, choose];
};

const toggleSx = { textTransform: 'none', fontWeight: 700, gap: 0.75, px: { xs: 1.5, sm: 2 }, py: 0.5 };

export const FieldViewToggle = ({ view, onChange, text, sx }) => (
    <ToggleButtonGroup
        value={view}
        exclusive
        size="small"
        color="success"
        // Clicking the selected button again passes null: keep the current view.
        onChange={(e, next) => next && onChange(next)}
        aria-label={text?.view || 'View'}
        sx={sx}
    >
        <ToggleButton value={VIEW_LIST} sx={toggleSx}><ViewList fontSize="small" />{text?.list || 'List'}</ToggleButton>
        <ToggleButton value={VIEW_GRID} sx={toggleSx}><GridView fontSize="small" />{text?.grid || 'Grid'}</ToggleButton>
        <ToggleButton value={VIEW_MAP} sx={toggleSx}><MapIcon fontSize="small" />{text?.map || 'Map'}</ToggleButton>
    </ToggleButtonGroup>
);

// ---------------------------------------------------------------------------
// Virtualization: only the rows near the screen are rendered, so hundreds of
// fields stay fast. It follows the page's own scrolling (no inner scroll box);
// row heights are measured as rows render, estimated until then.

const OVERSCAN_PX = 800;

const VirtualRows = ({ count, getKey, estimate, gap, renderRow }) => {
    const containerRef = useRef(null);
    const heights = useRef(new Map());          // row key -> measured height
    const [, setMeasured] = useState(0);         // bumped when a height changes
    const [viewport, setViewport] = useState({ top: 0, bottom: typeof window === 'undefined' ? 1000 : window.innerHeight });

    // The screen's span in container coordinates. Capture catches scrolling on any
    // ancestor, not only the window.
    useLayoutEffect(() => {
        let frame = 0;
        const update = () => {
            frame = 0;
            const el = containerRef.current;
            if (!el) return;
            const top = -el.getBoundingClientRect().top;
            setViewport((v) => (v.top === top && v.bottom === top + window.innerHeight ? v : { top, bottom: top + window.innerHeight }));
        };
        const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
        update();
        document.addEventListener('scroll', schedule, { capture: true, passive: true });
        window.addEventListener('resize', schedule);
        return () => {
            if (frame) cancelAnimationFrame(frame);
            document.removeEventListener('scroll', schedule, { capture: true });
            window.removeEventListener('resize', schedule);
        };
    }, []);

    const observer = useMemo(() => (typeof ResizeObserver === 'undefined' ? null : new ResizeObserver((entries) => {
        let changed = false;
        entries.forEach((entry) => {
            const key = entry.target.dataset.rowKey;
            const h = entry.target.offsetHeight;
            if (key != null && heights.current.get(key) !== h) {
                heights.current.set(key, h);
                changed = true;
            }
        });
        if (changed) setMeasured((n) => n + 1);
    })), []);
    useEffect(() => () => observer?.disconnect(), [observer]);

    // React 19 ref cleanup: rows scrolled away stop being observed, so they can be freed.
    const measureRef = useCallback((el) => {
        if (!el || !observer) return undefined;
        observer.observe(el);
        return () => observer.unobserve(el);
    }, [observer]);

    // Row tops from measured (or estimated) heights.
    const offsets = new Array(count);
    let total = 0;
    for (let i = 0; i < count; i++) {
        offsets[i] = total;
        total += (heights.current.get(String(getKey(i))) ?? estimate) + gap;
    }
    total = Math.max(0, total - gap);

    const from = viewport.top - OVERSCAN_PX;
    const to = viewport.bottom + OVERSCAN_PX;
    const visible = [];
    for (let i = 0; i < count; i++) {
        if (offsets[i] > to) break;
        const bottom = offsets[i] + (heights.current.get(String(getKey(i))) ?? estimate);
        if (bottom >= from) visible.push(i);
    }

    return (
        <Box ref={containerRef} sx={{ position: 'relative', width: '100%', height: total }}>
            {visible.map((i) => {
                const key = String(getKey(i));
                return (
                    <Box key={key} ref={measureRef} data-row-key={key} sx={{ position: 'absolute', top: offsets[i], left: 0, right: 0 }}>
                        {renderRow(i)}
                    </Box>
                );
            })}
        </Box>
    );
};

// ---------------------------------------------------------------------------
// Shared bits of a field card.

// What a List or Grid card shows: start date, product category and crop genus. Matched by id; IDA fields
// without the ids keep the product category as their crop and the crop genus as their
// variety, so those names are the fallback - the same as the Site Map's labels.
const useFieldDetails = (cropGenera, productCategories) => useCallback((field) => {
    const iconSx = { fontSize: '0.95rem' };
    const category = productCategories.find((c) => c.id === field.ggProductCategoryId)?.name ?? field.cropName;
    const genus = cropGenera.find((g) => g.id === field.ggCropGenusId)?.name ?? field.varietyName;
    return [
        formatDate(field.startDate) && { icon: <CalendarMonth sx={iconSx} />, label: formatDate(field.startDate) },
        category && { icon: <Category sx={iconSx} />, label: category },
        genus && { icon: <Grass sx={iconSx} />, label: genus },
    ].filter(Boolean);
}, [cropGenera, productCategories]);


// Active fields are plain cards; ended ones are the exception and look it: a dashed
// border like inactive resources, plus a grey map and faded text (endedThumbSx).
// Shared by the List and Grid cards.
const cardSx = (ended) => ({
    bgcolor: ended ? 'action.hover' : 'background.paper',
    border: '1px solid',
    borderStyle: ended ? 'dashed' : 'solid',
    borderColor: ended ? 'grey.400' : 'divider',
    borderRadius: 2.5,
    overflow: 'hidden',
    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    '&:hover': { bgcolor: 'rgba(46, 125, 50, 0.04)', borderColor: ended ? 'grey.500' : 'success.light' }
});

// The map thumbnail is the most eye-catching part of a card, so an ended field's goes grey.
const endedThumbSx = (ended) => (ended ? { filter: 'grayscale(1)', opacity: 0.75 } : {});

const RootDateChip = ({ field, text, sx }) => (
    <Chip label={`${text?.rootDate || 'Root Date'} ${formatDate(field.endDate)}`} size="small" variant="outlined"
        sx={{ flexShrink: 0, fontWeight: 600, color: 'text.secondary', ...sx }} />
);

const DuplicateButton = ({ field, text, onDuplicate, sx }) => (
    <Tooltip title={text?.duplicate || 'Duplicate'}>
        <IconButton aria-label={text?.duplicate || 'Duplicate'} onClick={() => onDuplicate(field)} sx={{ flexShrink: 0, ...sx }}>
            <ContentCopy fontSize="small" />
        </IconButton>
    </Tooltip>
);

const DetailItems = ({ details, faded }) => details.map(({ icon, label }, i) => (
    <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: faded ? 'text.disabled' : 'text.secondary', minWidth: 0, maxWidth: '100%' }}>
        {icon}
        <Typography variant="body2" noWrap>{label}</Typography>
    </Box>
));

// ---------------------------------------------------------------------------
// List view

const ListCard = ({ field, details, text, onOpen, onDuplicate }) => {
    const ended = !!field.endDate;
    return (
        <Card elevation={0} sx={{ ...cardSx(ended), display: 'flex', alignItems: 'center' }}>
            <CardActionArea onClick={() => onOpen(field)} sx={{ flex: 1, minWidth: 0, display: 'flex', alignItems: 'center', gap: 1.5, py: 2, px: 2.5 }}>
                {/* Mini map: the field's polygon outline in its own color. */}
                <Box sx={{ display: 'flex', flexShrink: 0, ...endedThumbSx(ended) }}>
                    <FieldShapeThumb points={safeParseJson(field.polygon)} color={field.color} />
                </Box>
                <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography variant="body1" sx={{ fontWeight: 600, color: ended ? 'text.secondary' : 'text.primary' }} noWrap>
                        {field.name}
                    </Typography>
                    {details.length > 0 && (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mt: 0.5 }}><DetailItems details={details} faded={ended} /></Box>
                    )}
                    {/* On a phone there's no room beside the text, so it goes under the details. */}
                    {ended && <Box sx={{ mt: 0.75, display: { xs: 'block', sm: 'none' } }}><RootDateChip field={field} text={text} /></Box>}
                </Box>
                {ended && <RootDateChip field={field} text={text} sx={{ display: { xs: 'none', sm: 'inline-flex' } }} />}
                <ChevronRight sx={{ color: 'text.disabled', flexShrink: 0, transform: (theme) => (theme.direction === 'rtl' ? 'scaleX(-1)' : 'none') }} />
            </CardActionArea>
            {/* Beside the action area, not in it: a button can't sit inside a button. */}
            {ended && <DuplicateButton field={field} text={text} onDuplicate={onDuplicate} sx={{ mx: 0.5 }} />}
        </Card>
    );
};

export const FieldListView = ({ fields, cropGenera, productCategories, text, onOpen, onDuplicate }) => {
    const detailsOf = useFieldDetails(cropGenera, productCategories);
    return (
        <VirtualRows
            count={fields.length}
            getKey={(i) => fields[i].id}
            estimate={92}
            gap={10}
            renderRow={(i) => (
                <ListCard field={fields[i]} details={detailsOf(fields[i])} text={text} onOpen={onOpen} onDuplicate={onDuplicate} />
            )}
        />
    );
};

// ---------------------------------------------------------------------------
// Grid view: a big satellite thumbnail per field. Columns follow the width,
// and each row of the grid is one virtualized row.

const GRID_GAP = 12;
// Cards stay roughly 150-230px wide however wide the screen is.
const gridColumns = (width) => Math.max(2, Math.min(10, Math.floor((width + GRID_GAP) / (190 + GRID_GAP))));

const useWidth = () => {
    const ref = useRef(null);
    const [width, setWidth] = useState(0);
    useLayoutEffect(() => {
        const el = ref.current;
        if (!el) return undefined;
        setWidth(el.clientWidth);
        if (typeof ResizeObserver === 'undefined') return undefined;
        const ro = new ResizeObserver(() => setWidth(el.clientWidth));
        ro.observe(el);
        return () => ro.disconnect();
    }, []);
    return [ref, width];
};

const GridCard = ({ field, details, text, thumbSize, onOpen, onDuplicate }) => {
    const ended = !!field.endDate;
    return (
        <Card
            elevation={0}
            sx={{
                ...cardSx(ended),
                position: 'relative',
                height: '100%',
            }}
        >
            <CardActionArea onClick={() => onOpen(field)} sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'stretch', justifyContent: 'flex-start' }}>
                <Box sx={{ ...endedThumbSx(ended), '& > div': { borderRadius: 0, border: 'none' } }}>
                    <FieldShapeThumb points={safeParseJson(field.polygon)} color={field.color} size={thumbSize} />
                </Box>
                <Box sx={{ p: 1.25, minWidth: 0 }}>
                    <Typography variant="body2" sx={{ fontWeight: 700, color: ended ? 'text.secondary' : 'text.primary' }} noWrap>
                        {field.name}
                    </Typography>
                    {/* A fixed set of details, so cards in a row stay close in height. */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.25, mt: 0.5 }}>
                        <DetailItems details={details} faded={ended} />
                    </Box>
                    {ended && <RootDateChip field={field} text={text} sx={{ mt: 0.75, maxWidth: '100%' }} />}
                </Box>
            </CardActionArea>
            {ended && (
                <DuplicateButton field={field} text={text} onDuplicate={onDuplicate}
                    sx={{ position: 'absolute', top: 6, insetInlineEnd: 6, bgcolor: 'background.paper', boxShadow: 1, '&:hover': { bgcolor: 'background.paper' } }} />
            )}
        </Card>
    );
};

export const FieldGridView = ({ fields, cropGenera, productCategories, text, onOpen, onDuplicate }) => {
    const detailsOf = useFieldDetails(cropGenera, productCategories);
    const [ref, width] = useWidth();
    const columns = gridColumns(width || 360);
    const thumbSize = Math.max(80, Math.floor(((width || 360) - GRID_GAP * (columns - 1)) / columns));
    const rows = Math.ceil(fields.length / columns);

    return (
        <Box ref={ref} sx={{ width: '100%' }}>
            {width > 0 && (
                <VirtualRows
                    count={rows}
                    // Re-measured when the column count changes the rows' contents.
                    getKey={(r) => `${columns}:${fields[r * columns].id}`}
                    estimate={thumbSize + 90}
                    gap={GRID_GAP}
                    renderRow={(r) => (
                        <Box sx={{ display: 'grid', gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`, gap: `${GRID_GAP}px` }}>
                            {fields.slice(r * columns, r * columns + columns).map((field) => (
                                <GridCard key={field.id} field={field} details={detailsOf(field)} text={text}
                                    thumbSize={thumbSize} onOpen={onOpen} onDuplicate={onDuplicate} />
                            ))}
                        </Box>
                    )}
                />
            )}
        </Box>
    );
};

// ---------------------------------------------------------------------------
// Map view. Leaflet slows to a crawl with many SVG polygons, so they're drawn on
// one canvas, and at most MAP_MAX_FIELDS are shown: search narrows the rest.

export const MAP_MAX_FIELDS = 250;
// Always-on labels are DOM elements, the other thing that makes maps crawl: above
// this many fields the chosen label lines show on hover instead.
const MAP_MAX_LABELS = 150;

export const FieldMapView = ({ fields, site, text, onOpen, cropGenera, productCategories }) => {
    const [map, setMap] = useState(null);
    // Same label choices as the Site Map page, and the same saved setting.
    const [layersOpen, setLayersOpen] = useState(false);
    const [layers, toggleLayer] = useSiteMapLayers();
    // IDA fields store the product category as their crop and the crop genus
    // as their variety — fall back to those names, as the Site Map does.
    const labelLines = (field) => [
        layers.name && field.name,
        layers.alias && field.alias,
        layers.productCategory && (productCategories.find((c) => c.id === field.ggProductCategoryId)?.name ?? field.cropName),
        layers.cropGenus && (cropGenera.find((g) => g.id === field.ggCropGenusId)?.name ?? field.varietyName),
    ].filter(Boolean);
    const shapes = useMemo(() => fields
        .map((field) => ({ field, points: safeParseJson(field.polygon) }))
        .filter(({ points }) => Array.isArray(points) && points.length > 2), [fields]);
    const shown = useMemo(() => shapes.slice(0, MAP_MAX_FIELDS), [shapes]);
    const permanentLabels = shown.length <= MAP_MAX_LABELS;

    // Fills the screen below wherever the map starts (header heights vary), leaving
    // room for the page card's bottom padding and margin.
    const mapBoxRef = useRef(null);
    const [mapHeight, setMapHeight] = useState(480);
    useLayoutEffect(() => {
        const update = () => {
            const el = mapBoxRef.current;
            if (!el) return;
            const top = el.getBoundingClientRect().top + window.scrollY;
            const bottomSpace = window.innerWidth < 600 ? 16 : 40;
            setMapHeight(Math.max(320, Math.round(window.innerHeight - top - bottomSpace)));
        };
        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, [shapes.length > MAP_MAX_FIELDS, shapes.length === 0]);
    // Leaflet must be told when its box changes size.
    useEffect(() => { map?.invalidateSize(); }, [map, mapHeight]);
    const hasSiteLocation = site?.lat != null && site?.lng != null && site.lat !== '' && site.lng !== '';

    useEffect(() => {
        if (!map) return;
        if (shown.length > 0) {
            map.fitBounds(L.latLngBounds(shown.flatMap((s) => s.points)), { padding: [24, 24] });
        } else if (hasSiteLocation) {
            map.setView([Number(site.lat), Number(site.lng)], 15);
        }
    }, [map, shown, site, hasSiteLocation]);

    return (
        <Box>
            {shapes.length > MAP_MAX_FIELDS && (
                <Alert severity="info" sx={{ mb: 1.5 }}>
                    {(text?.mapFieldLimit || 'The map shows the first {shown} of {total} fields. Search to narrow it down.')
                        .replace('{shown}', MAP_MAX_FIELDS).replace('{total}', shapes.length)}
                </Alert>
            )}
            {shapes.length === 0 && (
                <Alert severity="info" sx={{ mb: 1.5 }}>
                    {text?.noFieldPolygons || 'No field polygons have been drawn for this site yet.'}
                </Alert>
            )}
            <Box
                ref={mapBoxRef}
                dir="ltr"
                sx={{
                    position: 'relative',
                    height: mapHeight,
                    borderRadius: 3,
                    overflow: 'hidden',
                    border: '1px solid rgba(0, 0, 0, 0.12)',
                }}
            >
                <Tooltip title={text?.layers || 'Layers'}>
                    <IconButton
                        aria-label={text?.layers || 'Layers'}
                        onClick={() => setLayersOpen(true)}
                        // Above Leaflet's panes and controls (z-index up to 1000).
                        sx={{
                            position: 'absolute', top: 10, right: 10, zIndex: 1100, width: 40, height: 40,
                            bgcolor: 'background.paper', borderRadius: 1, boxShadow: 2, '&:hover': { bgcolor: 'grey.100' }
                        }}
                    >
                        <Layers />
                    </IconButton>
                </Tooltip>
                <MapContainer
                    style={{ position: 'absolute', inset: 0 }}
                    center={hasSiteLocation ? [Number(site.lat), Number(site.lng)] : DEFAULT_COORDINATES}
                    zoom={15}
                    scrollWheelZoom
                    preferCanvas
                    ref={setMap}
                >
                    <SatelliteMapProvider />
                    {shown.map(({ field, points }) => {
                        const color = field.color || DEFAULT_COLOR;
                        const lines = labelLines(field);
                        return (
                            <Polygon
                                key={field.id}
                                positions={points}
                                pathOptions={{ color, fillColor: color, fillOpacity: field.endDate ? 0.2 : 0.5, weight: 2, dashArray: field.endDate ? '6 4' : undefined }}
                                eventHandlers={{ click: () => onOpen(field) }}
                            >
                                {lines.length > 0 && (permanentLabels
                                    ? <MapToolTip textArr={lines} />
                                    : <MapTooltip sticky>{lines.map((line, i) => <div key={i}>{line}</div>)}</MapTooltip>)}
                            </Polygon>
                        );
                    })}
                </MapContainer>
            </Box>
            <SiteMapLayersDialog open={layersOpen} onClose={() => setLayersOpen(false)} layers={layers} onToggle={toggleLayer} text={text} />
        </Box>
    );
};
