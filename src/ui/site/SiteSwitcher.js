import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Box, ButtonBase, Divider, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import { Add, ArrowDropDown, Check, Edit } from '@mui/icons-material';

const titleSx = { fontWeight: 800, fontSize: { xs: '1.35rem', sm: '1.5rem' }, color: 'text.primary', letterSpacing: '-0.02em' };

// The Sites tab's title, as a menu: switch to another site's fields, add a site, or
// edit this one. Only GLOBALG.A.P.-registered sites (ggId) have fields; the others are
// listed too, and open their form so they can be saved with a location and registered.
const SiteSwitcher = ({ siteId, siteName, sites = [], onSelect, text }) => {
    const navigate = useNavigate();
    const [anchor, setAnchor] = useState(null);
    const close = () => setAnchor(null);

    const openSite = (site) => {
        close();
        if (!site.ggId) navigate(`/site/${site.id}`);
        else if (String(site.id) !== String(siteId)) onSelect(site.id);
    };
    const addSite = () => {
        close();
        navigate('/site/0');
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
            <Tooltip title={editLabel}>
                <IconButton aria-label={editLabel} onClick={() => navigate(`/site/${siteId}`)} sx={{ flexShrink: 0 }}>
                    <Edit fontSize="small" />
                </IconButton>
            </Tooltip>

            <Menu anchorEl={anchor} open={!!anchor} onClose={close} slotProps={{ paper: { sx: { minWidth: 240, maxHeight: 420 } } }}>
                {sites.map((s) => {
                    const current = String(s.id) === String(siteId);
                    return (
                        <MenuItem key={s.id} selected={current} onClick={() => openSite(s)}>
                            <ListItemIcon>{current && <Check fontSize="small" />}</ListItemIcon>
                            <ListItemText
                                primary={s.name}
                                secondary={!s.ggId && (text?.siteNotRegistered || 'Not registered - open to register')}
                                slotProps={{ primary: { sx: { color: s.ggId ? 'text.primary' : 'text.secondary' } } }}
                            />
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
