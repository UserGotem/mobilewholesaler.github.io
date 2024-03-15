import PropTypes from 'prop-types';

// MATERIAL - UI
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// PROJECT IMPORTS
import MainCard from 'components/MainCard';

// ASSETS
import { TrendDown, TrendUp } from 'iconsax-react';

// ==============================|| STATISTICS - ECOMMERCE CARD  ||============================== //

const AnalyticsDataCard = ({ color = 'primary', title, count, percentage, isLoss, children }) => (
  <MainCard content={false}>
    <Box sx={{ p: 2.25 }}>
      <Stack spacing={0.5}>
        <Typography variant="h6" color="textSecondary">
          {title}
        </Typography>
        <Stack direction="row" alignItems="center">
          <Typography variant="h4" color="inherit">
            {count}
          </Typography>
          {percentage && (
            <Chip
              variant="combined"
              color={color}
              icon={
                <>
                  {!isLoss && <TrendUp variant="Bold" />}
                  {isLoss && <TrendDown variant="Bold" />}
                </>
              }
              label={`${percentage}%`}
              sx={{ ml: 1.25, pl: 0.5, borderRadius: 1 }}
              size="small"
            />
          )}
        </Stack>
      </Stack>
    </Box>
    {children}
  </MainCard>
);

AnalyticsDataCard.propTypes = {
  title: PropTypes.string,
  count: PropTypes.string,
  percentage: PropTypes.number,
  isLoss: PropTypes.bool,
  color: PropTypes.string,
  children: PropTypes.node
};

export default AnalyticsDataCard;
