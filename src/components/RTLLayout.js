import PropTypes from 'prop-types';
import { useEffect } from 'react';

// MATERIAL - UI
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

// THIRD - PARTY
import rtlPlugin from 'stylis-plugin-rtl';

// PROJECT IMPORTS
import useConfig from 'hooks/useConfig';
import { ThemeDirection } from 'config';

// ==============================|| RTL LAYOUT ||============================== //

const RTLLayout = ({ children }) => {
  const { themeDirection } = useConfig();

  useEffect(() => {
    document.dir = themeDirection;
  }, [themeDirection]);

  const cacheRtl = createCache({
    key: themeDirection === ThemeDirection.RTL ? 'rtl' : 'css',
    prepend: true,
    stylisPlugins: themeDirection === ThemeDirection.RTL ? [rtlPlugin] : []
  });

  return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
};

RTLLayout.propTypes = {
  children: PropTypes.node
};

export default RTLLayout;
