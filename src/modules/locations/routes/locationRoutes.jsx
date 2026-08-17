import {
  LocationListPage,
  LocationCreatePage,
  LocationEditPage,
  LocationDetailsPage,
} from '../modules/locations';
const locationRoutes = [
  {
    path: '/locations',
    element: <LocationListPage />,
  },

  {
    path: '/locations/create',
    element: <LocationCreatePage />,
  },

  {
    path: '/locations/edit/:id',
    element: <LocationEditPage />,
  },

  {
    path: '/locations/:id',
    element: <LocationDetailsPage />,
  },
];

export default locationRoutes;
