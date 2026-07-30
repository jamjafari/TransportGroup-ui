import React, { memo } from 'react';

import { StatusChip, AppDataGrid } from '@/components';

const columns = [
  {
    field: 'plateNumber',

    headerName: 'پلاک',

    flex: 1,
  },

  {
    field: 'vehicleName',

    headerName: 'نام خودرو',

    flex: 1.5,
  },

  {
    field: 'serviceType',

    headerName: 'نوع سرویس',

    flex: 1.5,
  },

  {
    field: 'serviceDate',

    headerName: 'تاریخ سرویس',

    flex: 1.2,
  },

  {
    field: 'odometerKm',

    headerName: 'کیلومتر سرویس',

    flex: 1,

    type: 'number',
  },

  {
    field: 'nextServiceKm',

    headerName: 'کیلومتر بعدی',

    flex: 1,

    type: 'number',
  },

  {
    field: 'remainingKm',

    headerName: 'باقی مانده',

    flex: 1,

    type: 'number',
  },

  {
    field: 'amount',

    headerName: 'هزینه',

    flex: 1.2,

    renderCell: ({ value }) => value?.toLocaleString('en-US'),
  },

  {
    field: 'status',

    headerName: 'وضعیت',

    flex: 1,

    renderCell: ({ value }) => <StatusChip status={value} />,
  },
];

const ServiceReportTable = ({ rows = [], loading }) => {
  return (
    <AppDataGrid
      rows={rows}
      columns={columns}
      loading={loading}

      toolbar
      pagination
    />
  );
};

export default memo(ServiceReportTable);
