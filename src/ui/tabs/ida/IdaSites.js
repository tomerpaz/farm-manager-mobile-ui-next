import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import {
  Box,
  Button,
  Card,
  CardActionArea,
  Fab,
  Typography
} from '@mui/material';
import { Add, ChevronRight, SquareFoot, Terrain } from '@mui/icons-material';

import Loading from '../../../components/Loading';
import { useGetSitesQuery } from '../../../features/sites/sitesApiSlice';
import { selectLang } from '../../../features/app/appSlice';

const formatSize = (size) => {
  const n = Number(size);
  if (size === null || size === undefined || Number.isNaN(n)) return null;
  return `${n.toLocaleString(undefined, { maximumFractionDigits: 2 })} ha`;
};

const IdaSites = () => {
  const { data: sites, isLoading: isSitesLoading, isSuccess: isSitesSuccess } = useGetSitesQuery();
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

        {/* Site Cards */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.25, width: '100%' }}>
          {isSitesSuccess && sites?.map((value) => {
            const sizeLabel = formatSize(value.size);
            return (
              <Card
                key={value.id}
                elevation={0}
                sx={{
                  display: 'flex',
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
                  sx={{ display: 'flex', alignItems: 'center', gap: 2, px: 2, py: 1.75, minWidth: 0 }}
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
                  </Box>

                  <ChevronRight sx={{ color: 'text.disabled', flexShrink: 0 }} />
                </CardActionArea>

                {value.ggId && (
                  <Button
                    variant="outlined"
                    color="success"
                    onClick={() => navigate(`/site/${value.id}/fields`)}
                    sx={{
                      textTransform: 'none',
                      borderRadius: 2,
                      fontWeight: 600,
                      mr: 2,
                      ml: 1,
                      flexShrink: 0,
                      borderWidth: '1.5px',
                      px: { xs: 2, sm: 3 },
                      fontSize: { xs: '0.75rem', sm: '0.875rem' },
                      '&:hover': { borderWidth: '1.5px' }
                    }}
                  >
                    {text?.fields || "Fields"}
                  </Button>
                )}
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
