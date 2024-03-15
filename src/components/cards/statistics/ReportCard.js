import PropTypes from 'prop-types';

// MATERIAL - UI
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// PROJECT IMPORTS
import MainCard from 'components/MainCard';

// ==============================|| STATISTICS - REPORT CARD ||============================== //

const ReportCard = ({ primary, secondary, iconPrimary, color }) => {
  const IconPrimary = iconPrimary;
  const primaryIcon = iconPrimary ? <IconPrimary size={44} /> : null;

  return (
    <MainCard>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Stack spacing={0.25}>
            <Typography variant="h3">{primary}</Typography>
            <Typography variant="body1" color="text.secondary">
              {secondary}
            </Typography>
          </Stack>
        </Grid>
        <Grid item sx={{ color: color }}>
          {primaryIcon}
        </Grid>
      </Grid>
    </MainCard>
  );
};

ReportCard.propTypes = {
  primary: PropTypes.string,
  secondary: PropTypes.string,
  iconPrimary: PropTypes.object,
  color: PropTypes.string
};

export default ReportCard;
