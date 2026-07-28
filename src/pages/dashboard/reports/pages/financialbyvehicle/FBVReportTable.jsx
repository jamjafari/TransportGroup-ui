import React from 'react';

import { AppDataGrid } from '@/components';

const FBVReportTable = ({ rows = [], loading }) => {
  const columns = [
    {
      field: 'vehicleName',
      headerName: 'نام خودرو ',
      flex: 1,
    },
    {
      field: 'fuelCost',
      headerName: ' هزینه سوخت ',
      flex: 1,
    },
    {
      field: 'expenseCost',
      headerName: 'هزینه های سرویس',
      flex: 1,
    },
    {
      field: 'totalCost',
      headerName: 'کل هزینه ها',
      flex: 1,
    },
    {
      field: 'missionCount',
      headerName: 'تعداد ماموریت',
      flex: 1,
    },
  ];
  console.log('=======', rows);
  console.log(Array.isArray(rows));
  return (
    <AppDataGrid
      rows={rows}
      columns={columns}
      loading={loading}

      initialSortField="vehicleName"
      initialSortDirection="missionCount"
      stickyHeader
    />
  );
};

export default FBVReportTable;
