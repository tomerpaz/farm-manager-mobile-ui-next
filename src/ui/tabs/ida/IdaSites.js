import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import {
  Alert,
  Box,
  Button,
  Card,
  CardActionArea,
  Fab,
  Tooltip,
  Typography
} from '@mui/material';
import { Add, Agriculture, ChevronRight, LocationOn, Map as MapIcon, SquareFoot, Terrain } from '@mui/icons-material';

import Loading from '../../../components/Loading';
import { useGetSitesQuery } from '../../../features/sites/sitesApiSlice';
import { useGetIdaSystemDataQuery } from '../../../features/ida/idaApiSlice';
import { selectLang } from '../../../features/app/appSlice';
import { useGetUserDataQuery } from '../../../features/auth/authApiSlice';

const formatSize = (size, areaUnit) => {
  const n = Number(size);
  if (size === null || size === undefined || Number.isNaN(n)) return null;
  const formatted = n.toLocaleString(undefined, { maximumFractionDigits: 2 });
  return areaUnit ? `${formatted} ${areaUnit}` : formatted;
};

// Shared by the card's Map and Fields buttons so they read as one pair:
// same outlined border, radius and height. On a phone they share a full-width row.
const cardButtonSx = {
  textTransform: 'none',
  borderRadius: 2,
  fontWeight: 700,
  flex: { xs: 1, sm: 'none' },
  height: { xs: 44, sm: 48 },
  px: { sm: 4 },
  borderWidth: '2px',
  fontSize: { xs: '0.95rem', sm: '1rem' },
  whiteSpace: 'nowrap',
  '&:hover': { borderWidth: '2px' }
};

