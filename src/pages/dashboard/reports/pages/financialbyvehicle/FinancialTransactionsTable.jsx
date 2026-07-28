import React from 'react';

import { AppDataGrid } from '@/components';

const FinancialTransactionsTable = ({ rows = [], loading }) => {
  const columns = [
    {
      field: 'expenseDate',
      headerName: 'تاریخ ',
      width: 180,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'expenseType',
      headerName: 'نوع هزینه ',
      width: 180,
      align: 'left',
      headerAlign: 'right',
    },
    {
      field: 'vehicleName',
      headerName: 'خودرو',
      width: 180,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'amount',
      headerName: 'مبلغ',
      width: 280,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'description',
      headerName: 'توضیحات',
      width: 280,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'status',
      headerName: 'وضعیت',
      type: 'status',
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

export default FinancialTransactionsTable;
