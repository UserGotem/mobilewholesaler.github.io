import PropTypes from 'prop-types';

// MATERIAL - UI
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

// PROJECT IMPORTS
import MainCard from 'components/MainCard';

// ASSETS
import { ArrowRight, ArrowUp } from 'iconsax-react';

// ==============================|| STATISTICS - ECOMMERCE CARD  ||============================== //

const AnalyticEcommerce = ({ color = 'primary', title, count, percentage, isLoss, extra }) => (
  <MainCard contentSX={{ p: 2.25 }}>
    <Stack spacing={0.5}>
      <Typography variant="h6" color="textSecondary">
        {title}
      </Typography>
      <Grid container alignItems="center">
        <Grid item>
          <Typography variant="h4" color="inherit">
            {count}
          </Typography>
        </Grid>
        {percentage && (
          <Grid item>
            <Chip
              variant="combined"
              color={color}
              icon={
                <>
                  {!isLoss && <ArrowUp style={{ transform: 'rotate(45deg)' }} />}
                  {isLoss && <ArrowRight style={{ transform: 'rotate(45deg)' }} />}
                </>
              }
              label={`${percentage}%`}
              sx={{ ml: 1.25, pl: 1, borderRadius: 1 }}
              size="small"
            />
          </Grid>
        )}
      </Grid>
    </Stack>
    <Box sx={{ pt: 2.25 }}>
      <Typography variant="caption" color="textSecondary">
        You made an extra{' '}
        <Typography component="span" variant="caption" sx={{ color: `${color || 'primary'}.main` }}>
          {extra}
        </Typography>{' '}
        this year
      </Typography>
    </Box>
  </MainCard>
);

AnalyticEcommerce.propTypes = {
  title: PropTypes.string,
  count: PropTypes.string,
  percentage: PropTypes.number,
  isLoss: PropTypes.bool,
  color: PropTypes.string,
  extra: PropTypes.string
};

export default AnalyticEcommerce;
