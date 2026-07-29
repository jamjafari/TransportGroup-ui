import React from 'react';

import { AppDataGrid, StatusChip } from '@/components';

import useDriverReport from './hooks/useDriverReport';

const DriverReportTable = () => {
  const { data, loading } = useDriverReport();

  const columns = [
    {
      field: 'fullName',
      headerName: 'نام راننده',
      flex: 1,
    },
    {
      field: 'nationalCode',
      headerName: 'کد ملی',
      flex: 1,
    },
    {
      field: 'phoneNumber',
      headerName: 'موبایل',
      flex: 1,
    },
    {
      field: 'licenseNumber',
      headerName: 'گواهینامه',
      flex: 1,
    },
    {
      field: 'missionCount',
      headerName: 'ماموریت',
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

export default DriverReportTable;
