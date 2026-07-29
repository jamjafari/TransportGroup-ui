import React from 'react';

import { AppDataGrid, StatusChip } from '@/components';

import useFinancialReport from './hooks/useFinancialReport';

const FinancialReportTable = ({ rows = [], loading }) => {
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

export default FinancialReportTable;
