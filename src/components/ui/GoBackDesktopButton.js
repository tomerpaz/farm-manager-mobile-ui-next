import { ArrowBack } from '@mui/icons-material';
import Button from '@mui/material/Button'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { selectLang } from '../../features/app/appSlice';

// Desktop-only back button (the phone has the app bar's arrow): labeled and
// outlined in the app green so it reads as a button, not a stray icon.
const GoBackDesktopButton = () => {
    const navigate = useNavigate();
    const text = useSelector(selectLang);
    return (
        <Button
            variant="outlined"
            color="success"
            onClick={() => navigate(-1)}
            startIcon={<ArrowBack />}
            sx={{
                display: { xs: 'none', sm: 'inline-flex' },
                flexShrink: 0,
                textTransform: 'none',
                fontWeight: 800,
                fontSize: '1.05rem',
                minHeight: 48,
                borderWidth: 3,
                color: 'success.dark',
                borderColor: 'success.dark',
                borderRadius: 2,
                px: 2.5,
                '&:hover': { borderWidth: 3, borderColor: 'success.dark', bgcolor: 'rgba(27, 94, 32, 0.08)' },
                '& .MuiButton-startIcon > *:nth-of-type(1)': { fontSize: 26 },
                // Mirror the arrow in RTL (Hebrew).
                '& .MuiButton-startIcon': (theme) => ({
                    transform: theme.direction === 'rtl' ? 'scaleX(-1)' : 'none'
                })
            }}
        >
            {text?.back || 'Back'}
        </Button>
    )
}

export default GoBackDesktopButton
