import {
  FuelCardListPage,
  FuelCardCreatePage,
  FuelCardEditPage,
  FuelCardDetailsPage,
} from '../modules/drivers';
const fuelCardRoutes = [
  {
    path: '/fuelCards',
    element: <FuelCardListPage />,
  },

  {
    path: '/fuelCards/create',
    element: <FuelCardCreatePage />,
  },

  {
    path: '/fuelCards/edit/:id',
    element: <FuelCardEditPage />,
  },

  {
    path: '/fuelCards/:id',
    element: <FuelCardDetailsPage />,
  },
];

export default fuelCardRoutes;
