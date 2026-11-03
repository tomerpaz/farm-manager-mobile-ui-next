import { AppBar, Toolbar } from '@mui/material'
import AppBarLogo from '../components/AppBarLogo'

const PublicBar = () => {
    return (
        <AppBar position="static" elevation={0}>
            <Toolbar sx={{ justifyContent: { xs: 'center', sm: 'flex-start' } }}>
                <AppBarLogo showOnMobile />
            </Toolbar>
        </AppBar>
    );
}

export default PublicBar
