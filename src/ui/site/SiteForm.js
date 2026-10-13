import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useForm, Controller, useWatch } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Stack,
  TextField,
  Typography,
  IconButton
} from '@mui/material';
import { ArrowBack, LocationOn } from '@mui/icons-material';
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
import AddressSearchControl from '../../components/map/AddressSearchControl';
import { DEFAULT_COORDINATES } from '../FarmUtil';
import ActionApprovalDialog from '../../components/ui/ActionApprovalDialog';
import Loading from '../../components/Loading';
import GoBackAppBar from '../../appbar/content/GoBackAppBar';
import GoBackDesktopButton from '../../components/ui/GoBackDesktopButton';
import FormActionBar from '../../components/ui/FormActionBar';

const SiteForm = () => {
  const navigate = useNavigate();
  const { siteId } = useParams();
  const dispatch = useDispatch();

  const text = useSelector(selectLang);
  const zoom = useSelector(selectMapZoom);

  // Active UI tracking states
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [map, setMap] = useState(null);

  // The map takes whatever height is left on screen (see the flex layout
  // below), so it changes size with the layout — Leaflet only re-measures on
  // window resize, so tell it whenever its container changes.
  useEffect(() => {
    if (!map || typeof ResizeObserver === 'undefined') return;
    const observer = new ResizeObserver(() => map.invalidateSize());
    observer.observe(map.getContainer());
    return () => observer.disconnect();
  }, [map]);

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

  // MapContainer's center/zoom props only apply on the map's initial mount
  // (react-leaflet ignores later prop changes) — once the site's real
  // coordinates arrive via reset() above, the view has to be moved by hand.
  useEffect(() => {
    if (map && lat !== '' && lng !== '') {
      map.setView([Number(lat), Number(lng)], map.getZoom());
    }
  }, [map, lat, lng]);

  // Address/location search — OpenStreetMap's Nominatim needs no API key
  // (unlike the Google layer, which only some users have a key for), so it
  // works regardless of which map provider the user's account is set to.
  const handleAddressSelect = (location) => {
    setValue('lat', Number(location.y).toFixed(5), { shouldDirty: true });
    setValue('lng', Number(location.x).toFixed(5), { shouldDirty: true });
    trigger(['lat', 'lng']);
  };

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
    // Exactly one screen tall: header, fields and the docked Save bar keep
    // their natural size and the map flexes to fill the rest — no page scroll.
    <Box sx={{ height: '100dvh', display: 'flex', flexDirection: 'column' }}>
      <GoBackAppBar />
      <Box sx={{
        width: '100%',
        mt: { xs: 0, sm: '32px !important' },
        mb: { xs: 0, sm: 4 },
        flex: 1,
        minHeight: 0,
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100% !important',
          boxSizing: 'border-box !important',
          maxWidth: { xs: '100% !important', sm: '800px !important' },
          minWidth: '0px !important',
          flex: '1 1 auto !important',
          minHeight: 0,
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
              {(site?.ggGeoName || site?.ggGeoCountry) && (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 0.5, color: 'text.secondary' }}>
                  <LocationOn sx={{ fontSize: '1rem', flexShrink: 0 }} />
                  <Typography variant="body2" noWrap>
                    {[site.ggGeoName, site.ggGeoCountry].filter(Boolean).join(', ')}
                  </Typography>
                </Box>
              )}
            </Box>
          </Box>

          {/* Main Structural Inputs Form */}
          <form onSubmit={handleSubmit(onSubmit)} noValidate style={{ width: '100%', flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>
            <Stack spacing={3} sx={{ width: '100%', flex: 1, minHeight: 0 }}>

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
                  flex: 1,
                  minHeight: 200,
                  position: 'relative',
                  borderRadius: 3,
                  overflow: 'hidden',
                  border: '1px solid rgba(0, 0, 0, 0.12)',
                  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.04)'
                }}
              >
                <MapContainer
                  style={{ position: 'absolute', inset: 0 }}
                  center={siteLonLat}
                  zoom={zoom}
                  scrollWheelZoom={false}
                  ref={setMap}
                >
                  <SatelliteMapProvider />
                  <GeoLocation />
                  {/* Native Leaflet control (collapsed search icon) added right
                      after GeoLocation so it stacks underneath the geo-locate
                      button in the top-left corner. */}
                  <AddressSearchControl onLocationSelect={handleAddressSelect} />
                  {hasValidCoordinates && (
                    <CircleMarker color="white" fillColor="#2e7d32" fillOpacity={1} radius={8} center={siteLonLat} />
                  )}
                  <HandleMapEvents />
                </MapContainer>
              </Box>

              {/* Row 4: Docked Save/Delete bar */}
              <FormActionBar
                saveLabel={text.save || 'Save'}
                deleteLabel={text.delete || 'Delete'}
                onDelete={site?.id && site?.deletable === true ? () => setDeleteOpen(true) : undefined}
              />
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
