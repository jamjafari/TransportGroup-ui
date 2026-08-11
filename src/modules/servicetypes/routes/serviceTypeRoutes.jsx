import {
  ServiceTypeListPage,
  ServiceTypeCreatePage,
  ServiceTypeEditPage,
  ServiceTypeDetailsPage,
} from '../modules/serviceTypes';
const serviceTypeRoutes = [
  {
    path: '/serviceTypes',
    element: <ServiceTypeListPage />,
  },

  {
    path: '/serviceTypes/create',
    element: <ServiceTypeCreatePage />,
  },

  {
    path: '/serviceTypes/edit/:id',
    element: <ServiceTypeEditPage />,
  },

  {
    path: '/serviceTypes/:id',
    element: <ServiceTypeDetailsPage />,
  },
];

export default serviceTypeRoutes;
