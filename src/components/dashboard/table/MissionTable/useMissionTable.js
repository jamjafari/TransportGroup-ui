import { useMemo } from 'react';

import DashboardRepository from '../../../../repositories/dashboard/dashboard.repository';

import useDashboardWidget from '@/pages/dashboard/hooks/useDashboardWidget';
import useDashboardSearch from '@/pages/dashboard/hooks/useDashboardSearch';
import { formatJalaliDate } from '@/utils';

const useMissionTable = () => {
  const { filters } = useDashboardSearch();

  const widget = useDashboardWidget({
    title: 'آخرین ماموریت ها',

    subtitle: 'آخرین ماموریت های ثبت شده',

    fetcher: () => DashboardRepository.getMissionsDashboard(filters),
  });

  const columns = useMemo(
    () => [
      {
        field: 'missionCode',
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
        field: 'originLocation',
        headerName: 'مبدأ',
        width: 100,
      },

      {
        field: 'destinationLocation',
        headerName: 'مقصد',
        width: 100,
      },

      {
        field: 'startDate',
        headerName: 'تاریخ حرکت',
        flex: 1,
        renderCell: ({ value }) => (value ? formatJalaliDate(value) : '—'),
      },

      {
        field: 'status',
        headerName: 'وضعیت',
        width: 140,
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
