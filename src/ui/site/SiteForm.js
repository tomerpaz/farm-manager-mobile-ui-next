import { useState, useEffect, Fragment } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useForm, Controller, useWatch } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Stack,
  TextField,
  Button,
  Typography,
  IconButton
} from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { CircleMarker, MapContainer, useMapEvents } from 'react-leaflet';

import {
  useGetSiteQuery,
  useCreateSiteMutation,
  useDeleteSiteMutation,
  useUpdateSiteMutation
} from '../../features/sites/sitesApiSlice';
import { selectLang, selectMapZoom, setSnackbar } from '../../features/app/appSlice';
import SatelliteMapProvider from '../../components/map/SatelliteMapProvider';
import GeoLocation from '../../components/GeoLocation';
import { DEFAULT_COORDINATES } from '../FarmUtil';
import ActionApprovalDialog from '../../components/ui/ActionApprovalDialog';
import Loading from '../../components/Loading';
import GoBackAppBar from '../../appbar/content/GoBackAppBar';
import GoBackDesktopButton from '../../components/ui/GoBackDesktopButton';

const SiteForm = () => {
  const navigate = useNavigate();
  const { siteId } = useParams();
  const dispatch = useDispatch();

  const text = useSelector(selectLang);
  const zoom = useSelector(selectMapZoom);

  // Active UI tracking states
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [map, setMap] = useState(null);

  // FIX: Custom responsive height selector calculation
  const calculateMapHeight = () => {
    if (typeof window !== 'undefined') {
      const isMobileDevice = window.innerWidth <= 600;
      // On mobile, maps stretch dynamically to fill 52% of display viewport height safely
      return isMobileDevice ? '52vh' : Math.max(window.innerHeight - 530, 320);
    }
    return 355;
  };

  const [mapHeight, setMapHeight] = useState(calculateMapHeight());

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleResize = () => setMapHeight(calculateMapHeight());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // RTK Query hooks
  const isNewSite = siteId === '0';
  const { data: site, isSuccess: isSiteSuccess, isLoading } = useGetSiteQuery(siteId, { skip: isNewSite });

  const [createSite] = useCreateSiteMutation();
  const [updateSite] = useUpdateSiteMutation();
  const [deleteSite] = useDeleteSiteMutation();

  const getCleanSiteDefaults = (rawSiteData) => ({
    id: rawSiteData?.id || null,
    name: rawSiteData?.name ?? '',
    size: rawSiteData?.size ?? '',
    lat: rawSiteData?.lat ?? '',
    lng: rawSiteData?.lng ?? ''
  });

  const { control, handleSubmit, setValue, trigger, reset } = useForm({
    defaultValues: getCleanSiteDefaults(isNewSite ? {} : site),
  });

  useEffect(() => {
    if (isSiteSuccess && site) {
      reset(getCleanSiteDefaults(site));
    }
  }, [site, isSiteSuccess, reset]);

  const lng = useWatch({ control, name: "lng" });
  const lat = useWatch({ control, name: "lat" });

  const handleGoBack = () => navigate(-1);

  if (isLoading || (!isNewSite && !site)) {
    return (
      <Box sx={{ p: 4, display: 'flex', justifyContent: 'center' }}>
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
      navigate(-1);
    } catch (err) {
      console.error("Failed to commit site configuration form edits:", err);
    }
  };

  const handleDelete = async (isConfirmed) => {
    setDeleteOpen(false);
    if (isConfirmed && site?.id) {
      try {
        await deleteSite(site.id).unwrap();
        dispatch(setSnackbar({ msg: text.recordDeleted, severity: 'success' }));
        navigate(-1);
      } catch (err) {
        console.error("Failed to drop site identity profile record reference:", err);
      }
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

  const hasValidCoordinates = lat !== '' && lng !== '';
  const siteLonLat = hasValidCoordinates ? [Number(lat), Number(lng)] : DEFAULT_COORDINATES;
  return (
    <Box  >
      <GoBackAppBar />
      <Box sx={{ width: '100%', mt: { xs: 0, sm: '32px !important' } }}>
        <Box sx={{
          width: '100% !important',
          boxSizing: 'border-box !important',
          maxWidth: { xs: '100% !important', sm: '800px !important' },
          minWidth: '0px !important',
          flex: { xs: '1 1 100% !important', sm: 'initial' },
          margin: '0 auto !important',
          position: 'relative',
          px: { xs: 2, sm: 3 },
          pt: { xs: 2, sm: 3 },
          pb: { xs: 4, sm: 4 },
          borderRadius: { xs: 0, sm: 2 },
          boxShadow: { xs: 0, sm: 2 }
        }}>

          {/* Header Layout */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
            <GoBackDesktopButton />

            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography
                variant="body2"
                sx={{ color: 'success.main', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: { xs: '0.72rem', sm: '0.85rem' }, mb: 0.25 }}
              >
                {text.site || "Site Details"}
              </Typography>
              <Typography
                variant="h4"
                sx={{ fontWeight: 800, fontSize: { xs: '1.35rem', sm: '1.85rem' }, color: 'text.primary', letterSpacing: '-0.02em' }}
              >
                {isNewSite ? (text.createRecord || "New Site") : (site?.name || "Loading Site...")}
              </Typography>
            </Box>
          </Box>

          {/* Main Structural Inputs Form */}
          <form onSubmit={handleSubmit(onSubmit)} noValidate style={{ width: '100%' }}>
            <Stack spacing={3} sx={{ width: '100%' }}>

              {/* Row 1: Name and Size permanently locked side-by-side (flex 3 to 1) */}
              <Box sx={{ display: "flex", flexDirection: "row", gap: 2, width: '100%' }}>
                <Box sx={{ flex: 3 }}>
                  <Controller
                    name="name"
                    control={control}
                    rules={{
                      required: text.nameRequired || 'Name is required',
                      minLength: { value: 3, message: text.nameMinLength || 'Minimum 3 characters required' }
                    }}
                    render={({ field, fieldState: { error } }) => (
                      <TextField
                        {...field}
                        label={text.name || "Name"}
                        variant="outlined"
                        fullWidth
                        error={!!error}
                        helperText={error?.message}
                        slotProps={{ htmlInput: { style: { fontSize: '1rem', padding: '16px 14px' } } }}
                      />
                    )}
                  />
                </Box>

                <Box sx={{ flex: 1 }}>
                  <Controller
                    name="size"
                    control={control}
                    rules={{ required: text.sizeRequired || 'Size is required' }}
                    render={({ field, fieldState: { error } }) => (
                      <TextField
                        {...field}
                        label={text.size || "Size"}
                        variant="outlined"
                        fullWidth
                        type="number"
                        error={!!error}
                        helperText={error?.message}
                        slotProps={{ htmlInput: { style: { fontSize: '1rem', padding: '16px 14px' } } }}
                      />
                    )}
                  />
                </Box>
              </Box>

              {/* Row 2: Latitude and Longitude permanently locked side-by-side */}
              <Box sx={{ display: "flex", flexDirection: "row", gap: 2, width: '100%' }}>
                <Box sx={{ flex: 1 }}>
                  <Controller
                    name="lat"
                    control={control}
                    rules={{ required: text.latRequired || 'Latitude is required' }}
                    render={({ field, fieldState: { error } }) => (
                      <TextField
                        {...field}
                        label={text.lat || "Latitude"}
                        variant="outlined"
                        fullWidth
                        type="number"
                        error={!!error}
                        helperText={error?.message}
                        slotProps={{ htmlInput: { readOnly: true, style: { fontSize: '1rem', padding: '16px 14px' } } }}
                      />
                    )}
                  />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Controller
                    name="lng"
                    control={control}
                    rules={{ required: text.lngRequired || 'Longitude is required' }}
                    render={({ field, fieldState: { error } }) => (
                      <TextField
                        {...field}
                        label={text.lng || "Longitude"}
                        variant="outlined"
                        fullWidth
                        type="number"
                        error={!!error}
                        helperText={error?.message}
                        slotProps={{ htmlInput: { readOnly: true, style: { fontSize: '1rem', padding: '16px 14px' } } }}
                      />
                    )}
                  />
                </Box>
              </Box>

              {/* Row 3: Leaflet Geographic Tracking Interface Container */}
              <Box
                id="map"
                dir="ltr"
                sx={{
                  width: '100%',
                  borderRadius: 3,
                  overflow: 'hidden',
                  border: '1px solid rgba(0, 0, 0, 0.12)',
                  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.04)'
                }}
              >
                <MapContainer
                  style={{ height: mapHeight, width: '100%' }}
                  center={siteLonLat}
                  zoom={zoom}
                  scrollWheelZoom={false}
                  ref={setMap}
                >
                  <SatelliteMapProvider />
                  <GeoLocation />
                  {hasValidCoordinates && (
                    <CircleMarker color="white" fillColor="#2e7d32" fillOpacity={1} radius={8} center={siteLonLat} />
                  )}
                  <HandleMapEvents />
                </MapContainer>
              </Box>

              {/* Row 4: Action Submissions Panel Bar */}
              <Box sx={{
                display: "flex",
                justifyContent: "center",
                gap: 2,
                pt: 0.5
              }}>
                {site?.id && (
                  <Button
                    type="button"
                    onClick={() => setDeleteOpen(true)}
                    variant="outlined"
                    color="secondary"
                    sx={{ textTransform: 'none', borderRadius: 2, px: 5, py: 1, fontWeight: 600 }}
                  >
                    {text.delete || 'Delete'}
                  </Button>
                )}

                <Button
                  type="submit"
                  variant="contained"
                  color="success"
                  sx={{
                    textTransform: 'none',
                    borderRadius: 2,
                    px: 6,
                    py: 1,
                    fontWeight: 600,
                    boxShadow: '0px 4px 12px rgba(46, 125, 50, 0.2)'
                  }}
                >
                  {text.save || 'Save'}
                </Button>
              </Box>
            </Stack>
          </form>

          {/* Confirmation Popup Modal */}
          {deleteOpen && (
            <ActionApprovalDialog
              open={deleteOpen}
              handleClose={handleDelete}
              title={text.deleteFormTitle || "Confirm Deletion"}
              body={text.deleteFormBody || "Are you sure you want to drop this site reference permanently?"}
              okText={text.delete || "Delete"}
              cancelText={text.cancel || "Cancel"}
              color="secondary"
            />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default SiteForm;
