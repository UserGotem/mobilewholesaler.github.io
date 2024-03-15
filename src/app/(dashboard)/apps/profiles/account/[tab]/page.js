import PropTypes from 'prop-types';

// PROJECT IMPORT
import AccountProfile from 'views/apps/AccountProfile';

// ==============================|| PROFILE - ACCOUNT ||============================== //

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default function Page({ params }) {
  const { tab } = params;

  return <AccountProfile tab={tab} />;
}

Page.propTypes = {
  params: PropTypes.any,
  tab: PropTypes.any
};

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const response = ['basic', 'personal', 'my-account', 'password', 'role', 'settings'];

  return response.map((tab) => ({
    tab: tab
  }));
}
