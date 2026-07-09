import { useMemo } from 'react';

import dashboardRepository from '../../../../repositories/dashboard/dashboard.repository';

import useDashboardWidget from '../../hooks/useDashboardWidget';

const useLatestActivitiesTable = () => {
  const widget = useDashboardWidget({
    title: 'آخرین فعالیت‌ها',

    subtitle: 'آخرین عملیات انجام شده',

    fetcher: dashboardRepository.getLatestActivities,
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
