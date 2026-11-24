import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ALL_SITES } from './selectedSite';
import { Box, ButtonBase, Checkbox, Divider, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import { Add, ArrowDropDown, Edit } from '@mui/icons-material';

const titleSx = { fontWeight: 800, fontSize: { xs: '1.35rem', sm: '1.5rem' }, color: 'text.primary', letterSpacing: '-0.02em' };

// The Sites tab's title, as a menu of sites: tick several to list all their fields
// together, click a site's name to show only that one, edit any site (pencil on each
// row), or add a site. Only GLOBALG.A.P.-registered sites (ggId) have fields; the others are
// listed too, and open their form so they can be saved with a location and registered.
const SiteSwitcher = ({ siteIds = [], allSites = false, siteName, sites = [], onChange, text }) => {
    const navigate = useNavigate();
    const [anchor, setAnchor] = useState(null);
    const close = () => setAnchor(null);

    const isShown = (site) => siteIds.some((id) => String(id) === String(site.id));
    const openSite = (site) => {
        close();
        if (!site.ggId) navigate(`/site/${site.id}`);
        else onChange([site.id]);
    };
    // Ticks / unticks a site and keeps the menu open. The last ticked site stays ticked.
    const toggleSite = (e, site) => {
        e.stopPropagation();
        if (!isShown(site)) onChange(sites.filter((s) => s.ggId && (isShown(s) || s.id === site.id)).map((s) => s.id));
        else if (siteIds.length > 1) onChange(siteIds.filter((id) => String(id) !== String(site.id)));
    };
    // All Sites: ticks every registered site (and ones registered later). Clicked again,
    // back to just the first one.
    const registeredCount = sites.filter((s) => s.ggId).length;
    const allShown = allSites || (registeredCount > 0 && siteIds.length >= registeredCount);
    const toggleAll = () => {
        if (allShown) onChange([sites.find((s) => s.ggId).id]);
        else onChange(ALL_SITES);
    };
    const addSite = () => {
        close();
        navigate('/site/0');
    };
    const editSite = (e, site) => {
        e.stopPropagation();
        close();
        navigate(`/site/${site.id}`);
    };
    const editLabel = text?.editSite || 'Edit Site';

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, minWidth: 0 }}>
            <ButtonBase
                onClick={(e) => setAnchor(e.currentTarget)}
                aria-haspopup="menu"
                aria-label={text?.selectSite || 'Select Site'}
                sx={{ borderRadius: 1.5, px: 0.5, mx: -0.5, minWidth: 0, '&:hover': { bgcolor: 'action.hover' } }}
            >
                <Typography variant="h4" noWrap sx={titleSx}>{siteName || 'Loading Site...'}</Typography>
                <ArrowDropDown sx={{ fontSize: '2rem', color: 'text.secondary', flexShrink: 0 }} />
            </ButtonBase>

            <Menu anchorEl={anchor} open={!!anchor} onClose={close} slotProps={{ paper: { sx: { minWidth: 240, maxHeight: 420 } } }}>
                {registeredCount > 1 && (
                    <MenuItem selected={allShown} onClick={toggleAll} sx={{ pr: 1 }}>
                        <ListItemIcon>
                            <Checkbox checked={allShown} indeterminate={!allShown && siteIds.length > 1} size="small" color="success"
                                tabIndex={-1} onChange={() => {}} slotProps={{ input: { 'aria-label': text?.allSites || 'All Sites' } }} sx={{ p: 0.5, ml: -0.5 }} />
                        </ListItemIcon>
                        <ListItemText primary={text?.allSites || 'All Sites'} slotProps={{ primary: { sx: { fontWeight: 700 } } }} />
                    </MenuItem>
                )}
                {registeredCount > 1 && <Divider />}
                {sites.map((s) => {
                    const current = isShown(s);
                    return (
                        <MenuItem key={s.id} selected={current} onClick={() => openSite(s)} sx={{ pr: 1 }}>
                            {/* Ticked = its fields are shown. Unregistered sites have no fields. */}
                            <ListItemIcon>
                                <Checkbox checked={current} disabled={!s.ggId} size="small" color="success"
                                    onClick={(e) => toggleSite(e, s)} onChange={() => {}}
                                    slotProps={{ input: { 'aria-label': s.name } }} sx={{ p: 0.5, ml: -0.5 }} />
                            </ListItemIcon>
                            <ListItemText
                                primary={s.name}
                                secondary={!s.ggId && (text?.siteNotRegistered || 'Not registered - open to register')}
                                slotProps={{ primary: { sx: { color: s.ggId ? 'text.primary' : 'text.secondary' } } }}
                            />
                            <Tooltip title={editLabel}>
                                <IconButton size="small" edge="end" aria-label={`${editLabel}: ${s.name}`} onClick={(e) => editSite(e, s)} sx={{ ml: 1 }}>
                                    <Edit fontSize="small" />
                                </IconButton>
                            </Tooltip>
                        </MenuItem>
                    );
                })}
                <Divider />
                <MenuItem onClick={addSite}>
                    <ListItemIcon><Add fontSize="small" color="success" /></ListItemIcon>
                    <ListItemText primary={text?.addSite || 'Add Site'} />
                </MenuItem>
            </Menu>
        </Box>
    );
};

export default SiteSwitcher;
