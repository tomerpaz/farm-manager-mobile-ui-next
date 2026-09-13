import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useForm, Controller, useWatch } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Stack, TextField, Button, Typography } from '@mui/material';
import { CircleMarker, MapContainer, useMapEvents } from 'react-leaflet';

// State Tools, API Queries & Global Config Slices
import { useGetSiteQuery, useCreateSiteMutation, useDeleteSiteMutation, useUpdateSiteMutation } from '../../features/sites/sitesApiSlice';
import { selectLang, selectMapZoom, setSnackbar } from '../../features/app/appSlice';
import SatelliteMapProvider from '../../components/map/SatelliteMapProvider';
import GeoLocation from '../../components/GeoLocation';
import { DEFAULT_COORDINATES, isMobile } from '../FarmUtil';
import ActionApprovalDialog from '../../components/ui/ActionApprovalDialog';
import Loading from '../../components/Loading';

const SiteForm = ({ siteId }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const text = useSelector(selectLang);
  const zoom = useSelector(selectMapZoom);

  // Active UI modal tracking states
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [map, setSetMap] = useState(0);
  const [mapHeight, setMapHeight] = useState(500); // Safe fallback asset layout height dimension

  // RTK Query hooks
  const { data: site, isSuccess: isSitesSuccess, isLoading } = useGetSiteQuery(siteId);
  const [createSite] = useCreateSiteMutation();
  const [updateSite] = useUpdateSiteMutation();
  const [deleteSite] = useDeleteSiteMutation();

  // Safely structure properties object data defaults mapping fallbacks
  const getCleanSiteDefaults = (rawSiteData) => {
    return {
      // Pass a safe fallback check to ensure structural string compliance
      id: rawSiteData?.id || null,
      name: rawSiteData?.name ?? '',
      size: rawSiteData?.size ?? '',
      lat: rawSiteData?.lat ?? '',
      lng: rawSiteData?.lng ?? ''
    };
  };

  // Form initialization hook
  const { control, handleSubmit, setValue, trigger, reset } = useForm({
    defaultValues: getCleanSiteDefaults(site),
  });

  // Track window layout changes exclusively inside client frame pass
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setMapHeight(window.innerHeight - 415);
    }
  }, []);

  // Sync react-hook-form inner configurations smoothly whenever raw data updates
  useEffect(() => {
    if (isSitesSuccess && site) {
      reset(getCleanSiteDefaults(site));
    }
  }, [site, isSitesSuccess, reset]);

  // Form layout observers mapping
  const lng = useWatch({ control, name: "lng" });
  const lat = useWatch({ control, name: "lat" });
  const siteLonLat = isNaN(Number(lat)) || isNaN(Number(lng)) ? null : [Number(lat), Number(lng)];

  if (isLoading || !site) {
    return (
      <Box sx={{ p: 3 }}>
        <Loading />
      </Box>
    );
  }

  const onSubmit = async (data) => {
    try {
      if (data.id) {
        await updateSite(data).unwrap();
      } else {
        await createSite(data).unwrap();
      }
      dispatch(setSnackbar({ msg: data.id ? text.recordUpdated : text.recordCreated, severity: 'success' }));
      router.back();
    } catch (err) {
      console.error("Failed to commit site form configuration update profiles", err);
    }
  };

  const handleDelete = (isConfirmed) => {
    setDeleteOpen(false);
    if (isConfirmed) {
      deleteSite(site.id);
      dispatch(setSnackbar({ msg: text.recordDeleted, severity: 'success' }));
      router.back(); // Native Next.js redirection utility replacement path
    }
  };

  function HandleMapEvents() {
    useMapEvents({
      click: (e) => {
        setValue('lat', e.latlng.lat.toFixed(5), { shouldDirty: true });
        setValue('lng', e.latlng.lng.toFixed(5), { shouldDirty: true });
        trigger(['lat', 'lng']);
      }
    });
    return null;
  }

  const sx = isMobile() ? {
    maxWidth: '100%', mx: 'auto', p: 2
  } : { maxWidth: 800, mx: 'auto', mt: 3, p: 3, boxShadow: 2, borderRadius: 2 };

  return (
    <Box sx={sx}>
      <Typography variant="h5" component="h2" gutterBottom>
        {text.site}
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Stack spacing={3}>
          <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", gap: 2 }}>
            <Box sx={{ display: "flex", flex: 3 }}>
              <Controller
                name="name"
                control={control}
                rules={{
                  required: 'Full name is required',
                  minLength: { value: 3, message: 'Minimum 3 characters required' }
                }}
                render={({ field, fieldState: { error } }) => (
                  <TextField {...field} label={text.name} variant="outlined" fullWidth error={!!error} />
                )}
              />
            </Box>
            <Box sx={{ display: "flex", flex: 1 }}>
              <Controller
                name="size"
                control={control}
                rules={{ required: 'Please select a size' }}
                render={({ field, fieldState: { error } }) => (
                  <TextField {...field} label={text.size} variant="outlined" fullWidth type="number" error={!!error} />
                )}
              />
            </Box>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", gap: 2 }}>
            <Controller
              name="lat"
              control={control}
              rules={{ required: 'Click on the map' }}
              render={({ field, fieldState: { error } }) => (
                <TextField {...field} label={text.lat} variant="outlined" fullWidth type="number" error={!!error} helperText={error ? error.message : ''} readOnly />
              )}
            />
            <Controller
              name="lng"
              control={control}
              rules={{ required: 'Please click on the map' }}
              render={({ field, fieldState: { error } }) => (
                <TextField {...field} label={text.lng} variant="outlined" fullWidth type="number" error={!!error} helperText={error ? error.message : ''} readOnly />
              )}
            />
          </Box>

          <Box id="map" dir="ltr" sx={{ flex: 1, height: '100%' }}>
            <MapContainer style={{ height: mapHeight, width: '100%' }} center={siteLonLat ? siteLonLat : DEFAULT_COORDINATES} zoom={zoom} scrollWheelZoom={false} ref={setSetMap}>
              <SatelliteMapProvider />
              <GeoLocation />
              {siteLonLat && <CircleMarker color="white" fillColor="blue" fillOpacity={1} center={siteLonLat} />}
              <HandleMapEvents />
            </MapContainer>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", gap: 2 }}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              {text.save}
            </Button>
            {site?.id && (
              <Button type="button" onClick={() => setDeleteOpen(true)} variant="outlined" fullWidth>
                {text.delete || 'Delete'}
              </Button>
            )}
          </Box>
        </Stack>
      </form>

      {deleteOpen && (
        <ActionApprovalDialog
          open={deleteOpen}
          handleClose={handleDelete}
          title={text.deleteFormTitle} body={text.deleteFormBody} okText={text.delete} cancelText={text.cancel}
        />
      )}
    </Box>
  );
};

export default SiteForm;
