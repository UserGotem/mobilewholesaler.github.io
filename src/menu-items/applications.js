// THIRD - PARTY
import { FormattedMessage } from 'react-intl';

// ASSETS
import { KyberNetwork, Messages2, Calendar1, Kanban, Profile2User, Bill, UserSquare, ShoppingBag } from 'iconsax-react';

// ICONS
const icons = {
  applications: KyberNetwork,
  chat: Messages2,
  calendar: Calendar1,
  kanban: Kanban,
  customer: Profile2User,
  invoice: Bill,
  profile: UserSquare,
  ecommerce: ShoppingBag
};

// ==============================|| MENU ITEMS - APPLICATIONS ||============================== //

const applications = {
  id: 'group-applications',
  title: <FormattedMessage id="applications" />,
  icon: icons.applications,
  type: 'group',
  children: [
    {
      id: 'chat',
      title: <FormattedMessage id="chat" />,
      type: 'item',
      url: '/apps/chat',
      icon: icons.chat,
      breadcrumbs: false
    },
    {
      id: 'calendar',
      title: <FormattedMessage id="calendar" />,
      type: 'item',
      url: '/apps/calendar',
      icon: icons.calendar
    },
    {
      id: 'kanban',
      title: <FormattedMessage id="kanban" />,
      type: 'item',
      icon: icons.kanban,
      url: '/apps/kanban/board',
      breadcrumbs: false
    },
    {
      id: 'customer',
      title: <FormattedMessage id="customer" />,
      type: 'collapse',
      icon: icons.customer,
      children: [
        {
          id: 'customer-list',
          title: <FormattedMessage id="list" />,
          type: 'item',
          url: '/apps/customer/customer-list'
        },
        {
          id: 'customer-card',
          title: <FormattedMessage id="cards" />,
          type: 'item',
          url: '/apps/customer/customer-card'
        }
      ]
    },
    {
      id: 'invoice',
      title: <FormattedMessage id="invoice" />,
      type: 'collapse',
      icon: icons.invoice,
      children: [
        {
          id: 'invoice-dashboard',
          title: <FormattedMessage id="dashboard" />,
          type: 'item',
          url: '/apps/invoice/dashboard',
          breadcrumbs: false
        },
        {
          id: 'invoice-create',
          title: <FormattedMessage id="create" />,
          type: 'item',
          url: '/apps/invoice/create',
          breadcrumbs: false
        },
        {
          id: 'invoice-details',
          title: <FormattedMessage id="details" />,
          type: 'item',
          url: '/apps/invoice/details/1',
          breadcrumbs: false
        },
        {
          id: 'invoice-list',
          title: <FormattedMessage id="list" />,
          type: 'item',
          url: '/apps/invoice/list',
          breadcrumbs: false
        },
        {
          id: 'invoice-edit',
          title: <FormattedMessage id="edit" />,
          type: 'item',
          url: '/apps/invoice/edit/1',
          breadcrumbs: false
        }
      ]
    },
    {
      id: 'profile',
      title: <FormattedMessage id="profile" />,
      type: 'collapse',
      icon: icons.profile,
      children: [
        {
          id: 'user-profile',
          title: <FormattedMessage id="user-profile" />,
          type: 'item',
          url: '/apps/profiles/user/personal',
          breadcrumbs: false
        },
        {
          id: 'account-profile',
          title: <FormattedMessage id="account-profile" />,
          type: 'item',
          url: '/apps/profiles/account/basic',
          breadcrumbs: false
        }
      ]
    },

    {
      id: 'e-commerce',
      title: <FormattedMessage id="e-commerce" />,
      type: 'collapse',
      icon: icons.ecommerce,
      children: [
        {
          id: 'products',
          title: <FormattedMessage id="products" />,
          type: 'item',
          url: '/apps/e-commerce/products'
        },
        {
          id: 'product-details',
          title: <FormattedMessage id="product-details" />,
          type: 'item',
          url: '/apps/e-commerce/product-details/1',
          breadcrumbs: false
        },
        {
          id: 'product-list',
          title: <FormattedMessage id="product-list" />,
          type: 'item',
          url: '/apps/e-commerce/product-list'
        },
        {
          id: 'add-new-product',
          title: <FormattedMessage id="add-new-product" />,
          type: 'item',
          url: '/apps/e-commerce/add-new-product'
        },
        {
          id: 'checkout',
          title: <FormattedMessage id="checkout" />,
          type: 'item',
          url: '/apps/e-commerce/checkout'
        }
      ]
    }
  ]
};

export default applications;
