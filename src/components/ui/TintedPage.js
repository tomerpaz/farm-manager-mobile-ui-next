import { useCallback } from 'react';
import { Box } from '@mui/material';

import { pageTintSx } from './pageTint';

// A page's tinted backdrop: wraps the page (app bar and card included) and reaches
// the bottom of the screen even when the card is short. Pages that hold one screen
// exactly (site and field forms) just spread pageTintSx into their own box.
//
// Put the space above a card here (pt) rather than on the card as a margin: a first
// child's top margin collapses out of this box and leaves that gap untinted.
const TintedPage = ({ children, sx }) => {
    // A ref callback (React 19 cleanup), so it also works when the page renders a
    // loading state first and the box appears later.
    const fillToBottomRef = useCallback((el) => {
        if (!el) return undefined;
        const update = () => {
            el.style.minHeight = `${Math.max(0, window.innerHeight - (el.getBoundingClientRect().top + window.scrollY))}px`;
        };
        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, []);

    return (
        <Box ref={fillToBottomRef} sx={{ width: '100%', boxSizing: 'border-box', alignSelf: 'stretch', ...pageTintSx, pb: { xs: 0, sm: 3 }, ...sx }}>
            {children}
        </Box>
    );
};

export default TintedPage;
