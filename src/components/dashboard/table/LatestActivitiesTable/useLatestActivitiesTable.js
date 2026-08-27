import { useMemo } from 'react';

import DashboardRepository from '../../../../repositories/dashboard/dashboard.repository';

import useDashboardWidget from '@/pages/dashboard/hooks/useDashboardWidget';
import useDashboardSearch from '@/pages/dashboard/hooks/useDashboardSearch';
import { formatJalaliDate } from '@/utils';

const ACTION_LABELS = {
  Create: 'ایجاد',
  Update: 'ویرایش',
  Delete: 'حذف',
};

const useLatestActivitiesTable = () => {
  const { filters } = useDashboardSearch();

  const widget = useDashboardWidget({
    title: 'آخرین فعالیت‌ها',
    subtitle: 'آخرین عملیات انجام شده',
    fetcher: () => DashboardRepository.getLatestActivities(filters),
  });

  const columns = useMemo(
    () => [
      {
        field: 'action',
        headerName: 'نوع عملیات',
        width: 100,
        renderCell: ({ value }) => ACTION_LABELS[value] ?? value,
      },
      { field: 'activity', headerName: 'فعالیت', width: 280 },
      { field: 'user', headerName: 'کاربر', width: 150 },
      {
        field: 'date',
        headerName: 'تاریخ',
        width: 100,
        renderCell: ({ value }) => formatJalaliDate(value),
      },
      {
        field: 'time',
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
    ],
    [],
  );

  return {
    ...widget,
    columns,
    rows: widget.rows,
  };
};

export default useLatestActivitiesTable;
