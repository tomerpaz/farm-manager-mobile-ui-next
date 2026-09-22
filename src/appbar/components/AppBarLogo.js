import { Box } from '@mui/material';

// Desktop-only brand mark for the top app bar — mobile screens are too
// narrow to spare the space next to the page's own title/actions.
const AppBarLogo = () => (
    <Box
        component="img"
        src="/FarmManager_LogoWhite.png"
        alt="Farm Manager"
        sx={{
            display: { xs: 'none', sm: 'block' },
            height: 40,
            width: 'auto',
            mr: 2,
        }}
    />
);

export default AppBarLogo;
