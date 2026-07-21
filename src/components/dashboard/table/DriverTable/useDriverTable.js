import { useMemo } from 'react';

import DashboardRepository from '../../../../repositories/dashboard/dashboard.repository';

import useDashboardWidget from '@/pages/dashboard/hooks/useDashboardWidget';
import useDashboardSearch from '@/pages/dashboard/hooks/useDashboardSearch';

import DriverStatusCell from './DriverStatusCell';

const useDriverTable = () => {
  const { filters } = useDashboardSearch();

  const widget = useDashboardWidget({
    title: 'رانندگان',

    subtitle: 'وضعیت رانندگان',

    fetcher: () => DashboardRepository.getDrivers(filters),
  });

  const columns = useMemo(
    () => [
      {
        field: 'fullName',
        headerName: 'نام راننده',
        flex: 1,
      },

      {
        field: 'nationalCode',
        headerName: 'کد ملی',
        flex: 1,
      },

      {
        field: 'phoneNumber',
        headerName: 'موبایل',
        flex: 1,
      },

      {
        field: 'missionCount',
        headerName: 'ماموریت',
        flex: 1,
      },

      {
        field: 'status',
        headerName: 'وضعیت',
        flex: 1,
        align: 'right',

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
