import PropTypes from 'prop-types';

// ================================|| BLANK LAYOUT ||================================ //

export default function Layout({ children }) {
  return <>{children}</>;
}

Layout.propTypes = {
  children: PropTypes.node
};
