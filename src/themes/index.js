import PropTypes from 'prop-types';
import { useMemo } from 'react';

// MATERIAL - UI
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';

// PROJECT IMPORTS
import Palette from './palette';
import Typography from './typography';
import CustomShadows from './shadows';
import componentsOverride from './overrides';
import { NextAppDirEmotionCacheProvider } from './emotionCache';

import { HEADER_HEIGHT } from 'config';
import useConfig from 'hooks/useConfig';
import getWindowScheme from 'utils/getWindowScheme';
import { ThemeMode } from 'config';

// ==============================|| DEFAULT THEME - MAIN  ||============================== //

export default function ThemeCustomization({ children }) {
  const { themeDirection, mode, presetColor, fontFamily, themeContrast } = useConfig();
  let themeMode = mode;
  if (themeMode === ThemeMode.AUTO) {
    const autoMode = getWindowScheme();
    if (autoMode) {
      themeMode = ThemeMode.DARK;
    } else {
      themeMode = ThemeMode.LIGHT;
    }
  }

  const theme = useMemo(() => Palette(themeMode, presetColor, themeContrast), [themeMode, presetColor, themeContrast]);

  const themeTypography = useMemo(
    () => Typography(themeMode, fontFamily, theme),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [themeMode, fontFamily]
  );
  const themeCustomShadows = useMemo(() => CustomShadows(theme), [theme]);

  const themeOptions = useMemo(
    () => ({
      breakpoints: {
        values: {
          xs: 0,
          sm: 768,
          md: 1024,
          lg: 1266,
          xl: 1440
        }
      },
      direction: themeDirection,
      mixins: {
        toolbar: {
          minHeight: HEADER_HEIGHT,
          paddingTop: 8,
          paddingBottom: 8
        }
      },
      palette: theme.palette,
      shape: {
        borderRadius: 8
      },
      customShadows: themeCustomShadows,
      typography: themeTypography
    }),
    [themeDirection, theme, themeTypography, themeCustomShadows]
  );

  const themes = createTheme(themeOptions);
  themes.components = componentsOverride(themes);

  return (
    <StyledEngineProvider injectFirst>
      <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
        <ThemeProvider theme={themes}>
          <CssBaseline enableColorScheme />
          {children}
        </ThemeProvider>
      </NextAppDirEmotionCacheProvider>
    </StyledEngineProvider>
  );
}

ThemeCustomization.propTypes = {
  children: PropTypes.node
};
