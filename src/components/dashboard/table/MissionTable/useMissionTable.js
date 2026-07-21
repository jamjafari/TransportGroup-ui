import { useMemo } from 'react';

import DashboardRepository from '../../../../repositories/dashboard/dashboard.repository';

import useDashboardWidget from '@/pages/dashboard/hooks/useDashboardWidget';
import useDashboardSearch from '@/pages/dashboard/hooks/useDashboardSearch';

const useMissionTable = () => {
  const { filters } = useDashboardSearch();

  const widget = useDashboardWidget({
    title: 'آخرین ماموریت ها',

    subtitle: 'آخرین ماموریت های ثبت شده',

    fetcher: () => DashboardRepository.getMissions(filters),
  });

  const columns = useMemo(
    () => [
      {
        field: 'missionNumber',
        headerName: 'شماره',
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
        flex: 1,
        align: 'right',
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

export default useMissionTable;
