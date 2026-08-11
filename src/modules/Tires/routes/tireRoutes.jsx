import {
  TireListPage,
  TireCreatePage,
  TireEditPage,
  TireDetailsPage,
} from '../modules/tires';
const tireRoutes = [
  {
    path: '/tires',
    element: <TireListPage />,
  },

  {
    path: '/tires/create',
    element: <TireCreatePage />,
  },

  {
    path: '/tires/edit/:id',
    element: <TireEditPage />,
  },

  {
    path: '/tires/:id',
    element: <TireDetailsPage />,
  },
];

export default tireRoutes;
