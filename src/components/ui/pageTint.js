// The faint tint behind a page's white card (Sites, Resources, IDA, site and field forms),
// so the card reads as a sheet on top of it. One place to adjust the shade.
export const pageTintBg = (theme) => (theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.04)' : 'rgba(46, 125, 50, 0.06)');

// Desktop only (MUI's sm breakpoint, 600px): on a phone the card fills the screen,
// so the page stays plain. A plain media query - the theme-callback form of sx
// didn't apply its responsive values (see IdaDash).
export const pageTintSx = {
    bgcolor: 'background.paper',
    '@media (min-width: 600px)': { bgcolor: pageTintBg },
};
