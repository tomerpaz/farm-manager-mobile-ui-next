import { useState } from 'react';
import { Checkbox, Dialog, DialogContent, FormControlLabel, Stack } from '@mui/material';
import DialogAppBar from '../dialog/DialogAppBar';
import { isMobile } from '../FarmUtil';

const STORAGE_KEY = 'siteMapLayers';
const DEFAULT_LAYERS = { name: true, alias: false, productCategory: false, cropGenus: false };

// Which label lines the site map shows on each polygon — remembered per
// browser, like the main map's layer choices.
export const useSiteMapLayers = () => {
    const [layers, setLayers] = useState(() => {
        try {
            return { ...DEFAULT_LAYERS, ...JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}') };
        } catch {
            return DEFAULT_LAYERS;
        }
    });
    const toggle = (key) => setLayers((prev) => {
        const next = { ...prev, [key]: !prev[key] };
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        } catch {
            // Storage unavailable (private mode) — the choice lasts this visit only.
        }
        return next;
    });
    return [layers, toggle];
};

// Same look as the main map's Layers dialog, with the site map's label options.
const SiteMapLayersDialog = ({ open, onClose, layers, onToggle, text }) => {
    const options = [
        { key: 'name', label: text?.field || 'Field' },
        { key: 'alias', label: text?.alias || 'Alias' },
        { key: 'productCategory', label: text?.productCategory || 'Product Category' },
        { key: 'cropGenus', label: text?.cropGenus || 'Crop Genus' },
    ];
    return (
        <Dialog fullScreen={isMobile()} fullWidth={!isMobile()} maxWidth="xs" open={open} onClose={onClose}>
            <DialogAppBar onClose={onClose} title={text?.layers || 'Layers'} />
            <DialogContent>
                <Stack sx={{ mt: 1 }}>
                    {options.map(({ key, label }) => (
                        <FormControlLabel
                            key={key}
                            control={<Checkbox checked={!!layers[key]} onChange={() => onToggle(key)} />}
                            label={label}
                        />
                    ))}
                </Stack>
            </DialogContent>
        </Dialog>
    );
};

export default SiteMapLayersDialog;
