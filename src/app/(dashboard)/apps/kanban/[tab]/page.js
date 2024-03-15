import PropTypes from 'prop-types';

// PROJECT IMPORT
import KanbanApp from 'views/apps/Kanban';

// ==============================|| APPLICATION - KANBAN ||============================== //

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default function Page({ params }) {
  const { tab } = params;

  return <KanbanApp tab={tab} />;
}

Page.propTypes = {
  params: PropTypes.any,
  tab: PropTypes.any
};

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const response = ['board', 'backlogs'];

  return response.map((tab) => ({
    tab: tab
  }));
}
