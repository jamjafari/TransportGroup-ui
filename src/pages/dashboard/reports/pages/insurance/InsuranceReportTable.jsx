import React from 'react';

import { AppDataGrid } from '@/components';

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
      width: 180,
    },
    {
      field: 'insuranceType',
      headerName: 'نوع بیمه',
      width: 170,
    },
    {
      field: 'company',
      headerName: 'شرکت بیمه',
      width: 170,
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
      width: 120,
    },
    {
      field: 'amount',
      headerName: 'مبلغ',
      type: 'currency',
      width: 160,
    },
    {
      field: 'status',
      headerName: 'وضعیت',
      type: 'status',
      width: 120,
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
