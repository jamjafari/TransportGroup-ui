import React from 'react';

import { AppDataGrid } from '@/components';

const FuelCostReportTable = ({ rows = [], loading }) => {
  const columns = [
    {
      field: 'vehicleName',
      headerName: 'خودرو',
      width: 180,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'fuelDate',
      headerName: 'تاریخ سوخت گیری ',
      width: 180,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'unitCost',
      headerName: ' واحد پرداخت ',
      width: 180,
      align: 'left',
      headerAlign: 'right',
    },

    {
      field: 'fuelAmount',
      headerName: 'مقدار سوختگیری(لیتر)',
      width: 280,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'totalCost',
      headerName: 'هزینه پرداختی',
      width: 280,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'odometerKM',
      headerName: 'کیلوتر در سوختگیری',
      type: 'status',
      width: 280,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'stationName',
      headerName: 'جایگاه',
      width: 280,
      align: 'center',
      headerAlign: 'center',
    },
  ];
  console.log('=======', rows);
  console.log(Array.isArray(rows));
  return (
    <AppDataGrid
      rows={rows}
      columns={columns}
      loading={loading}
      pagination
      initialPageSize={10}
      filterable
      rowSelection
      toolbar
      sortable
      initialSortField="expenseDate"
      initialSortDirection="desc"
      stickyHeader
    />
  );
};

export default FuelCostReportTable;
