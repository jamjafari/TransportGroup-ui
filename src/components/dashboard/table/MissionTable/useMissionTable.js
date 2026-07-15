import { useMemo } from 'react';

import DashboardRepository from '../../../../repositories/dashboard/dashboard.repository';

import useDashboard from '../../hooks/useDashboard';

const useMissionTable = () => {
  const widget = useDashboard({
    title: 'آخرین ماموریت ها',

    subtitle: 'آخرین ماموریت های ثبت شده',

    fetcher: DashboardRepository.getMissions,
  });

  const columns = useMemo(
    () => [
      {
        field: 'missionNumber',
        headerName: 'شماره',
        width: 90,
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
        width: 120,
      },

      {
        field: 'status',
        headerName: 'وضعیت',
        width: 130,
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
