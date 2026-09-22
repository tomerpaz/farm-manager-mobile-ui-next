import { AppBar, Toolbar, IconButton, Box } from '@mui/material'
import { Close } from '@mui/icons-material'
import { useNavigate } from 'react-router';
import AppBarLogo from '../components/AppBarLogo'

const GoBackAppBar = ({ sticky = false }) => {
    const navigate = useNavigate();
    const handleGoBack = () => navigate(-1);

    return (
        <AppBar
            position={sticky ? "sticky" : "static"}
            color="primary"
            elevation={1}
            sx={{ mb: { xs: 2, sm: 4 }, ...(sticky && { top: 0, zIndex: (theme) => theme.zIndex.appBar }) }}
        >
            {/* Toolbar provides the standard height layout on desktop and mobile */}
            <Toolbar>
                <AppBarLogo />
                <Box sx={{ flexGrow: 1 }} />
                {/* Mobile Only Close Button */}
                <IconButton
                    edge="end"
                    color="inherit"
                    onClick={handleGoBack}
                    aria-label="close"
                    sx={{ display: { xs: 'inline-flex', sm: 'none' } }}
                >
                    <Close />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default GoBackAppBar

