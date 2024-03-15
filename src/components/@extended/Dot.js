'use client';

import PropTypes from 'prop-types';

// MATERIAL - UI
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

// PROJECT IMPORTS
import getColors from 'utils/getColors';

// ==============================|| DOT - EXTENDED ||============================== //

const Dot = ({ color, size, variant, sx = {}, componentDiv }) => {
  const theme = useTheme();
  const colors = getColors(theme, color || 'primary');
  const { main } = colors;

  return (
    <Box
      component={componentDiv ? 'div' : 'span'}
      sx={{
        width: size || 8,
        height: size || 8,
        borderRadius: '50%',
        bgcolor: variant === 'outlined' ? '' : main,
        ...(variant === 'outlined' && {
          border: `1px solid ${main}`
        }),
        ...sx
      }}
    />
  );
};

Dot.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  variant: PropTypes.string,
  componentDiv: PropTypes.bool,
  sx: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};

export default Dot;
