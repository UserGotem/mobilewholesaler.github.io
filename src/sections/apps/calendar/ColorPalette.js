import PropTypes from 'prop-types';

// MATERIAL - UI
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import Tooltip from '@mui/material/Tooltip';

// PROJECT IMPORTS
import Avatar from 'components/@extended/Avatar';
import { ThemeMode } from 'config';

// ASSETS
import { TickSquare } from 'iconsax-react';

// ==============================|| CALENDAR - COLOR PALETTE ||============================== //

const ColorPalette = ({ color, value, isLight }) => {
  const theme = useTheme();

  return (
    <Tooltip title={color}>
      <FormControlLabel
        value={value}
        label=""
        control={
          <Radio
            icon={
              <Avatar variant="rounded" type="combined" size="xs" sx={{ backgroundColor: color, borderColor: 'divider' }}>
                <Box sx={{ display: 'none' }} />
              </Avatar>
            }
            checkedIcon={
              <Avatar
                variant="rounded"
                type="combined"
                size="xs"
                sx={{
                  backgroundColor: color,
                  color: isLight ? 'secondary.dark' : 'secondary.lighter',
                  ...(theme.palette.mode === ThemeMode.DARK && {
                    color: 'secondary.lighter'
                  }),
                  borderColor: 'divider',
                  '& svg': { width: 20, height: 20 }
                }}
              >
                <TickSquare variant="Bold" />
              </Avatar>
            }
            sx={{ '&:hover': { bgcolor: 'transparent' } }}
          />
        }
      />
    </Tooltip>
  );
};

ColorPalette.propTypes = {
  color: PropTypes.string,
  value: PropTypes.string,
  isLight: PropTypes.bool
};

export default ColorPalette;
