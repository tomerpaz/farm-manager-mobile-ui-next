import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Typography,
  Button,
  MenuItem,
  TextField,
  Card,
  Paper,
  Tooltip,
  useMediaQuery,
  useTheme
} from '@mui/material';
import {
  DoneAll,
  ModeEdit,
  PictureAsPdf,
  RadioButtonUnchecked,
  TableChart,
  WarningAmber,
  WaterDrop,
  OfflineBolt,
  Grass,
  Science
} from '@mui/icons-material';

import Loading from '../../../components/Loading';
import GlobalGapSvg from '../../../icons/gg/GlobalGapSvg';
import { selectLang, } from '../../../features/app/appSlice';
import { useGetGGYearDataQuery, useGetIdaSystemDataQuery } from '../../../features/ida/idaApiSlice';
import { getMonthName } from '../../FarmUtil';
import { exportYearToPdf, exportYearToXlsx } from './idaReport';
import { useNavigate } from 'react-router';

// One tile per metric per month. On mobile there's no room for a
// "Fertilizer: OK" label next to three others plus the month button on a
// single line, so it shrinks to an icon-only chip (color still carries
// ok/pending, full detail stays one tap away via the tooltip) — that keeps
// every row compact enough that a whole month list fits without each row
// eating the screen.
const StatusIndicator = ({ icon, label, ok, isMobile, styles }) => (
  <Tooltip title={`${label}: ${ok ? 'OK' : 'PEND'}`}>
    <Paper
      elevation={0}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 0.5,
        p: '6px 4px',
        boxSizing: 'border-box', // otherwise the padding adds on top of `height`, rendering taller than the month Button
        borderRadius: 1.25,
        flex: { xs: '0 0 auto', sm: 1 },
        width: { xs: 32, sm: 'auto' },
        minWidth: 0,
        height: { xs: 32, sm: '36px' },
        transition: 'transform 0.1s ease',
        '&:hover': { transform: 'scale(1.01)' },
        ...styles
      }}
    >
      {icon}
      {!isMobile && (
        <Typography noWrap variant="subtitle2" sx={{ fontSize: '0.78rem', fontWeight: 800, color: 'inherit' }}>
          {`${label}: ${ok ? 'OK' : 'PEND'}`}
        </Typography>
      )}
    </Paper>
  </Tooltip>
);

