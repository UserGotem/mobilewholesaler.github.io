// MATERIAL - UI
import Box from '@mui/material/Box';

// PROJECT IMPORTS
import getColors from 'utils/getColors';
import { ThemeMode } from 'config';

// ==============================|| RADIO - COLORS ||============================== //

function getColorStyle({ color, theme }) {
  const colors = getColors(theme, color);
  const { lighter, main, dark } = colors;

  return {
    '& .dot': {
      backgroundColor: main
    },
    '&:hover': {
      backgroundColor: color === 'secondary' ? lighter : lighter + 50,
      ...(theme.palette.mode === ThemeMode.DARK && {
        backgroundColor: color === 'secondary' ? lighter + 50 : lighter + 20
      })
    },
    '&.Mui-focusVisible': {
      outline: `2px solid ${dark}`,
      outlineOffset: -4
    }
  };
}

// ==============================|| CHECKBOX - SIZE STYLE ||============================== //

function getSizeStyle(size) {
  switch (size) {
    case 'small':
      return { size: 16, dotSize: 8, position: 3 };
    case 'large':
      return { size: 24, dotSize: 12, position: 5 };
    case 'medium':
    default:
      return { size: 20, dotSize: 10, position: 4 };
  }
}

// ==============================|| CHECKBOX - STYLE ||============================== //

function radioStyle(size) {
  const sizes = getSizeStyle(size);

  return {
    '& .icon': {
      width: sizes.size,
      height: sizes.size,
      '& .dot': {
        width: sizes.dotSize,
        height: sizes.dotSize,
        top: sizes.position,
        left: sizes.position
      }
    }
  };
}

// ==============================|| OVERRIDES - RADIO ||============================== //

export default function Radio(theme) {
  const { palette } = theme;

  return {
    MuiRadio: {
      defaultProps: {
        className: 'size-medium',
        icon: <Box className="icon" sx={{ width: 16, height: 16, border: '1px solid', borderColor: 'inherit', borderRadius: '50%' }} />,
        checkedIcon: (
          <Box
            className="icon"
            sx={{
              width: 16,
              height: 16,
              border: '1px solid',
              borderColor: 'inherit',
              borderRadius: '50%',
              position: 'relative'
            }}
          >
            <Box
              className="dot"
              sx={{
                width: 8,
                height: 8,
                backgroundColor: 'inherit',
                borderRadius: '50%',
                position: 'absolute',
                top: 3,
                left: 3
              }}
            />
          </Box>
        )
      },
      styleOverrides: {
        root: {
          color: palette.secondary[300],
          '&.size-small': {
            ...radioStyle('small')
          },
          '&.size-medium': {
            ...radioStyle('medium')
          },
          '&.size-large': {
            ...radioStyle('large')
          }
        },
        colorPrimary: getColorStyle({ color: 'primary', theme }),
        colorSecondary: getColorStyle({ color: 'secondary', theme }),
        colorSuccess: getColorStyle({ color: 'success', theme }),
        colorWarning: getColorStyle({ color: 'warning', theme }),
        colorInfo: getColorStyle({ color: 'info', theme }),
        colorError: getColorStyle({ color: 'error', theme })
      }
    }
  };
}
