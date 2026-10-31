import { useMemo } from 'react';
import { Box } from '@mui/material';
import { MapOutlined } from '@mui/icons-material';

const DEFAULT_COLOR = '#43a047';
// Same imagery as SatelliteMapProvider's non-Google layer. Its tiles carry no
// logo (Google Static Maps stamps one that covered most of a 56px thumbnail);
// Esri's attribution is shown once under the list instead — see ESRI_ATTRIBUTION.
const ESRI_TILE_URL = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile';
export const ESRI_ATTRIBUTION = 'Imagery © Esri';
const MAX_ZOOM = 18;
// Tiles are drawn at half their 256px size so they stay sharp on
// high-density screens; projection math works in these display pixels.
const TILE = 128;

// Accepts both shapes a field polygon can hold — [lat, lng] pairs (what
// FieldPolygonDraw saves) and Leaflet-style { lat, lng } objects.
const toLatLng = (p) => (Array.isArray(p) ? { lat: Number(p[0]), lng: Number(p[1]) } : { lat: Number(p?.lat), lng: Number(p?.lng) });

// Web Mercator, in pixels of a world TILE * 2^zoom wide — the projection the
// tiles use, so the outline drawn on top lines up with the imagery.
const project = ({ lat, lng }, zoom) => {
    const world = TILE * 2 ** zoom;
    const s = Math.sin((Math.max(-85, Math.min(85, lat)) * Math.PI) / 180);
    return [((lng + 180) / 360) * world, (0.5 - Math.log((1 + s) / (1 - s)) / (4 * Math.PI)) * world];
};

// A field's polygon as a small thumbnail for lists: the field's outline in
// its color over satellite tiles, zoomed to fit with a little margin. Usually
// 1–4 tiles, cached by the browser. Without a usable polygon it shows a
// placeholder icon.
const FieldShapeThumb = ({ points, color, size = 56 }) => {
    const view = useMemo(() => {
        const pts = (Array.isArray(points) ? points : []).map(toLatLng).filter((p) => Number.isFinite(p.lat) && Number.isFinite(p.lng));
        if (pts.length < 3) return null;

        // Deepest zoom at which the field still fits inside the padded box.
        const fit = size * 0.76;
        let zoom = MAX_ZOOM;
        let xy;
        for (; zoom >= 0; zoom--) {
            xy = pts.map((p) => project(p, zoom));
            const xs = xy.map(([x]) => x), ys = xy.map(([, y]) => y);
            if (Math.max(...xs) - Math.min(...xs) <= fit && Math.max(...ys) - Math.min(...ys) <= fit) break;
        }
        const xs = xy.map(([x]) => x), ys = xy.map(([, y]) => y);
        // Top-left of the thumbnail, in world pixels, centered on the field.
        const left = (Math.min(...xs) + Math.max(...xs)) / 2 - size / 2;
        const top = (Math.min(...ys) + Math.max(...ys)) / 2 - size / 2;

        const tiles = [];
        const last = 2 ** zoom - 1;
        for (let ty = Math.floor(top / TILE); ty <= Math.floor((top + size) / TILE); ty++) {
            for (let tx = Math.floor(left / TILE); tx <= Math.floor((left + size) / TILE); tx++) {
                if (ty < 0 || ty > last) continue;
                const wrapped = ((tx % (last + 1)) + last + 1) % (last + 1);
                tiles.push({
                    key: `${tx}/${ty}`,
                    // Esri's order is z/y/x. Each 256px tile is drawn at TILE (128px).
                    url: `${ESRI_TILE_URL}/${zoom}/${ty}/${wrapped}`,
                    x: tx * TILE - left,
                    y: ty * TILE - top,
                });
            }
        }
        const path = xy.map(([x, y], i) => `${i ? 'L' : 'M'}${(x - left).toFixed(1)},${(y - top).toFixed(1)}`).join(' ') + ' Z';
        return { tiles, path };
    }, [points, size]);

    const stroke = color || DEFAULT_COLOR;

    return (
        <Box
            aria-hidden
            sx={{
                position: 'relative',
                width: size,
                height: size,
                flexShrink: 0,
                borderRadius: 2,
                bgcolor: view ? 'grey.300' : 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
            }}
        >
            {view ? (
                <>
                    {view.tiles.map((tile) => (
                        <img
                            key={tile.key}
                            src={tile.url}
                            alt=""
                            loading="lazy"
                            draggable={false}
                            // Lightened and washed out so the field outline reads clearly on top.
                            style={{
                                position: 'absolute', left: tile.x, top: tile.y, width: TILE, height: TILE, maxWidth: 'none',
                                filter: 'brightness(1.35) saturate(0.45) contrast(0.8)',
                            }}
                        />
                    ))}
                    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ position: 'absolute', inset: 0 }}>
                        {/* White halo under the colored outline keeps the edge visible on any imagery. */}
                        <path d={view.path} fill="none" stroke="#fff" strokeOpacity={0.9} strokeWidth={3} strokeLinejoin="round" />
                        <path d={view.path} fill={stroke} fillOpacity={0.4} stroke={stroke} strokeWidth={2} strokeLinejoin="round" />
                    </svg>
                </>
            ) : (
                <MapOutlined sx={{ color: 'text.disabled' }} />
            )}
        </Box>
    );
};

export default FieldShapeThumb;
