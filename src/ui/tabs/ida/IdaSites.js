import React, { Fragment } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';

import { useGetSitesQuery } from '../../../features/sites/sitesApiSlice'
import { Button, Divider } from '@mui/material';
import { selectLang } from '../../../features/app/appSlice';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const IdaSites = () => {
  const { data: sites, isSuccess: isSitesSuccess } = useGetSitesQuery()

  const text = useSelector(selectLang)

  const navigate = useNavigate();  

  console.log('sites', sites)
  return (
    <List sx={{ width: '100%', /* maxWidth: 360*,*/ bgcolor: 'background.paper' }}>
      {sites?.map((value) => {

        return (
          <Fragment key={value.id}>
            <ListItem
              key={value.id}
              secondaryAction={
                <Button variant="contained" disableElevation={true} edge="end" aria-label="site-fields">
                  {text.fields}
                </Button>
              }

            >
              <ListItemButton role={undefined} onClick={() => navigate(`/site/${value.id}`)}>
                {/* <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.includes(value)}
                  tabIndex={-1}
                  disableRipple
                  slotProps={{ input: { 'aria-labelledby': labelId } }}
                />
              </ListItemIcon> */}
                <ListItemText id={value.id} primary={`${value.name}`} />
              </ListItemButton>
            </ListItem>
            <Divider />
          </Fragment>

        );
      })}
    </List>
  );
}

export default IdaSites
