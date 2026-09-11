import { AppBar, Toolbar, IconButton, Box } from '@mui/material'
import { Close, PictureAsPdfOutlined } from '@mui/icons-material'
import { isStringEmpty, newDate, SCOUT } from '../../ui/FarmUtil';
import { useSelector } from 'react-redux';
import { selectCurrentToken, selectLang } from '../../features/app/appSlice';
import { useNavigate, useParams } from 'react-router';
import { FARM_MANAGER } from '../../app/api/apiSlice';
import { useGetActivityByIdQuery } from '../../features/activities/activitiesApiSlice';




const SiteFormBar = () => {
    const token = useSelector(selectCurrentToken);
  //  const { activityId, src } = useParams()
    //const { lang, dir } = useSelector(selectLang)
    const navigate = useNavigate()



    return (
        <AppBar position="static" elevation={0}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Box />
                <IconButton color="inherit" onClick={() => navigate(-1)}>
                    <Close />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default SiteFormBar

