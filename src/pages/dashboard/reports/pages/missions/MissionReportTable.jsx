import React from 'react';

import { AppDataGrid, StatusChip } from '@/components';

import useMissionReport from './hooks/useMissionReport';

const MissionReportTable = () => {
  const { data, loading } = useMissionReport();

  const columns = [
    {
      field: 'missionNumber',
      headerName: 'شماره ماموریت',
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
      headerName: 'مبدا',
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
      renderCell: ({ value }) => <StatusChip status={value} />,
      flex: 1,
    },
  ];

  return <AppDataGrid rows={data} columns={columns} loading={loading} />;
};

export default MissionReportTable;
