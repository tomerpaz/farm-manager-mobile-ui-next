import { AppBar, Toolbar, Typography } from '@mui/material'
import AppBarLogo from '../components/AppBarLogo'

const PublicBar = () => {
    return (
        <AppBar position="static" elevation={0}>
            <Toolbar sx={{ justifyContent: 'space-around' }}>
                <AppBarLogo />
                <Typography
                    noWrap
                    variant="h6"
                    sx={{
                        fontWeight: 600,
                        letterSpacing: 1.5
                    }}>
                    Farm Manager
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default PublicBar