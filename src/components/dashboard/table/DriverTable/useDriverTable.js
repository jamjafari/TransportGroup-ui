import { useMemo } from 'react';

import DashboardRepository from '../../../../repositories/dashboard/dashboard.repository';

import useDashboardWidget from '@/pages/dashboard/hooks/useDashboardWidget';

import DriverStatusCell from './DriverStatusCell';

const useDriverTable = () => {
  const widget = useDashboardWidget({
    title: 'رانندگان',

    subtitle: 'وضعیت رانندگان',

    fetcher: DashboardRepository.getDrivers,
  });

  const columns = useMemo(
    () => [
      {
        field: 'fullName',
        headerName: 'نام راننده',
        flex: 1.5,
      },

      {
        field: 'nationalCode',
        headerName: 'کد ملی',
        width: 120,
      },

      {
        field: 'phoneNumber',
        headerName: 'موبایل',
        width: 130,
      },

      {
        field: 'missionCount',
        headerName: 'ماموریت',
        width: 100,
        align: 'center',
      },

      {
        field: 'status',
        headerName: 'وضعیت',
        width: 140,

        renderCell: DriverStatusCell,
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

export default useDriverTable;
