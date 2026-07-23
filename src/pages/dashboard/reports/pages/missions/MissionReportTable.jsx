import React from 'react';

import { AppDataGrid } from '@/components';

import DashboardRepository from '@/repositories/dashboard/dashboard.repository';

const MissionReportTable = () => {
  const columns = [
    {
      field: 'missionNumber',
      headerName: 'شماره مأموریت',
      flex: 1,
    },
    {
      field: 'vehicleName',
      headerName: 'خودرو',
      flex: 1,
    },
    {
      field: 'driverName',
      headerName: 'راننده',
      flex: 1,
    },
    {
      field: 'origin',
      headerName: 'مبدأ',
      flex: 1,
    },
    {
      field: 'destination',
      headerName: 'مقصد',
      flex: 1,
    },
    {
      field: 'missionDate',
      headerName: 'تاریخ',
      flex: 1,
    },
    {
      field: 'status',
      headerName: 'وضعیت',
      type: 'status',
      flex: 1,
    },
  ];

  return (
    <AppDataGrid rows={DashboardRepository.getMissions()} columns={columns} />
  );
};

export default MissionReportTable;
