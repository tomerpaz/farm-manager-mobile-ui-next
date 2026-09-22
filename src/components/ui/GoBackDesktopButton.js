import { ArrowBack } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton'
import { useNavigate } from 'react-router';

const GoBackDesktopButton = () => {
    const navigate = useNavigate();
    const handleGoBack = () => navigate(-1);
    return (
        <IconButton
            onClick={handleGoBack}
            aria-label="go back"
            sx={{
                display: { xs: 'none', sm: 'inline-flex' },
                color: 'text.secondary',
                transition: 'all 0.2s ease',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                '&:hover': {
                    color: 'success.main',
                    bgcolor: 'rgba(46, 125, 50, 0.04)',
                    borderColor: 'rgba(46, 125, 50, 0.2)'
                },
                // Intercepts theme context to guarantee mirroring in RTL setups
                '& .MuiSvgIcon-root': (theme) => ({
                    transform: theme.direction === 'rtl' ? 'scaleX(-1)' : 'none'
                })
            }}
        >
            <ArrowBack />
        </IconButton>
    )
}

export default GoBackDesktopButton