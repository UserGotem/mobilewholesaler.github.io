'use client';

import PropTypes from 'prop-types';
import { useEffect } from 'react';

// MATERIAL - UI
import { styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';

// PROJRCT - IMPORTS
import Drawer from './Drawer';
import { DRAWER_WIDTH } from 'config';
import { handlerComponentDrawer, useGetMenuMaster } from 'api/menu';

// COMPONENT CONTENT
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  minHeight: `calc(100vh - 180px)`,
  width: `calc(100% - ${DRAWER_WIDTH}px)`,
  flexGrow: 1,
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  [theme.breakpoints.down('md')]: {
    paddingLeft: 0
  },
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

// ==============================|| COMPONENTS LAYOUT ||============================== //

const LayoutContent = ({ children }) => {
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));

  const { menuMaster } = useGetMenuMaster();

  useEffect(() => {
    handlerComponentDrawer(!matchDownMd);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchDownMd]);

  return (
    <Box sx={{ display: 'flex', pt: menuMaster.isComponentDrawerOpened ? { xs: 0, md: 2.5 } : 0 }}>
      <Drawer />
      <Main theme={theme} open={menuMaster.isComponentDrawerOpened}>
        {children}
      </Main>
    </Box>
  );
};

LayoutContent.propTypes = {
  children: PropTypes.node
};

export default LayoutContent;
