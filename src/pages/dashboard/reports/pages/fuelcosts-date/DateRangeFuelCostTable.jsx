import React from 'react';

import { AppDataGrid, StatusChip } from '@/components';

import useDateRangeFuelCostReport from './hooks/useDateRangeFuelCostReport';
import { formatJalaliDate } from '@/utils';

const DateRangeFuelCostTable = () => {
  const { data, loading } = useDateRangeFuelCostReport();
  const columns = [
    {
      field: 'fuelDate',
      headerName: 'تاریخ ',
      flex: 1,
      renderCell: ({ value }) => formatJalaliDate(value),
    },
    {
      field: 'vehicleName',
      headerName: 'خودرو',
      flex: 1,
    },
    {
      field: 'driverName',
      headerName: 'نام راننده  ',
      flex: 1,
    },
    {
      field: 'unitCost',
      headerName: 'هزینه واحد  ',
      flex: 1,
    },
    {
      field: 'totalCost',
      headerName: 'مبلغ',
      flex: 1,
    },
    {
      field: 'fuelAmount',
      headerName: 'مقدار سوخت (لیتر)',
      flex: 1,
    },
    {
      field: 'stationName',
      headerName: 'نام جایگاه ',
      flex: 1,
    },
  ];

  return (
    <AppDataGrid
      toolbar
      pagination
      rows={data}
      columns={columns}
      loading={loading}
    />
  );
};

export default DateRangeFuelCostTable;
