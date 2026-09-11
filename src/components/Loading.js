import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const Loading = ({ marginTop }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flex: 1,
                justifyContent: 'space-around',
                marginTop: marginTop ? marginTop : 15
            }}
        >
            <CircularProgress />
        </Box>
    )
}

export default Loading