const IdaSites = () => {
  const { data: sites, isLoading: isSitesLoading, isSuccess: isSitesSuccess } = useGetSitesQuery();
  // The sites IDA can report on: the dashboard and form redirect here when there are none.
  const { data: idaSystemData, isSuccess: isSystemSuccess } = useGetIdaSystemDataQuery();
  const { data: user } = useGetUserDataQuery();
  const text = useSelector(selectLang);
  const navigate = useNavigate();

  const handleAddSite = () => navigate('/site/0');

  if (isSitesLoading) {
    return (
      <Box sx={{ p: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1, minHeight: '80vh' }}>
        <Loading />
      </Box>
    );
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{
          mx: 'auto',
          mt: { xs: 0, sm: 3 },
          boxShadow: { xs: 'none', sm: 2 },
          borderRadius: { xs: 0, sm: 2 },
          position: 'relative',
          flex: '1 1 100% !important',
          width: '100% !important',
          maxWidth: { xs: '100% !important', sm: '800px !important' },
          minWidth: '0px !important',
          boxSizing: 'border-box !important',
          pt: { xs: 2, sm: 3 },
          px: { xs: 2, sm: 3 },
          pb: { xs: 10, sm: 6 }
        }}
      >

        {/* Header Container */}
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 3,
          width: '100%'
        }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              fontSize: { xs: '1.25rem', sm: '1.5rem' },
              color: 'text.primary',
              letterSpacing: '-0.02em'
            }}
          >
            {text?.sites || "Sites"}
          </Typography>

          {/* Primary Desktop-only Add Button */}
          <Button
            variant="contained"
            color="success"
            startIcon={<Add />}
            onClick={handleAddSite}
            sx={{
              textTransform: 'none',
              borderRadius: 2,
              fontWeight: 600,
              boxShadow: '0px 4px 12px rgba(46, 125, 50, 0.2)',
              display: { xs: 'none', sm: 'inline-flex' }
            }}
          >
            {text?.site || "Add Site"}
          </Button>
        </Box>

        {isSystemSuccess && !idaSystemData?.sites?.length && (
          <Alert severity="info" sx={{ mb: 2 }}>
            {text?.idaNeedsSite || "To start IDA reporting you need an active site registered in GLOBALG.A.P. Sites are registered when saved with a map location, so add a site, or open an existing one and save it again."}
          </Alert>
        )}

        {/* Site Cards */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.25, width: '100%' }}>
          {isSitesSuccess && sites?.map((value) => {
            const sizeLabel = formatSize(value.size, text[user?.areaUnit]);
            return (
              <Card
                key={value.id}
                elevation={0}
                sx={{
                  display: 'flex',
                  flexWrap: { xs: 'wrap', sm: 'nowrap' },
                  alignItems: 'center',
                  bgcolor: 'rgba(46, 125, 50, 0.03)',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  borderRadius: 2.5,
                  overflow: 'hidden',
                  transition: 'all 0.15s ease-in-out',
                  '&:hover': {
                    bgcolor: 'rgba(46, 125, 50, 0.06)',
                    borderColor: 'rgba(46, 125, 50, 0.3)',
                    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.06)'
                  }
                }}
              >
                {/* CardActionArea and the Fields button are siblings, not nested,
                    so a clickable Fields control never ends up inside another button. */}
                <CardActionArea
                  onClick={() => navigate(`/site/${value.id}`)}
                  sx={{ flex: { sm: 1 }, width: { xs: '100%', sm: 'auto' }, display: 'flex', alignItems: 'center', gap: 2, px: 2, py: 1.75, minWidth: 0 }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 44,
                      height: 44,
                      borderRadius: '50%',
                      flexShrink: 0,
                      bgcolor: 'rgba(46, 125, 50, 0.1)',
                      color: 'success.main'
                    }}
                  >
                    <Terrain />
                  </Box>

                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.primary' }} noWrap>
                      {value.name}
                    </Typography>
                    {sizeLabel && (
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 0.25, color: 'text.secondary' }}>
                        <SquareFoot sx={{ fontSize: '0.95rem' }} />
                        <Typography variant="body2">{sizeLabel}</Typography>
                      </Box>
                    )}
                    {(value.ggGeoName || value.ggGeoCountry) && (
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 0.25, color: 'text.secondary', minWidth: 0 }}>
                        <LocationOn sx={{ fontSize: '0.95rem', flexShrink: 0 }} />
                        <Typography variant="body2" noWrap>
                          {[value.ggGeoName, value.ggGeoCountry].filter(Boolean).join(', ')}
                        </Typography>
                      </Box>
                    )}
                  </Box>

                  <ChevronRight sx={{ color: 'text.disabled', flexShrink: 0, transform: (theme) => (theme.direction === 'rtl' ? 'scaleX(-1)' : 'none') }} />
                </CardActionArea>

                <Box sx={{ display: 'flex', gap: 1, flexShrink: 0, width: { xs: '100%', sm: 'auto' }, px: { xs: 2, sm: 0 }, pb: { xs: 1.75, sm: 0 }, ml: { sm: 1 }, mr: { sm: 2 } }}>
                  <Tooltip title={text?.siteMap || "Site Map"}>
                    <Button
                      variant="outlined"
                      color="success"
                      startIcon={<MapIcon />}
                      onClick={() => navigate(`/site/${value.id}/map`)}
                      sx={cardButtonSx}
                    >
                      {text?.map || "Map"}
                    </Button>
                  </Tooltip>

                  {value.ggId && (
                    <Button
                      variant="outlined"
                      color="success"
                      startIcon={<Agriculture />}
                      onClick={() => navigate(`/site/${value.id}/fields`)}
                      sx={cardButtonSx}
                    >
                      {text?.fields || "Fields"}
                    </Button>
                  )}
                </Box>
              </Card>
            );
          })}
        </Box>

        {/* Empty Fallback State Area */}
        {isSitesSuccess && sites?.length === 0 && (
          <Box sx={{ textAlign: 'center', mt: 6, py: 2 }}>
            <Terrain sx={{ fontSize: '2.5rem', color: 'text.disabled', mb: 1 }} />
            <Typography variant="body2" color="text.secondary">
              {text?.noSitesMessage || "No sites found. Click the button to add one."}
            </Typography>
          </Box>
        )}

        {/* Floating Action Button (FAB) for Mobile screens */}
        <Fab
          color="success"
          aria-label="add site"
          onClick={handleAddSite}
          sx={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            boxShadow: '0px 6px 16px rgba(46, 125, 50, 0.35)',
            zIndex: 1100,
            display: { xs: 'flex', sm: 'none' }
          }}
        >
          <Add />
        </Fab>
      </Box>
    </Box>
  );
}

export default IdaSites;
