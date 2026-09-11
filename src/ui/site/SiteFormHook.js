import { useNavigate, useParams, useSearchParams } from 'react-router'
import { useForm, Controller, SubmitHandler, useWatch } from 'react-hook-form';
import {
  TextField,
  Button,
  MenuItem,
  Box,
  Stack,
  Typography
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectLang, selectMapCenter, selectMapZoom, setSnackbar } from '../../features/app/appSlice';
import { CircleMarker, MapContainer, useMapEvents } from 'react-leaflet';
import { useState } from 'react';
import SatelliteMapProvider from '../../components/map/SatelliteMapProvider';
import GeoLocation from '../../components/GeoLocation';
import { DEFAULT_COORDINATES, isMobile } from '../FarmUtil';
import { useCreateSiteMutation, useDeleteSiteMutation, useUpdateSiteMutation } from '../../features/sites/sitesApiSlice';
import GlobalGapSvg from '../../icons/gg/GlobalGapSvg';
import ActionApprovalDialog from '../../components/ui/ActionApprovalDialog';

const SiteFormHook = ({ site }) => {

  const { type, src, siteId } = useParams()
  let [searchParams, setSearchParams] = useSearchParams();

  const [deleteOpen, setDeleteOpen] = useState(false);

  // const { data: site, isSuccess: isSitesSuccess } = useGetSiteQuery(siteId)
  const text = useSelector(selectLang);

  const zoom = useSelector(selectMapZoom);

  const height = window.innerHeight - 415;
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [createSite] = useCreateSiteMutation();
  const [updateSite] = useUpdateSiteMutation();
  const [deleteSite] = useDeleteSiteMutation();

  const { control, register, handleSubmit, getValues, watch, formState: { errors },
    formState: { isDirty, dirtyFields }, reset, setValue, trigger
  } = useForm({ defaultValues: site, });



  const onSubmit = async (data) => {
    try {
      console.log('onSubmit data', data)
      const result = await saveSite(data);
      console.log('onSubmit result', result)
      dispatch(setSnackbar({ msg: data.id ? text.recordUpdated : text.recordCreated, severity: 'success' }))
      navigate(-1)
    } catch (err) {
      console.log(err);
    }
  }

  const saveSite = (data) => {
    if (data.id) {
      return updateSite(data).unwrap();
    } else {
      return createSite(data).unwrap();
    }
  };

  const handleDelete = (value) => {
    setDeleteOpen(false)
    console.log('handleDelete value', value)
    if (value) {
      deleteSite(site.id);
      navigate(-1)
      dispatch(setSnackbar({ msg: text.recordDeleted }))

    }
  }

  const [map, setSetMap] = useState(0);




  function HandleMapEvents() {
    const m = useMapEvents({
      // zoomend: () => {
      //     dispatch(setMapZoom(m.getZoom()));
      // },
      dragend: (e) => {
        // dispatch(setMapCenter([e.target.getCenter().lat, e.target.getCenter().lng]));

      },
      click: (e) => {

        // console.log('lng', e.latlng.lng.toFixed(5));
        // console.log('lat', e.latlng.lat.toFixed(5));
        setValue('lat', e.latlng.lat.toFixed(5));
        setValue('lng', e.latlng.lng.toFixed(5));
        trigger(['lat', 'lng'])
        // dispatch(setLatitude(e.latlng.lat.toFixed(5)));
        // dispatch(setLongitude(e.latlng.lng.toFixed(5)));
        //
        // mapCliecked(e, null, 'map')
      }
    })
    return <div></div>
  }







  const lng = useWatch({ control, name: "lng" })
  const lat = useWatch({ control, name: "lat" })


  // console.log('isMobile()', isMobile());
  console.log('isNaN(Number(lat))', isNaN(Number(lat), Number(lat)))

  const siteLonLat = isNaN(Number(lat)) || isNaN(Number(lng)) ? null : [lat, lng];

  console.log('siteLonLat', siteLonLat, 'lat', lat, 'lng', lng, Number.isFinite(lat), Number.isFinite(lng))
  const sx = isMobile() ? {
    maxWidth: '100%', mx: 'auto', p: 2
  } : { maxWidth: 800, mx: 'auto', mt: 3, p: 3, boxShadow: 2, borderRadius: 2 };

  return (
    <Box sx={sx}>
      <Typography variant="h5" component="h2" gutterBottom>
        {text.site}
      </Typography>
      {/* <GlobalGapSvg /> */}
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Stack spacing={3}>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: 2
            }}>
            <Box
              sx={{
                display: "flex",
                flex: 3
              }}>
              <Controller
                name="name"
                control={control}
                rules={{
                  required: 'Full name is required',
                  minLength: { value: 3, message: 'Minimum 3 characters required' }
                }}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    label={text.name}
                    variant="outlined"
                    fullWidth
                    error={!!error}
                  //  helperText={error ? error.message : ''}
                  />
                )}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flex: 1
              }}>
              <Controller
                name="size"
                control={control}
                rules={{ required: 'Please select a size' }}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    // select
                    label={text.size}
                    variant="outlined"
                    fullWidth
                    type="number"
                    error={!!error}
                  // helperText={error ? error.message : ''}
                  >

                  </TextField>
                )}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: 2
            }}>

            <Controller
              name="lat"
              control={control}
              rules={{ required: 'Click on the map' }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label={text.lat}
                  variant="outlined"
                  fullWidth
                  type="number"
                  error={!!error}
                  helperText={error ? error.message : ''}
                  onChange={(e) => { }}
                >

                </TextField>
              )}
            />
            <Controller
              name="lng"
              control={control}
              rules={{ required: 'Please click on the map' }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  // select
                  label={text.lng}
                  variant="outlined"
                  fullWidth
                  type="number"
                  error={!!error}
                  onChange={(e) => { }}

                // helperText={error ? error.message : ''}
                >

                </TextField>
              )}
            />
          </Box>

          <Box style={{ height: '100%' }} id="map" dir='ltr' sx={{
            flex: 1
          }} >
            <MapContainer style={{ height: height, width: '100%' }} center={siteLonLat ? siteLonLat : DEFAULT_COORDINATES} zoom={zoom} scrollWheelZoom={false}
              ref={setSetMap}
            >
              <SatelliteMapProvider />
              <GeoLocation />
              {siteLonLat && <CircleMarker color={'white'} fillColor={'blue'} fillOpacity={1} center={siteLonLat} />}





              <HandleMapEvents />
            </MapContainer>

          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: 2
            }}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              {text.save}
            </Button>
            <Button type="button"
              onClick={() => setDeleteOpen(true)}
              variant="outlined" color="primary" fullWidth>
              {text.delete}
            </Button>
            {/* {activity.editable && uuid && */}
            {/* <BottomNavigationAction
            label={<Typography>{text.delete}</Typography>}
            onClick={() => setDeleteOpen(true)}
            icon={<Delete fontSize='large' />} */}
          </Box>
        </Stack>
        <ActionApprovalDialog open={deleteOpen} handleClose={handleDelete}
          title={text.deleteFormTitle} body={text.deleteFormBody} okText={text.delete} cancelText={text.cancel} />

      </form>
    </Box>
  );
}

export default SiteFormHook