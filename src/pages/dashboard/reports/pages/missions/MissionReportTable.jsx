import React from 'react';

import { AppDataGrid, StatusChip } from '@/components';
import { getStatusLabel } from '@/utils/statusLabels'; // ✅ اضافه شد

import useMissionReport from './hooks/useMissionReport';
import { formatJalaliDate } from '@/utils';

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
      renderCell: ({ value }) => formatJalaliDate(value),
    },
    {
      field: 'status',
      headerName: 'وضعیت',
      renderCell: ({ value }) => <StatusChip status={value} />,
      flex: 1,
      valueFormatter: (value) => getStatusLabel(value), // ✅ اضافه شد — فقط برای Export
    },
  ];

  return (
    <AppDataGrid
      rows={data}
      columns={columns}
      loading={loading}
      toolbar
      pagination
    />
  );
};

export default MissionReportTable;
