import PropTypes from 'prop-types';

// PROJECT IMPORTS
import DashboardLayout from 'layout/DashboardLayout';
import AuthGuard from 'utils/route-guard/AuthGuard';

// ==============================|| DASHBOARD LAYOUT ||============================== //

export default function Layout({ children }) {
  return (
    <AuthGuard>
      <DashboardLayout>{children}</DashboardLayout>
    </AuthGuard>
  );
}

Layout.propTypes = {
  children: PropTypes.node
};
