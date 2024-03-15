import PropTypes from 'prop-types';

// MATERIAL - UI
import { useTheme } from '@mui/material/styles';

// ASSETS
import { Clock, MinusCirlce, TickCircle } from 'iconsax-react';

// ==============================|| CHAT - AVATAR STATUS ICONS ||============================== //

const AvatarStatus = ({ status }) => {
  const theme = useTheme();

  switch (status) {
    case 'available':
      return <TickCircle size={14} variant="Bold" style={{ color: theme.palette.success.main }} />;

    case 'do_not_disturb':
      return <MinusCirlce size={14} variant="Bold" style={{ color: theme.palette.secondary.main }} />;

    case 'offline':
      return <Clock size={14} variant="Bold" style={{ color: theme.palette.warning.main }} />;

    default:
      return null;
  }
};

AvatarStatus.propTypes = {
  status: PropTypes.string
};

export default AvatarStatus;
