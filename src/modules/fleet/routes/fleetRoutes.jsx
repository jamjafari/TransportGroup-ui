import {
  VehicleListPage,
  VehicleCreatePage,
  VehicleEditPage,
  VehicleDetailsPage,
} from '../modules/fleet/vehicles';

const fleetRoutes = [
  {
    path: '/fleet/vehicles',
    element: <VehicleListPage />,
  },

  {
    path: '/fleet/vehicles/create',
    element: <VehicleCreatePage />,
  },

  {
    path: '/fleet/vehicles/edit/:id',
    element: <VehicleEditPage />,
  },

  {
    path: '/fleet/vehicles/:id',
    element: <VehicleDetailsPage />,
  },
];

export default fleetRoutes;
