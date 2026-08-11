import {
  FuelRecordListPage,
  FuelRecordCreatePage,
  FuelRecordEditPage,
  // FuelRecordDetailsPage,
} from '@/modules';

const fuelRecordRoutes = [
  {
    path: '/fleet/fuelRecords',
    element: <FuelRecordListPage />,
  },

  {
    path: '/fleet/fuelRecords/create',
    element: <FuelRecordCreatePage />,
  },

  {
    path: '/fleet/fuelRecords/edit/:id',
    element: <FuelRecordEditPage />,
  },

  // {
  //   path: '/fleet/FuelRecords/:id',
  //   element: <FuelRecordDetailsPage />,
  // },
];

export default fuelRecordRoutes;
