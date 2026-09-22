import { AppBar, Toolbar, Box } from '@mui/material'

import AppBarMenu from '../components/AppBarMenu'
import AppBarLogo from '../components/AppBarLogo'

const EmptyBar = () => {
    return (
        <AppBar position="static" elevation={0}>
            <Toolbar>
                <AppBarLogo />
                <Box sx={{ flexGrow: 1 }} />
                <AppBarMenu />
            </Toolbar>
        </AppBar>
    )
}

export default EmptyBar