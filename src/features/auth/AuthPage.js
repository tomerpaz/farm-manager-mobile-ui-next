import { Box, Paper, Typography } from '@mui/material';

import LogoLeaf from '../../icons/LogoLeaf';

// Centered card for the signed-out pages (Forgot / Reset password).
const AuthPage = ({ title, children }) => (
    <Box sx={{ display: 'flex', justifyContent: 'center', px: 2, py: { xs: 4, sm: 8 } }}>
        <Paper
            elevation={0}
            sx={{
                width: '100%',
                maxWidth: 420,
                boxSizing: 'border-box',
                p: { xs: 2.5, sm: 4 },
                border: { xs: 'none', sm: '1px solid rgba(0, 0, 0, 0.08)' },
                borderRadius: 3,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
            }}
        >
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                <LogoLeaf color="primary" fontSize="large" />
                <Typography variant="h6" component="h1" sx={{ fontWeight: 700 }}>{title}</Typography>
            </Box>
            {children}
        </Paper>
    </Box>
);

export default AuthPage;
