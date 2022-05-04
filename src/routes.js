import { useRoutes } from 'react-router-dom';
import DashboardLayout from './layouts/dashboard';


import AccountsPayables from './pages/AccountsPayables';
import CreatePayables from './pages/AccountsPayables/create';


import AccountsReceivables from './pages/AccountsReceivables';
import CreateReceivables from './pages/AccountsReceivables/create';
import EditReceivables from './pages/AccountsReceivables/edit';

import DashboardApp from './pages/DashboardApp';

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: <DashboardApp /> },
        { path: 'accounts-payables', element: <AccountsPayables /> },
        { path: 'accounts-payables/create', element: <CreatePayables /> },
        { path: 'accounts-receivables', element: <AccountsReceivables /> },
        { path: 'accounts-receivables/create', element: <CreateReceivables /> },
        { path: 'accounts-receivables/edit/:id', element: <EditReceivables /> },
      ],
    },
    // {
    //   path: '/',
    //   element: <LogoOnlyLayout />,
    //   children: [
    //     { path: '/', element: <Navigate to="/dashboard/app" /> },
    //     { path: '404', element: <NotFound /> },
    //     { path: '*', element: <Navigate to="/404" /> },
    //   ],
    // },
    // { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
