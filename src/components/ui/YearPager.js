import { Box, ButtonBase, IconButton, Tooltip, Typography } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

// Year pager shared by the site's fields page and the IDA dashboard.
// The arrows mirror in RTL, where the previous year sits on the right.
const pagerArrowSx = { transform: (theme) => (theme.direction === 'rtl' ? 'scaleX(-1)' : 'none') };

const yearSx = { fontWeight: 700, minWidth: 48, textAlign: 'center', fontVariantNumeric: 'tabular-nums' };

// onYearClick (optional) makes the year itself a button, e.g. to reset to the whole year.
export const FieldYearPager = ({ year, onChange, onYearClick, yearClickLabel, text, sx }) => (
    <Box
        role="group"
        aria-label={text?.year || 'Year'}
        sx={{
            display: 'inline-flex', alignItems: 'center', height: 40, borderRadius: 1,
            border: 1, borderColor: 'rgba(0, 0, 0, 0.23)', bgcolor: 'background.paper', ...sx,
        }}
    >
        <Tooltip title={text?.previousYear || 'Previous year'}>
            <IconButton size="small" aria-label={text?.previousYear || 'Previous year'} onClick={() => onChange(year - 1)}>
                <ChevronLeft sx={pagerArrowSx} />
            </IconButton>
        </Tooltip>
        {onYearClick ? (
            <Tooltip title={yearClickLabel || ''}>
                <ButtonBase onClick={onYearClick} aria-label={yearClickLabel} sx={{ borderRadius: 1, px: 0.5, height: 32 }}>
                    <Typography sx={yearSx}>{year}</Typography>
                </ButtonBase>
            </Tooltip>
        ) : (
            <Typography sx={yearSx}>{year}</Typography>
        )}
        <Tooltip title={text?.nextYear || 'Next year'}>
            <IconButton size="small" aria-label={text?.nextYear || 'Next year'} onClick={() => onChange(year + 1)}>
                <ChevronRight sx={pagerArrowSx} />
            </IconButton>
        </Tooltip>
    </Box>
);
