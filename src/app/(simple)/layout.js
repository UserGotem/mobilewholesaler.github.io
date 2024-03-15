import PropTypes from 'prop-types';

// PROJECT IMPORTS
import SimpleLayout from 'layout/SimpleLayout';

// ================================|| SIMPLE LAYOUT ||================================ //

export default function Layout({ children }) {
  return <SimpleLayout>{children}</SimpleLayout>;
}

Layout.propTypes = {
  children: PropTypes.node
};
