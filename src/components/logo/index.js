import PropTypes from 'prop-types';

// NEXT
import Link from 'next/link';

// MATERIAL - UI
import ButtonBase from '@mui/material/ButtonBase';

// PROJECT IMPORTS
import Logo from './LogoMain';
import LogoIcon from './LogoIcon';
import { APP_DEFAULT_PATH } from 'config';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = ({ reverse, isIcon, sx, to }) => (
  <ButtonBase disableRipple component={Link} href={!to ? APP_DEFAULT_PATH : to} sx={sx}>
    {isIcon ? <LogoIcon /> : <Logo reverse={reverse} />}
  </ButtonBase>
);

LogoSection.propTypes = {
  reverse: PropTypes.bool,
  isIcon: PropTypes.bool,
  sx: PropTypes.object,
  to: PropTypes.string
};

export default LogoSection;
