import React from 'react';

import { AppDataGrid, StatusChip } from '@/components';

import { formatJalaliDate } from '@/utils';

import {
  activityActionChipKey,
  ACTIVITY_ACTION_LABELS,
  ACTIVITY_TYPE_LABELS,
} from './constants';

const ActivityReportTable = ({ rows = [], loading }) => {
  const columns = [
    {
      field: 'action',
      headerName: 'نوع عملیات',
      width: 180,
      renderCell: ({ value }) => (
        <StatusChip status={activityActionChipKey(value)} />
      ),
    },
    {
      field: 'type',
      headerName: 'دسته',
      width: 130,
      renderCell: ({ value }) => ACTIVITY_TYPE_LABELS[value] ?? value,
    },
    { field: 'activity', headerName: 'شرح فعالیت', flex: 1 },
    { field: 'user', headerName: 'کاربر', width: 160 },
    {
      field: 'date',
      headerName: 'تاریخ',
      width: 140,
      renderCell: ({ value }) => formatJalaliDate(value),
    },
    {
      field: 'date',
      headerName: 'ساعت',
      width: 100,
      renderCell: ({ row }) =>
        row.date
          ? new Date(row.date).toLocaleTimeString('fa-IR', {
              hour: '2-digit',
              minute: '2-digit',
            })
          : '—',
    },
  ];

  return (
    <AppDataGrid
      rows={rows}
      columns={columns}
      loading={loading}
      pagination
      initialPageSize={20}
      filterable
      toolbar
      sortable
      initialSortField="date"
      initialSortDirection="desc"
      stickyHeader
    />
  );
};

export default ActivityReportTable;
