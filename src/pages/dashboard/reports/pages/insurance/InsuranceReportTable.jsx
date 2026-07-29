import React from 'react';

import { AppDataGrid, StatusChip } from '@/components';

const InsuranceReportTable = ({ rows = [], loading }) => {
  const columns = [
    {
      field: 'plateNumber',
      headerName: 'پلاک',
      width: 120,
    },
    {
      field: 'vehicleName',
      headerName: 'خودرو',
      width: 140,
    },
    {
      field: 'insuranceType',
      headerName: 'نوع بیمه',
      width: 140,
    },
    {
      field: 'company',
      headerName: 'شرکت بیمه',
      width: 140,
    },
    {
      field: 'startDate',
      headerName: 'تاریخ شروع',
      type: 'date',
      width: 140,
    },
    {
      field: 'expireDate',
      headerName: 'تاریخ پایان',
      type: 'date',
      width: 140,
    },
    {
      field: 'remainingDays',
      headerName: 'روز باقیمانده',
      type: 'number',
      width: 100,
    },
    {
      field: 'amount',
      headerName: 'مبلغ',
      type: 'currency',
      width: 100,
    },
    {
      field: 'status',
      headerName: 'وضعیت',
      renderCell: ({ value }) => <StatusChip status={value} />,
      width: 100,
    },
  ];

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

export default InsuranceReportTable;
