// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'Dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'Contas a Pagar',
    path: '/dashboard/accounts-payables',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'Contas a Receber',
    path: '/dashboard/accounts-receivables',
    icon: getIcon('eva:shopping-bag-fill'),
  }
];

export default navConfig;
