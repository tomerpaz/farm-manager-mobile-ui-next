import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Typography,
  Button,
  Checkbox,
  ListItemText,
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
import { selectLang, selectReportGenerating } from '../../../features/app/appSlice';
import { useGetGGDataQuery, useGetIdaSystemDataQuery } from '../../../features/ida/idaApiSlice';
import { filterByMonth, monthKeyLabel, monthOfKey, yearOfKey } from '../../../features/ida/ggRecordMapper';
import { useGenerateReportMutation } from '../../../features/reports/reportApiSlice';
import { downloadReportFile, reportFailed } from '../../../features/reports/reportFile';
import { Navigate, useNavigate } from 'react-router';
import { pageTintBg } from '../../../components/ui/pageTint';
import { FieldYearPager } from '../../../components/ui/YearPager';

// One tile per metric per month. On mobile there's no room for a
// "Fertilizer" label next to three others plus the month button on a
// single line, so it shrinks to an icon-only chip (the name stays one tap
// away via the tooltip). The tile's color alone carries ok/pending — that keeps
// every row compact enough that a whole month list fits without each row
// eating the screen.
// count: "reported/relevant" (e.g. "4/10" fields), shown beside the label on desktop
// and under the icon on a phone.
const StatusIndicator = ({ icon, label, count, isMobile, styles }) => (
  <Tooltip title={count ? `${label}: ${count}` : label}>
    <Paper
      elevation={0}
      sx={{
        display: 'flex',
        flexDirection: { xs: count ? 'column' : 'row', sm: 'row' },
        alignItems: 'center',
        justifyContent: 'center',
        gap: { xs: 0, sm: 0.5 },
        p: { xs: count ? '2px 2px' : '6px 4px', sm: '6px 4px' },
        boxSizing: 'border-box', // otherwise the padding adds on top of `height`, rendering taller than the month Button
        borderRadius: 1.25,
        flex: { xs: '0 0 auto', sm: 1 },
        width: { xs: count ? 40 : 32, sm: 'auto' },
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
          {label}
        </Typography>
      )}
      {count && (
        <Typography noWrap variant="subtitle2" sx={{ fontSize: { xs: '0.62rem', sm: '0.78rem' }, lineHeight: { xs: 1.1, sm: 'inherit' }, fontWeight: 800, color: 'inherit', fontVariantNumeric: 'tabular-nums' }}>
          {count}
        </Typography>
      )}
    </Paper>
  </Tooltip>
);

// On a phone the controls fill two full-width rows; from sm up the rows dissolve into one strip.
const filterRowSx = { display: { xs: 'flex', sm: 'contents' }, gap: 1 };
const filterItemSx = { flex: { xs: '1 1 0', sm: 'none' }, minWidth: 0 };
// On phones the export buttons are icon-only squares beside the month pickers.
const exportButtonWrapSx = { flex: 'none', display: { xs: 'flex', sm: 'inline' } };
const exportButtonSx = {
  textTransform: 'none', fontWeight: 700, borderRadius: 1.5, height: 40,
  px: { xs: 0, sm: 2 }, minWidth: { xs: 40, sm: 64 },
  // Phones only: no label, so no gap beside the icon (sm+ keeps MUI's default).
  '@media (max-width: 599.95px)': { '& .MuiButton-startIcon': { m: 0 } },
};
const exportLabelSx = { display: { xs: 'none', sm: 'inline' } };
const monthPickerSx = { width: { xs: 'auto', sm: 115 }, '& .MuiPickersOutlinedInput-root': { borderRadius: 1.5, height: 40 }, '& .MuiInputLabel-root': { fontSize: '0.85rem' } };
const selectFilterSx = { '& .MuiOutlinedInput-root': { borderRadius: 1.5, height: 40 }, '& .MuiInputLabel-root': { fontSize: '0.85rem' } };
const selectFilterMenu = { menu: { PaperProps: { style: { maxHeight: 200 } } } };
const ALL_SITES = 0;

