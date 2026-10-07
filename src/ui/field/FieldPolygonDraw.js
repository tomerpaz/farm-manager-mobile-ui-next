import { useCallback, useEffect, useState } from 'react';
import L from 'leaflet';
import { Box, Button, Typography } from '@mui/material';
import { Check, Clear, DeleteOutlined, Draw, Undo } from '@mui/icons-material';
import { CircleMarker, MapContainer, Polygon, Polyline, useMapEvents } from 'react-leaflet';
import SatelliteMapProvider from '../../components/map/SatelliteMapProvider';
import GeoLocation from '../../components/GeoLocation';
import AddressSearchControl from '../../components/map/AddressSearchControl';

const FILL_OPACITY = 0.5;
const round = (v) => Number(v.toFixed(6));

const MapClick = ({ onClick }) => {
    useMapEvents({ click: onClick });
    return null;
};

// Tap-to-draw polygon map for a field. Tapping the map in draw mode adds a
// corner; Finish (3+ corners) fits the map to the polygon and reports it with
// its center and the resulting zoom. `polygon` is an array of [lat, lng]
// points — the same (unclosed) shape the web app's draw control saves.
// Without a `height` the map fills whatever space its parent gives it.
const FieldPolygonDraw = ({ polygon, color, center, zoom, height, text, onDraw, onRemove }) => {
    const [map, setMap] = useState(null);
    const [drawing, setDrawing] = useState(false);
    const [points, setPoints] = useState([]);

    // MapContainer only reads center/zoom on mount — move the view by hand
    // when they arrive later (site/field loaded) or change (polygon drawn).
    const [centerLat, centerLng] = center;
    useEffect(() => {
        if (map) map.setView([centerLat, centerLng], zoom);
    }, [map, centerLat, centerLng, zoom]);

    // Leaflet only measures its container on window resize — a layout change
    // (e.g. the fill-height column settling) would otherwise leave grey tiles.
    useEffect(() => {
        if (!map || typeof ResizeObserver === 'undefined') return;
        const observer = new ResizeObserver(() => map.invalidateSize());
        observer.observe(map.getContainer());
        return () => observer.disconnect();
    }, [map]);

    const fill = height === undefined;

    const handleMapClick = (e) => {
        if (drawing) setPoints((prev) => [...prev, [round(e.latlng.lat), round(e.latlng.lng)]]);
    };

    // Stable, so the search control isn't torn down and re-added on every render.
    const handleAddressSelect = useCallback(
        (loc) => map?.setView([Number(loc.y), Number(loc.x)], map.getZoom()),
        [map]
    );

    const startDrawing = () => {
        setPoints([]);
        setDrawing(true);
    };

    const cancelDrawing = () => {
        setPoints([]);
        setDrawing(false);
    };

    const finishDrawing = () => {
        const bounds = L.latLngBounds(points);
        map.fitBounds(bounds, { padding: [24, 24], animate: false });
        const c = bounds.getCenter();
        onDraw({ polygon: points, lat: round(c.lat), lng: round(c.lng), zoom: map.getZoom() });
        setPoints([]);
        setDrawing(false);
    };

    const pathOptions = { color, fillColor: color, fillOpacity: FILL_OPACITY, weight: 3 };
    const buttonSx = { textTransform: 'none', borderRadius: 2, fontWeight: 600 };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, flex: fill ? 1 : undefined, minHeight: 0 }}>
            {drawing ? (
                <>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        <Button size="small" variant="outlined" startIcon={<Undo />} sx={buttonSx}
                            disabled={points.length === 0} onClick={() => setPoints((prev) => prev.slice(0, -1))}>
                            {text.undo || 'Undo'}
                        </Button>
                        <Button size="small" variant="outlined" startIcon={<Clear />} sx={buttonSx}
                            disabled={points.length === 0} onClick={() => setPoints([])}>
                            {text.clear || 'Clear'}
                        </Button>
                        <Box sx={{ flex: 1 }} />
                        <Button size="small" variant="text" color="inherit" sx={buttonSx} onClick={cancelDrawing}>
                            {text.cancel || 'Cancel'}
                        </Button>
                        <Button size="small" variant="contained" disableElevation startIcon={<Check />} sx={buttonSx}
                            disabled={points.length < 3} onClick={finishDrawing}>
                            {text.finish || 'Finish'}
                        </Button>
                    </Box>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {text.tapMapToDraw || "Tap the map to add the field's corners"}
                    </Typography>
                </>
            ) : (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    <Button size="small" variant="contained" disableElevation startIcon={<Draw />} sx={buttonSx} onClick={startDrawing}>
                        {polygon ? (text.redrawPolygon || 'Redraw') : (text.drawPolygon || 'Draw polygon')}
                    </Button>
                    {polygon && (
                        <Button size="small" variant="outlined" color="secondary" startIcon={<DeleteOutlined />} sx={buttonSx} onClick={onRemove}>
                            {text.deletePolygon || 'Remove polygon'}
                        </Button>
                    )}
                </Box>
            )}
            <Box
                dir="ltr"
                sx={{
                    width: '100%',
                    position: 'relative',
                    flex: fill ? 1 : undefined,
                    minHeight: fill ? 320 : undefined,
                    borderRadius: 3,
                    overflow: 'hidden',
                    border: '1px solid rgba(0, 0, 0, 0.12)',
                    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.04)',
                    cursor: drawing ? 'crosshair' : undefined,
                    '& .leaflet-container': { cursor: drawing ? 'crosshair' : undefined },
                }}
            >
                <MapContainer
                    style={fill ? { position: 'absolute', inset: 0 } : { height, width: '100%' }}
                    center={center}
                    zoom={zoom}
                    scrollWheelZoom={false}
                    doubleClickZoom={!drawing}
                    ref={setMap}
                >
                    <SatelliteMapProvider />
                    <GeoLocation />
                    <AddressSearchControl onLocationSelect={handleAddressSelect} />
                    {/* The saved polygon stays visible while a new one is drawn
                        over it; nothing here is interactive, so taps reach the map. */}
                    {polygon && (
                        <Polygon
                            positions={polygon}
                            pathOptions={drawing ? { ...pathOptions, opacity: 0.4, fillOpacity: 0.15, dashArray: '6' } : pathOptions}
                            interactive={false}
                        />
                    )}
                    {drawing && points.length > 2 && <Polygon positions={points} pathOptions={pathOptions} interactive={false} />}
                    {drawing && points.length === 2 && <Polyline positions={points} pathOptions={pathOptions} interactive={false} />}
                    {drawing &&
                        points.map((p, i) => (
                            <CircleMarker
                                key={i}
                                center={p}
                                radius={6}
                                pathOptions={{ color: 'white', weight: 2, fillColor: color, fillOpacity: 1 }}
                                interactive={false}
                            />
                        ))}
                    <MapClick onClick={handleMapClick} />
                </MapContainer>
            </Box>

        </Box>
    );
};

export default FieldPolygonDraw;
