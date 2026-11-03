import { Box } from '@mui/material';

// Desktop-only brand mark for the top app bar — mobile screens are too
// narrow to spare the space next to the page's own title/actions. Bars with
// nothing else in them (e.g. the login page) pass showOnMobile.
const AppBarLogo = ({ showOnMobile = false }) => (
    <Box
        component="img"
        src="/FarmManager_LogoWhite.png"
        alt="Farm Manager"
        sx={{
            display: { xs: showOnMobile ? 'block' : 'none', sm: 'block' },
            height: 40,
            width: 'auto',
            mr: { xs: showOnMobile ? 0 : 2, sm: 2 }, // no trailing gap when it's centered alone
        }}
    />
);

export default AppBarLogo;
