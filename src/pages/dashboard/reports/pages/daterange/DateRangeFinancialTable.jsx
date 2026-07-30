import React from 'react';

import { AppDataGrid, StatusChip } from '@/components';

import useDateRangeFinancialReport from './hooks/useDateRangeFinancialReport';

const DateRangeFinancialTable = () => {
  const { data, loading } = useDateRangeFinancialReport();
  const columns = [
    {
      field: 'expenseDate',
      headerName: 'تاریخ ',
      flex: 1,
    },
    {
      field: 'expenseType',
      headerName: 'نوع هزینه ',
      flex: 1,
    },
    {
      field: 'vehicleName',
      headerName: 'خودرو',
      flex: 1,
    },
    {
      field: 'amount',
      headerName: 'مبلغ',
      flex: 1,
    },
    {
      field: 'description',
      headerName: 'توضیحات',
      flex: 1,
    },
    {
      field: 'status',
      headerName: 'وضعیت',
      renderCell: ({ value }) => <StatusChip status={value} />,
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

export default DateRangeFinancialTable;
