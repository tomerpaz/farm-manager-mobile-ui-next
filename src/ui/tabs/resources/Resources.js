import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import {
  Box,
  Card,
  CardActionArea,
  Typography
} from '@mui/material';
import { Category, ChevronRight, Grass, Groups } from '@mui/icons-material';

import { selectLang } from '../../../features/app/appSlice';

const Resources = () => {
  const text = useSelector(selectLang);
  const navigate = useNavigate();

  // Unified resource routing list structure dataset metadata mapping matrix
  const resourceItems = [
    { id: 'fertilizers', name: text?.fertilizers || 'Fertilizers', path: '/resources/fertilizer', icon: <Grass /> },
    { id: 'managers', name: text?.managers || 'Managers', path: '/resources/worker', icon: <Groups /> },
    { id: 'general', name: text?.general || 'General', path: '/resources/general', icon: <Category /> }
  ];

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100% !important',
        maxWidth: { xs: '100% !important', sm: '800px !important' },
        minWidth: '0px !important',
        flex: { xs: '1 1 100% !important', sm: 'initial' },

        // FIX: Forcefully anchors the entire box directly into the browser's horizontal center line
        mx: 'auto !important',

        bgcolor: 'background.paper',
        borderRadius: { xs: 0, sm: 2 },
        boxShadow: { xs: 0, sm: 2 },

        mt: { xs: 0, sm: '32px !important' },
        px: { xs: 2, sm: 3 },
        pt: { xs: 2, sm: '32px !important' },
        pb: { xs: 4, sm: 4 },
        boxSizing: 'border-box !important'
      }}
    >

      {/* Header Container Area */}
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
          {text?.resources || "Resources"}
        </Typography>
      </Box>

      {/* Resource Category Cards */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.25, width: '100%' }}>
        {resourceItems.map((value) => (
          <Card
            key={value.id}
            elevation={0}
            sx={{
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
            <CardActionArea
              onClick={() => navigate(value.path)}
              sx={{ display: 'flex', alignItems: 'center', gap: 2, px: 2.5, py: 2 }}
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
                {value.icon}
              </Box>

              <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.primary', flex: 1, minWidth: 0 }} noWrap>
                {value.name}
              </Typography>

              <ChevronRight sx={{ color: 'text.disabled', flexShrink: 0 }} />
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Resources;
