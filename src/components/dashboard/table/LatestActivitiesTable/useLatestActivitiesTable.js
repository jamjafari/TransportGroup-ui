import { useMemo } from 'react';

import DashboardRepository from '../../../../repositories/dashboard/dashboard.repository';

import useDashboardWidget from '@/pages/dashboard/hooks/useDashboardWidget';

const useLatestActivitiesTable = () => {
  const widget = useDashboardWidget({
    title: 'آخرین فعالیت‌ها',

    subtitle: 'آخرین عملیات انجام شده',

    fetcher: DashboardRepository.getLatestActivities,
  });

  const columns = useMemo(
    () => [
      {
        field: 'activity',

        headerName: 'فعالیت',

        flex: 2,
      },

      {
        field: 'user',

        headerName: 'کاربر',

        flex: 1,
      },

      {
        field: 'date',

        headerName: 'تاریخ',

        flex: 1,
      },

      {
        field: 'time',

        headerName: 'ساعت',

        width: 90,
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
