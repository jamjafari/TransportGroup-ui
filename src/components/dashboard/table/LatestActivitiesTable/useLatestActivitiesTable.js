import { useMemo } from 'react';

import DashboardRepository from '../../../../repositories/dashboard/dashboard.repository';

import useDashboardWidget from '@/pages/dashboard/hooks/useDashboardWidget';
import useDashboardSearch from '@/pages/dashboard/hooks/useDashboardSearch';

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
        field: 'activity',

        headerName: 'فعالیت',

        flex: 1,
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

        flex: 1,
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
