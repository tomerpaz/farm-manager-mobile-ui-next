import { Box, Button } from '@mui/material';

// Footer action bar shared by the record forms (same look as IDAForm's).
// Mobile: fixed to the bottom of the screen however short the form is, with
// an in-flow spacer of the same height so the last field isn't hidden under
// it. Desktop: sticky at the bottom of the form card, bleeding out to its
// edges. `bleedX`/`bleedBottom` must match the card's horizontal / bottom
// padding (theme spacing units).
export const saveButtonSx = {
    textTransform: 'none',
    borderRadius: 2,
    px: 6,
    py: 1.5,
    fontSize: '1.05rem',
    fontWeight: 700,
};

export const secondaryButtonSx = {
    textTransform: 'none',
    borderRadius: 2,
    px: { xs: 2.5, sm: 4 },
    py: 1.5,
    fontSize: '1.05rem',
    fontWeight: 700,
    borderWidth: '1.5px',
    '&:hover': { borderWidth: '1.5px' },
};

const at = (v, bp) => (typeof v === 'object' ? v[bp] ?? v.xs : v);

// Bar height on mobile: 12px top padding + large button + 12px bottom
// padding + 2px border, plus the iPhone home-indicator inset.
const MOBILE_BAR_HEIGHT = 'calc(78px + env(safe-area-inset-bottom))';

const FormActionBar = ({ saveLabel, onDelete, deleteLabel, disabled, bleedX = { xs: 2, sm: 3 }, bleedBottom = 4 }) => (
    <>
    {/* Holds the fixed bar's place on mobile; also cancels the card's bottom
        padding and any gap a parent Stack adds above it. Margins go under
        '&&' (doubled class) because MUI's Stack resets its children's margins
        with a more specific selector, which would otherwise win. */}
    <Box sx={{
        display: { xs: 'block', sm: 'none' },
        flexShrink: 0,
        height: MOBILE_BAR_HEIGHT,
        '&&': { mt: 0, mb: -at(bleedBottom, 'xs') },
    }} />
    <Box
        sx={{
            position: { xs: 'fixed', sm: 'sticky' },
            left: { xs: 0, sm: 'auto' },
            right: { xs: 0, sm: 'auto' },
            bottom: 0,
            zIndex: (theme) => theme.zIndex.appBar,
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
            justifyContent: 'flex-end',
            alignItems: 'center',
            // '&&' so a parent Stack's margin reset can't cancel the bleed.
            '&&': {
                mx: { xs: 0, sm: -at(bleedX, 'sm') },
                mb: { xs: 0, sm: -at(bleedBottom, 'sm') },
            },
            px: { xs: at(bleedX, 'xs'), sm: at(bleedX, 'sm') },
            py: 1.5,
            pb: 'calc(12px + env(safe-area-inset-bottom))',
            bgcolor: 'background.paper',
            borderTop: '2px solid',
            borderColor: 'divider',
            boxShadow: '0 -4px 12px rgba(0, 0, 0, 0.08)',
            borderBottomLeftRadius: { xs: 0, sm: 8 },
            borderBottomRightRadius: { xs: 0, sm: 8 },
        }}
    >
        {onDelete && (
            // Kept at the opposite end from Save so it isn't hit by mistake.
            <Button type="button" variant="outlined" color="secondary" size="large" onClick={onDelete} disabled={disabled}
                sx={{ ...secondaryButtonSx, mr: 'auto' }}>
                {deleteLabel}
            </Button>
        )}
        <Button type="submit" variant="contained" color="success" size="large" disabled={disabled} sx={saveButtonSx}>
            {saveLabel}
        </Button>
    </Box>
    </>
);

export default FormActionBar;
