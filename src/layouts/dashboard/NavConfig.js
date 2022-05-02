// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'Contas a Pagar',
    path: '/dashboard/bills-to-pay',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'Contas a Receber',
    path: '/dashboard/bills-to-receive',
    icon: getIcon('eva:shopping-bag-fill'),
  }
];

export default navConfig;
