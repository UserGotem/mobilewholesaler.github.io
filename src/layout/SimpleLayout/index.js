'use client';

import PropTypes from 'prop-types';
import { lazy } from 'react';

// NEXT
import { usePathname } from 'next/navigation';

// MATERIAL - UI
const Header = lazy(() => import('./Header'));
const FooterBlock = lazy(() => import('./FooterBlock'));

// PROJECT IMPORTS
import Loader from 'components/Loader';
import { useGetMenuMaster } from 'api/menu';

// ==============================|| LAYOUTS - STRUCTURE ||============================== //

const SimpleLayout = ({ children }) => {
  const { menuMasterLoading } = useGetMenuMaster();

  const pathname = usePathname();
  const layout = pathname === 'landing' || '/' ? 'landing' : 'simple';

  if (menuMasterLoading) return <Loader />;

  return (
    <>
      <Header />
      {children}
      <FooterBlock isFull={layout === 'landing'} />
    </>
  );
};

SimpleLayout.propTypes = {
  children: PropTypes.node
};
export default SimpleLayout;
