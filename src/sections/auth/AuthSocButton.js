import PropTypes from 'prop-types';

// MATERIAL - UI
import Button from '@mui/material/Button';

// ==============================|| AUTHENTICATION - CARD ||============================== //

const AuthSocButton = ({ children, ...other }) => {
  return (
    <Button
      variant="outlined"
      fullWidth
      sx={{
        bgcolor: 'secondary.100',
        borderColor: 'secondary.200',
        color: 'secondary.main',
        gap: '10px',
        '&:hover,&:focus': {
          bgcolor: 'secondary.100',
          borderColor: 'primary.main'
        }
      }}
      {...other}
    >
      {children}
    </Button>
  );
};

AuthSocButton.propTypes = {
  children: PropTypes.node
};

export default AuthSocButton;
