// MATERIAL - UI
import { alpha, createTheme } from '@mui/material/styles';

// PROJECT IMPORTS
import ThemeOption from './theme';
import { ThemeMode } from 'config';

// ==============================|| DEFAULT THEME - PALETTE  ||============================== //

const Palette = (mode, presetColor, themeContrast) => {
  const paletteColor = ThemeOption(presetColor, mode);

  return createTheme({
    palette: {
      mode: mode,
      common: {
        black: '#000',
        white: '#fff'
      },
      ...paletteColor,
      text: {
        primary: mode === ThemeMode.DARK ? alpha(paletteColor.secondary.darker, 0.87) : paletteColor.secondary[800],
        secondary: mode === ThemeMode.DARK ? alpha(paletteColor.secondary.darker, 0.45) : paletteColor.secondary.main,
        disabled: mode === ThemeMode.DARK ? alpha(paletteColor.secondary.darker, 0.1) : paletteColor.secondary[400]
      },
      action: {
        disabled: paletteColor.secondary.light
      },
      divider: mode === ThemeMode.DARK ? alpha(paletteColor.secondary.darker, 0.05) : alpha(paletteColor.secondary.light, 0.65),
      background: {
        paper: mode === ThemeMode.DARK ? paletteColor.secondary[100] : '#fff',
        default: themeContrast && mode !== ThemeMode.DARK ? '#fff' : paletteColor.secondary.lighter
      }
    }
  });
};

export default Palette;
