import React from 'react';

import { AppDataGrid } from '@/components';

import useLatestActivitiesReport from './hooks/useLatestActivitiesReport';

const LatestActivitiesReportTable = () => {
  const { data, loading } = useLatestActivitiesReport();

  const columns = [
    {
      field: 'title',
      headerName: 'عنوان',
      flex: 1,
    },

    {
      field: 'type',
      headerName: 'نوع',
      flex: 1,
    },

    {
      field: 'user',
      headerName: 'کاربر',
      flex: 1,
    },

    {
      field: 'driverName',
      headerName: 'راننده',
      flex: 1,
    },

    {
      field: 'vehicleName',
      headerName: 'خودرو',
      flex: 1,
    },

    {
      field: 'missionNumber',
      headerName: 'ماموریت',
      flex: 1,
    },

    {
      field: 'status',
      headerName: 'وضعیت',
      type: 'status',
      flex: 1,
      align: 'right',
    },

    {
      field: 'activityDate',
      headerName: 'تاریخ',
      flex: 1,
    },

    {
      field: 'activityTime',
      headerName: 'زمان',
      flex: 1,
    },
  ];

  return <AppDataGrid rows={data} columns={columns} loading={loading} />;
};

export default LatestActivitiesReportTable;
