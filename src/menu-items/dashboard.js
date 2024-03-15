// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { Home3, HomeTrendUp, Box1 } from 'iconsax-react';

import { useGetMenu } from 'api/menu';

const icons = {
  dashboard: HomeTrendUp,
  components: Box1,
  loading: Home3
};

const loadingMenu = {
  id: 'group-dashboard-loading',
  title: <FormattedMessage id="dashboard" />,
  type: 'group',
  icon: icons.loading,
  children: [
    {
      id: 'dashboard1',
      title: <FormattedMessage id="dashboard" />,
      type: 'collapse',
      icon: icons.loading,
      children: [
        {
          id: 'default1',
          title: 'loading',
          type: 'item',
          url: '/dashboard/default',
          breadcrumbs: false
        },
        {
          id: 'analytics1',
          title: 'loading',
          type: 'item',
          url: '/dashboard/analytics',
          breadcrumbs: false
        }
      ]
    }
  ]
};

// ==============================|| MENU ITEMS - API ||============================== //

export const MenuFromAPI = () => {
  const { menu, menuLoading } = useGetMenu();

  if (menuLoading) return loadingMenu;

  const subChildrenList = (children) => {
    return children?.map((subList) => {
      return fillItem(subList);
    });
  };

  const itemList = (subList) => {
    let list = fillItem(subList);

    // if collapsible item, we need to feel its children as well
    if (subList.type === 'collapse') {
      list.children = subChildrenList(subList.children);
    }
    return list;
  };

  const childrenList = menu?.children?.map((subList) => {
    return itemList(subList);
  });

  let menuList = fillItem(menu, childrenList);
  return menuList;
};

function fillItem(item, children) {
  return {
    ...item,
    title: <FormattedMessage id={`${item?.title}`} />,
    icon: icons[item?.icon],
    ...(children && { children })
  };
}