const IdaDash = () => {

  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const text = useSelector(selectLang);
  const lang = text?.lang;

  const [year, setYear] = useState(new Date().getFullYear());
  const currentYear = new Date().getFullYear();

  const { data: idaSystemData, isLoading: isSystemLoading } = useGetIdaSystemDataQuery();
  const { data: ggYearData, isLoading: isYearDataLoading } = useGetGGYearDataQuery(year);

  if (isSystemLoading || isYearDataLoading) {
    return (
      <Box sx={{ p: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1, minHeight: '80vh' }}>
        <Loading />
      </Box>
    );
  }
  console.log(idaSystemData)

  // A record with every metric list empty means someone created it and
  // never actually entered anything — checked directly off the record's own
  // content rather than its `status` string, since a freshly-created blank
  // record can still come back with status 'draft' (the boolean `draft`
  // flag defaults true), which would otherwise mask the empty case.
  const RECORD_METRIC_KEYS = [
    'waterUse', 'waterAbstracted', 'activeIngredients', 'fertilizers',
    'energyUsed', 'energyExportedOrGenerated', 'precipitations', 'general',
  ];
  const isRecordEmpty = (record) =>
    !!record && RECORD_METRIC_KEYS.every((key) => !record[key]?.length);

  
  // Soft, pastel tiles matching getIndicatorStyles' look rather than MUI's
  // raw success/warning/secondary palette colors, which read too saturated
  // side-by-side. Four distinct states: no record at all yet is neutral (an
  // untouched month isn't a problem); a record that exists but has no data
  // in it *is* a problem, so it gets flagged rather than folded into the
  // same neutral "empty" look as a month nobody has opened.
  const getStatusConfig = (m) => {
    const status = ggYearData?.months?.[m]?.status;
    const record = ggYearData?.months?.[m]?.records?.[0];
    const hasRecord = !!record;

    if (hasRecord && isRecordEmpty(record)) {
      return {
        icon: <WarningAmber sx={{ fontSize: '1.15rem' }} />,
        sx: {
          bgcolor: 'rgba(198, 40, 40, 0.12)',
          color: '#8c1c1c',
          border: '1px solid rgba(198, 40, 40, 0.3)',
          '&:hover': { bgcolor: 'rgba(198, 40, 40, 0.2)' },
        },
      };
    }
    if (status === 'ok') {
      return {
        icon: <DoneAll sx={{ fontSize: '1.15rem' }} />,
        sx: {
          bgcolor: 'rgba(46, 125, 50, 0.14)',
          color: '#1b5e20',
          border: '1px solid rgba(46, 125, 50, 0.3)',
          '&:hover': { bgcolor: 'rgba(46, 125, 50, 0.22)' },
        },
      };
    }
    if (status === 'draft') {
      return {
        icon: <ModeEdit sx={{ fontSize: '1.15rem' }} />,
        sx: {
          bgcolor: 'rgba(199, 119, 0, 0.14)',
          color: '#8a5300',
          border: '1px solid rgba(199, 119, 0, 0.32)',
          '&:hover': { bgcolor: 'rgba(199, 119, 0, 0.22)' },
        },
      };
    }
    if (hasRecord) {
      return {
        icon: <WarningAmber sx={{ fontSize: '1.15rem' }} />,
        sx: {
          bgcolor: 'rgba(198, 40, 40, 0.12)',
          color: '#8c1c1c',
          border: '1px solid rgba(198, 40, 40, 0.3)',
          '&:hover': { bgcolor: 'rgba(198, 40, 40, 0.2)' },
        },
      };
    }
    return {
      icon: <RadioButtonUnchecked sx={{ fontSize: '1.15rem' }} />,
      sx: {
        bgcolor: 'transparent',
        color: 'text.secondary',
        border: '1.5px solid rgba(0, 0, 0, 0.16)',
        '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.03)', borderColor: 'rgba(0, 0, 0, 0.28)' },
      },
    };
  };

  // An unmet compliance metric is worth flagging, not soft-pedaling as
  // neutral — red for pending, solid (not pastel) green for OK so the two
  // don't read as close variants of the same muted tone.
  const getIndicatorStyles = (statusOk) => {
    if (statusOk) {
      return {
        bgcolor: 'rgba(46, 125, 50, 0.14)',
        color: '#1b5e20',
        border: '1px solid rgba(46, 125, 50, 0.3)',
      };
    }
    return {
      bgcolor: '#fdeded',
      color: '#8c1c1c',
      border: '1px solid rgba(211, 47, 47, 0.25)',
    };
  };
  const drawMain = () => {


    if (ggYearData) {
      return (
        <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column', gap: '4px', height: '100%', minHeight: 0 }}>

          {/* Header Action Strip Row */}
          <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 1, borderBottom: '1px solid', borderColor: 'rgba(105, 14, 14, 0.08)', pb: { xs: 0.75, sm: 1 }, mb: '4px', px: { xs: 0, md: 0 }, flexShrink: 0 }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 1.5, minWidth: 0 }}>
              <Box sx={{ flexShrink: 0, display: { xs: 'none', sm: 'flex' }, width: '3.2rem', height: '3.2rem' }}>
                <GlobalGapSvg width="100%" height="100%" />
              </Box>
              <Box sx={{ minWidth: 0 }}>
                <Typography variant="h6" sx={{ fontWeight: 800, color: 'text.primary', letterSpacing: '-0.02em', lineHeight: 1, fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                  {text?.idaDashboard || "IDA Tracking Dashboard"}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.15, display: { xs: 'none', sm: 'block' } }}>
                  {text?.selectMonthToManage || "Select a monthly matrix node to update parameter logs"}
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Tooltip title={text?.exportPdf || "Export year as PDF"}>
                <span>
                  <Button
                    variant="outlined"
                    color="secondary"
                    disableElevation
                    disabled={!ggYearData}
                    onClick={() => {
                      // Opened synchronously in the click handler so it counts as a
                      // user-gesture popup — exportYearToPdf fills it in once the
                      // (async) PDF is ready instead of opening a new tab itself.
                      const reportWindow = window.open('', '_blank');
                      exportYearToPdf(ggYearData, year, lang, reportWindow).catch((err) => {
                        console.error('Failed to export PDF report:', err);
                        reportWindow?.close();
                      });
                    }}
                    startIcon={<PictureAsPdf sx={{ fontSize: '1.4rem', color: '#B7261C' }} />}
                    sx={{
                      textTransform: 'none',
                      fontWeight: 700,
                      borderRadius: 1.5,
                      px: 2,
                      height: 40,
                    }}
                  >
                    PDF
                  </Button>
                </span>
              </Tooltip>

              <Tooltip title={text?.exportXlsx || "Export year as Excel"}>
                <span>
                  <Button
                    variant="outlined"
                    color="secondary"
                    disableElevation
                    disabled={!ggYearData}
                    onClick={() => exportYearToXlsx(ggYearData, year, lang)}
                    startIcon={<TableChart sx={{ fontSize: '1.4rem', color: '#175C35' }} />}
                    sx={{
                      textTransform: 'none',
                      fontWeight: 700,
                      borderRadius: 1.5,
                      px: 2,
                      height: 40,
                    }}
                  >
                    Excel
                  </Button>
                </span>
              </Tooltip>

              <TextField
                select
                value={year}
                label={text?.year || "Year"}
                onChange={(e) => setYear(e.target.value)}
                size="small"
                slotProps={{ menu: { PaperProps: { style: { maxHeight: 200 } } } }}
                sx={{ minWidth: 105, '& .MuiOutlinedInput-root': { borderRadius: 1.5, height: 40 }, '& .MuiInputLabel-root': { fontSize: '0.85rem' } }}
              >
                {[0, 1, 2, 3, 4, 5].map((offset) => (
                  <MenuItem key={offset} value={currentYear - offset}>
                    {currentYear - offset}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
          </Box>

          {/* Core Layout Timeline Container */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '6px', flex: 1, minHeight: 0, overflowY: 'auto' }}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(m => {
              const statusConfig = getStatusConfig(m);
              return (
                <Card
                  key={m}
                  elevation={0}
                  // IDAForm's :month route param is 0-indexed (native JS Date
                  // convention); m here is 1-indexed for display. The button
                  // below has no onClick of its own — a click on it bubbles
                  // up to this same handler. (It used to have its own
                  // identical onClick too, which meant every click pushed
                  // TWO history entries for this route instead of one — so
                  // IDAForm's navigate(-1) after saving only popped back to
                  // the other /ida/... entry, not to this dashboard, and the
                  // form appeared to just scroll instead of closing.)
                  onClick={() => navigate(`/ida/${year}/${m - 1}`)}
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: { xs: 1, sm: 2 },
                    height: 'auto', // Allowed height to wrap fluidly to prevent card compression
                    minHeight: '50px', // FIXED: Expanded minimum bounds to match ResourceForm card style
                    py: '6px',
                    px: { xs: '10px', sm: '16px' },
                    border: '1px solid rgba(0, 0, 0, 0.08)', // FIXED: Soft gray border line perfectly matches ResourceForm spec
                    borderRadius: 1.5,
                    backgroundColor: 'background.paper',
                    boxSizing: 'border-box',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease-in-out',
                    '&:hover': {
                      borderColor: 'primary.main',
                      boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.04)',
                      backgroundColor: 'rgba(247, 249, 252, 0.4)'
                    }
                  }}
                >
                  {/* Left Column Panel: Merged Month Action Button — fixed
                      width on desktop, shares the row with the status chips
                      on mobile instead of stacking above them (a stacked
                      layout meant each card was 3x taller, so only one or
                      two months fit on screen at a time). */}
                  <Box sx={{ display: 'flex', flex: { xs: '1 1 0', sm: '0 0 165px' }, minWidth: 0 }}>
                    <Button
                      variant="contained"
                      size="medium"
                      disableElevation
                      startIcon={statusConfig.icon}
                      sx={{
                        textTransform: 'none',
                        borderRadius: 1.5,
                        px: { xs: 1.25, sm: 2 },
                        fontSize: { xs: '0.85rem', sm: '1rem' },
                        fontWeight: 800,
                        height: 38, // FIXED: Expanded height footprint matches ResourceForm action control design
                        width: '100%',
                        minWidth: 0,
                        justifyContent: 'flex-start',
                        boxShadow: 'none',
                        '& .MuiButton-startIcon': { mr: 1 },
                        '& .MuiButton-label, & > span': { overflow: 'hidden', textOverflow: 'ellipsis' },
                        ...statusConfig.sx,
                      }}
                    >
                      {getMonthName(m, lang)}
                    </Button>
                  </Box>

                  {/* Right Row Metrics Dashboard Block — icon-only fixed-width
                      chips on mobile so all four always fit on the same row
                      as the month button; full labels, flexed to fill the
                      row, on desktop. */}
                  <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: { xs: 0.5, sm: 1 }, flex: { xs: '0 0 auto', sm: 1 }, minWidth: 0, alignItems: 'center' }}>
                    <StatusIndicator
                      icon={<Science sx={{ fontSize: '1.05rem', flexShrink: 0, color: 'inherit' }} />}
                      label={text?.activeIngredient || "Pesticides"}
                      ok={ggYearData?.months?.[m]?.activeIngredientOk}
                      isMobile={isMobile}
                      styles={getIndicatorStyles(ggYearData?.months?.[m]?.activeIngredientOk)}
                    />
                    <StatusIndicator
                      icon={<Grass sx={{ fontSize: '1.05rem', flexShrink: 0, color: 'inherit' }} />}
                      label={text?.fertilizer || "Fertilizer"}
                      ok={ggYearData?.months?.[m]?.fertilizerOk}
                      isMobile={isMobile}
                      styles={getIndicatorStyles(ggYearData?.months?.[m]?.fertilizerOk)}
                    />
                    <StatusIndicator
                      icon={<WaterDrop sx={{ fontSize: '1.05rem', flexShrink: 0, color: 'inherit' }} />}
                      label={text?.water || "Water"}
                      ok={ggYearData?.months?.[m]?.waterOk}
                      isMobile={isMobile}
                      styles={getIndicatorStyles(ggYearData?.months?.[m]?.waterOk)}
                    />
                    <StatusIndicator
                      icon={<OfflineBolt sx={{ fontSize: '1.05rem', flexShrink: 0, color: 'inherit' }} />}
                      label={text?.energy || "Energy"}
                      ok={ggYearData?.months?.[m]?.energyOk}
                      isMobile={isMobile}
                      styles={getIndicatorStyles(ggYearData?.months?.[m]?.energyOk)}
                    />
                  </Box>

                </Card>
              );
            })}
          </Box>
        </Box>
      );
    }
    return null;
  };

  return (
    <Box sx={{
      bgcolor: 'grey.50',
      p: { xs: 0, sm: 1 },
      display: 'flex',
      flex: 1,
      height: 'calc(100vh - 120px)',
      boxSizing: 'border-box',
      overflow: 'hidden'
    }}>
      <Paper
        elevation={0}
        sx={{
          p: { xs: '4px 8px', sm: '8px 16px' },
          borderRadius: { xs: 0, sm: 2.5 },
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          bgcolor: 'background.paper',
          boxSizing: 'border-box',
          overflow: 'hidden'
        }}
      >
        {drawMain()}
      </Paper>
    </Box>
  );
};

export default IdaDash;