const DASH_FILTERS_KEY = 'idaDash.filters';
const readDashFilters = () => {
  try {
    const { from, to, sites } = JSON.parse(sessionStorage.getItem(DASH_FILTERS_KEY)) || {};
    const fromDay = from && dayjs(from);
    const toDay = to && dayjs(to);
    const valid = fromDay?.isValid() && toDay?.isValid() && !toDay.isBefore(fromDay, 'month');
    return {
      ...(valid ? { from: fromDay.startOf('month'), to: toDay.endOf('month') } : {}),
      sites: Array.isArray(sites) ? sites.filter((id) => typeof id === 'number') : [],
    };
  } catch {
    return {};
  }
};
const storeDashFilters = (filters) => {
  try { sessionStorage.setItem(DASH_FILTERS_KEY, JSON.stringify(filters)); } catch { /* storage unavailable */ }
};

const IdaDash = () => {

  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const text = useSelector(selectLang);
  const lang = text?.lang;

  // The filters (months and sites) survive opening a month and coming back:
  // kept for this browser tab in sessionStorage.
  const [saved] = useState(readDashFilters);
  const [from, setFrom] = useState(() => saved.from ?? dayjs().startOf('year'));
  const [to, setTo] = useState(() => saved.to ?? dayjs().endOf('year'));
  // Half-typed dates are ignored. To Month can't go before From Month; a later From Month pulls it along.
  const handleFromChange = (value) => {
    if (!value?.isValid()) return;
    setFrom(value);
    if (value.isAfter(to, 'month')) setTo(value);
  };
  // Year pager (same as on the site's fields page): a shortcut to a whole calendar
  // year. While the months cover anything else it shows From Month's year greyed,
  // and the arrows jump to the whole year before / after it. Clicking the year
  // itself resets the months to that whole year.
  const selectedYear = from.year() === to.year() && from.month() === 0 && to.month() === 11 ? from.year() : '';
  const pagerYear = selectedYear || from.year();
  const handleYearChange = (year) => {
    const yearStart = dayjs().year(year).startOf('year');
    setFrom(yearStart);
    setTo(yearStart.endOf('year'));
  };
  const handleToChange = (value) => {
    if (!value?.isValid() || value.isBefore(from, 'month')) return;
    setTo(value);
  };

  const { data: idaSystemData, isLoading: isSystemLoading, isSuccess: isSystemSuccess } = useGetIdaSystemDataQuery();
  const range = {
    from: from.startOf('month').format('YYYY-MM-DD'),
    to: to.endOf('month').format('YYYY-MM-DD'),
  };
  // No site ticked means all of them.
  const [storedSites, setSelectedSites] = useState(() => saved.sites ?? []);
  // Only sites that still exist (one may have been removed since it was stored).
  const selectedSites = idaSystemData?.sites
    ? storedSites.filter((id) => idaSystemData.sites.some((site) => site.id === id))
    : storedSites;
  const siteIds = selectedSites.length ? selectedSites : undefined;
  useEffect(() => {
    storeDashFilters({ from: from.format('YYYY-MM'), to: to.format('YYYY-MM'), sites: selectedSites });
  }, [from, to, selectedSites.join(',')]); // eslint-disable-line react-hooks/exhaustive-deps
  const handleSitesChange = (e) => setSelectedSites(e.target.value.includes(ALL_SITES) ? [] : e.target.value);
  const siteNames = (ids) => {
    if (!ids.length) return text?.allSites || "All Sites";
    return ids.map((id) => idaSystemData?.sites?.find((site) => site.id === id)?.name).filter(Boolean).join(', ');
  };
  const { data: ggData, isLoading: isDataLoading } = useGetGGDataQuery({ ...range, sites: siteIds });
  const [generateReport] = useGenerateReportMutation();
  const reportGenerating = useSelector(selectReportGenerating);
  const dispatch = useDispatch();

  // Nothing can be reported without a site, so send the user to add one.
  if (isSystemSuccess && !idaSystemData?.sites?.length) {
    return <Navigate to="/tabs/ida/sites" replace />;
  }

  if (isSystemLoading || isDataLoading) {
    return (
      <Box sx={{ p: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1, minHeight: '80vh' }}>
        <Loading />
      </Box>
    );
  }

  // A record with every metric list empty means someone saved it without
  // entering anything — checked directly off the record's own content rather
  // than its `status` string, since a blank record can still come back with
  // status 'draft' (the boolean `draft` flag defaults true).
  const RECORD_METRIC_KEYS = [
    'waterUse', 'waterAbstracted', 'activeIngredients', 'fertilizers',
    'energyUsed', 'energyExportedOrGenerated', 'precipitations', 'general',
  ];
  const isRecordEmpty = (record) =>
    !!record && RECORD_METRIC_KEYS.every((key) => !record[key]?.length);

  // No record, or one saved with nothing in it — nothing to report yet.
  const isMonthEmpty = (m) => {
    const record = ggData?.months?.[m]?.records?.[0];
    return !record || isRecordEmpty(record);
  };

  
  // Soft, pastel tiles matching getIndicatorStyles' look rather than MUI's
  // raw success/warning/secondary palette colors, which read too saturated
  // side-by-side. A record saved with nothing in it carries no information,
  // so it gets the same neutral look as a month nobody has opened.
  const getStatusConfig = (m) => {
    const status = ggData?.months?.[m]?.status;
    const record = ggData?.months?.[m]?.records?.[0];
    const hasRecord = !!record && !isRecordEmpty(record);

    if (!hasRecord) {
      return {
        icon: <RadioButtonUnchecked sx={{ fontSize: '1.15rem' }} />,
        sx: {
          bgcolor: 'transparent',
          color: 'text.secondary',
          border: '1.5px solid rgba(0, 0, 0, 0.16)',
          '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.03)', borderColor: 'rgba(0, 0, 0, 0.28)' },
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
    return {
      icon: <WarningAmber sx={{ fontSize: '1.15rem' }} />,
      sx: {
        bgcolor: 'rgba(198, 40, 40, 0.12)',
        color: '#8c1c1c',
        border: '1px solid rgba(198, 40, 40, 0.3)',
        '&:hover': { bgcolor: 'rgba(198, 40, 40, 0.2)' },
      },
    };
  };

  // An unmet compliance metric is worth flagging, not soft-pedaling as
  // neutral — red for pending, solid (not pastel) green for OK so the two
  // don't read as close variants of the same muted tone. An empty month
  // stays neutral, matching its month button, instead of a wall of red.
  // How much of a month is reported per metric: pesticides and fertilizer by field
  // (fields planted that month, on the filtered sites), water and energy by site (sites
  // with a planted field; an "All Sites" entry covers them all).
  const monthCoverage = (m) => {
    const firstDay = dayjs(new Date(yearOfKey(m), monthOfKey(m) - 1, 1));
    const siteFilter = siteIds ? new Set(siteIds) : null;
    const planted = filterByMonth(
      (idaSystemData?.fields || []).filter((f) => !siteFilter || siteFilter.has(f.siteId)),
      firstDay, firstDay.endOf('month'));
    const plantedFieldIds = new Set(planted.map((f) => f.id));
    const plantedSiteIds = new Set(planted.map((f) => f.siteId).filter((id) => id != null));
    const record = ggData?.months?.[m]?.records?.[0];
    const byField = (key) => {
      const reported = new Set();
      (record?.[key] || []).forEach((el) => (el.fields || []).forEach((f) => plantedFieldIds.has(f.id) && reported.add(f.id)));
      return { done: reported.size, total: plantedFieldIds.size };
    };
    const bySite = (key) => {
      const elements = record?.[key] || [];
      if (elements.some((el) => !el.site)) return { done: plantedSiteIds.size, total: plantedSiteIds.size };
      const reported = new Set(elements.map((el) => el.site.id).filter((id) => plantedSiteIds.has(id)));
      return { done: reported.size, total: plantedSiteIds.size };
    };
    return {
      pesticides: byField('activeIngredients'),
      fertilizer: byField('fertilizers'),
      water: bySite('waterUse'),
      energy: bySite('energyUsed'),
    };
  };
  const coverageText = (c) => (c.total ? `${c.done}/${c.total}` : undefined);

  // Coloured by coverage when there's something to cover: all reported green, some
  // reported the drafts' yellow, none red. Otherwise by the server's flag.
  const getIndicatorStyles = (statusOk, empty, coverage) => {
    if (!empty && coverage?.total && coverage.done > 0 && coverage.done < coverage.total) {
      return {
        bgcolor: 'rgba(199, 119, 0, 0.14)',
        color: '#8a5300',
        border: '1px solid rgba(199, 119, 0, 0.32)',
      };
    }
    if (coverage?.total) statusOk = coverage.done > 0;
    if (empty) {
      return {
        bgcolor: 'transparent',
        color: 'text.secondary',
        border: '1px solid rgba(0, 0, 0, 0.16)',
      };
    }
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
  const handleExport = (format) => {
    generateReport({ type: 'ida', format, params: { ...range, site: siteIds, lang } }).unwrap()
      .then(downloadReportFile)
      .catch((err) => reportFailed(err, dispatch, text));
  };

  const drawMain = () => {


    if (ggData) {
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

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: { xs: 'stretch', sm: 'center' }, flexWrap: { sm: 'wrap' }, rowGap: 2, columnGap: 1.5, width: { xs: '100%', sm: 'auto' } }}>
              {/* Filters first (sites, year, months), then the exports. On phones two
                  rows: sites + year, then the months + icon-only PDF / Excel. */}
              <Box sx={filterRowSx}>
              <TextField
                select
                value={selectedSites}
                label={text?.sites || "Sites"}
                onChange={handleSitesChange}
                size="small"
                slotProps={{
                  inputLabel: { shrink: true },
                  select: {
                    multiple: true,
                    displayEmpty: true,
                    renderValue: siteNames,
                    MenuProps: { slotProps: { paper: { style: { maxHeight: 320 } } } },
                  },
                }}
                sx={{ ...selectFilterSx, flex: { xs: '1.5 1 0', sm: 'none' }, minWidth: 0, width: { xs: 'auto', sm: 280 } }}
              >
                <MenuItem value={ALL_SITES} dense>
                  <Checkbox checked={!selectedSites.length} size="small" color="success" sx={{ p: 0.5, mr: 1 }} />
                  <ListItemText primary={text?.allSites || "All Sites"} />
                </MenuItem>
                {idaSystemData?.sites?.map((site) => (
                  <MenuItem key={site.id} value={site.id} dense>
                    <Checkbox checked={selectedSites.includes(site.id)} size="small" color="success" sx={{ p: 0.5, mr: 1 }} />
                    <ListItemText primary={site.name} />
                  </MenuItem>
                ))}
              </TextField>
              <FieldYearPager
                year={pagerYear}
                onChange={handleYearChange}
                onYearClick={() => handleYearChange(pagerYear)}
                yearClickLabel={text?.wholeYear || 'Whole year'}
                text={text}
                sx={{ ...filterItemSx, justifyContent: 'space-between', borderRadius: 1.5, color: selectedYear ? 'text.primary' : 'text.secondary' }}
              />
              </Box>
              <Box sx={filterRowSx}>
              <DatePicker
                views={['year', 'month']}
                openTo="month"
                format="MM/YY"
                label={text?.fromMonth || "From Month"}
                value={from}
                onChange={handleFromChange}
                closeOnSelect
                slotProps={{ textField: { size: 'small', sx: { ...monthPickerSx, ...filterItemSx } } }}
              />
              <DatePicker
                views={['year', 'month']}
                openTo="month"
                format="MM/YY"
                label={text?.toMonth || "To Month"}
                minDate={from}
                value={to}
                onChange={handleToChange}
                closeOnSelect
                slotProps={{ textField: { size: 'small', sx: { ...monthPickerSx, ...filterItemSx } } }}
              />
              <Tooltip title={text?.exportAsPdf || "Export as PDF"}>
                <Box component="span" sx={exportButtonWrapSx}>
                  <Button
                    variant="outlined"
                    color="secondary"
                    disableElevation
                    disabled={!ggData || reportGenerating}
                    onClick={() => handleExport('pdf')}
                    startIcon={<PictureAsPdf sx={{ fontSize: '1.4rem', color: '#B7261C' }} />}
                    aria-label={text?.exportAsPdf || "Export as PDF"}
                    sx={exportButtonSx}
                  >
                    <Box component="span" sx={exportLabelSx}>PDF</Box>
                  </Button>
                </Box>
              </Tooltip>

              <Tooltip title={text?.exportAsExcel || "Export as Excel"}>
                <Box component="span" sx={exportButtonWrapSx}>
                  <Button
                    variant="outlined"
                    color="secondary"
                    disableElevation
                    disabled={!ggData || reportGenerating}
                    onClick={() => handleExport('xlsx')}
                    startIcon={<TableChart sx={{ fontSize: '1.4rem', color: '#175C35' }} />}
                    aria-label={text?.exportAsExcel || "Export as Excel"}
                    sx={exportButtonSx}
                  >
                    <Box component="span" sx={exportLabelSx}>Excel</Box>
                  </Button>
                </Box>
              </Tooltip>
              </Box>
            </Box>
          </Box>

          {/* Core Layout Timeline Container */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '6px', flex: 1, minHeight: 0, overflowY: 'auto' }}>
            {Object.keys(ggData.months || {}).map(Number).sort((a, b) => a - b).map(m => {
              const statusConfig = getStatusConfig(m);
              const empty = isMonthEmpty(m);
              const coverage = monthCoverage(m);
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
                  onClick={() => navigate(`/ida/${yearOfKey(m)}/${monthOfKey(m) - 1}`)}
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
                  <Box sx={{ display: 'flex', flex: { xs: '1 1 0', sm: '0 0 190px' }, minWidth: 0 }}>
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
                      {monthKeyLabel(m, lang, isMobile ? 'short' : 'long')}
                    </Button>
                  </Box>

                  {/* Right Row Metrics Dashboard Block — icon-only fixed-width
                      chips on mobile so all four always fit on the same row
                      as the month button; full labels, flexed to fill the
                      row, on desktop. */}
                  <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: { xs: 0.5, sm: 1 }, flex: { xs: '0 0 auto', sm: 1 }, minWidth: 0, alignItems: 'center' }}>
                    <StatusIndicator
                      icon={<Science sx={{ fontSize: '1.05rem', flexShrink: 0, color: 'inherit' }} />}
                      label={text?.pesticides || "Pesticides"}
                      ok={ggData?.months?.[m]?.activeIngredientOk}
                      count={empty ? undefined : coverageText(coverage.pesticides)}
                      isMobile={isMobile}
                      styles={getIndicatorStyles(ggData?.months?.[m]?.activeIngredientOk, empty, coverage.pesticides)}
                    />
                    <StatusIndicator
                      icon={<Grass sx={{ fontSize: '1.05rem', flexShrink: 0, color: 'inherit' }} />}
                      label={text?.fertilizer || "Fertilizer"}
                      ok={ggData?.months?.[m]?.fertilizerOk}
                      count={empty ? undefined : coverageText(coverage.fertilizer)}
                      isMobile={isMobile}
                      styles={getIndicatorStyles(ggData?.months?.[m]?.fertilizerOk, empty, coverage.fertilizer)}
                    />
                    <StatusIndicator
                      icon={<WaterDrop sx={{ fontSize: '1.05rem', flexShrink: 0, color: 'inherit' }} />}
                      label={text?.water || "Water"}
                      ok={ggData?.months?.[m]?.waterOk}
                      count={empty ? undefined : coverageText(coverage.water)}
                      isMobile={isMobile}
                      styles={getIndicatorStyles(ggData?.months?.[m]?.waterOk, empty, coverage.water)}
                    />
                    <StatusIndicator
                      icon={<OfflineBolt sx={{ fontSize: '1.05rem', flexShrink: 0, color: 'inherit' }} />}
                      label={text?.energy || "Energy"}
                      ok={ggData?.months?.[m]?.energyOk}
                      count={empty ? undefined : coverageText(coverage.energy)}
                      isMobile={isMobile}
                      styles={getIndicatorStyles(ggData?.months?.[m]?.energyOk, empty, coverage.energy)}
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
    // Desktop: the same tinted backdrop and raised card as the Sites and Resources tabs.
    // On a phone the card fills the screen, so there's nothing around it to tint.
    <Box sx={{
      bgcolor: 'background.paper',
      p: { xs: 0, sm: '16px 24px 24px' },
      display: 'flex',
      flex: 1,
      height: 'calc(100vh - 120px)',
      boxSizing: 'border-box',
      overflow: 'hidden',
      // Tinted on desktop only, like the other pages (see pageTint).
      '@media (min-width: 600px)': { bgcolor: pageTintBg },
    }}>
      <Paper
        elevation={0}
        sx={{
          p: { xs: '4px 8px', sm: '8px 16px' },
          borderRadius: { xs: 0, sm: 2 },
          boxShadow: { xs: 0, sm: 2 },
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
