'use client';

import PropTypes from 'prop-types';
import { lazy } from 'react';

// MATERIAL - UI
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';

// PROJECT IMPORTS
import LayoutContent from './LayoutContent';
import Loader from 'components/Loader';
import { useGetMenuMaster } from 'api/menu';

const Header = lazy(() => import('./Header'));

// ==============================|| COMPONENT LAYOUT ||============================== //

const ComponentLayout = ({ children }) => {
  const { menuMasterLoading } = useGetMenuMaster();
  if (menuMasterLoading) return <Loader />;

  return (
    <Container maxWidth="xl" sx={{ px: { xs: 0, sm: 2 } }}>
      <Header />
      <Toolbar sx={{ mt: 2 }} />
      <LayoutContent>{children}</LayoutContent>
    </Container>
  );
};

ComponentLayout.propTypes = {
  children: PropTypes.node
};

export default ComponentLayout;
