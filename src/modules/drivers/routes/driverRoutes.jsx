import {
  DriverListPage,
  DriverCreatePage,
  DriverEditPage,
  DriverDetailsPage,
} from '../modules/drivers';
const driverRoutes = [
  {
    path: '/drivers',
    element: <DriverListPage />,
  },

  {
    path: '/drivers/create',
    element: <DriverCreatePage />,
  },

  {
    path: '/drivers/edit/:id',
    element: <DriverEditPage />,
  },

  {
    path: '/drivers/:id',
    element: <DriverDetailsPage />,
  },
];

export default driverRoutes;
