import {
  VendorListPage,
  VendorCreatePage,
  VendorEditPage,
  VendorDetailsPage,
} from '../modules/vendors';
const vendorRoutes = [
  {
    path: '/vendors',
    element: <VendorListPage />,
  },

  {
    path: '/vendors/create',
    element: <VendorCreatePage />,
  },

  {
    path: '/vendors/edit/:id',
    element: <VendorEditPage />,
  },

  {
    path: '/vendors/:id',
    element: <VendorDetailsPage />,
  },
];

export default vendorRoutes;
