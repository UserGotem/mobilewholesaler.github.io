import PropTypes from 'prop-types';

// PROJECT IMPORTS
import ComponentLayout from 'layout/ComponentLayout';

// ==============================|| COMPONENT - LAYOUT ||============================== //

export default function Layout({ children }) {
  return <ComponentLayout>{children}</ComponentLayout>;
}

Layout.propTypes = {
  children: PropTypes.node
};
