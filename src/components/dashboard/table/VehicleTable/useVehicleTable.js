import { useMemo } from 'react';

import DashboardRepository from '../../../../repositories/dashboard/dashboard.repository';

import useDashboardWidget from '@/pages/dashboard/hooks/useDashboardWidget';

const useVehicleTable = () => {
  const widget = useDashboardWidget({
    title: 'وضعیت خودروها',

    subtitle: 'ناوگان فعال',

    fetcher: DashboardRepository.getVehicles,
  });

  const columns = useMemo(
    () => [
      {
        field: 'plateNumber',
        headerName: 'پلاک',
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
        field: 'odometer',
        headerName: 'کارکرد',
        flex: 1,
        align: 'right',
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

export default useVehicleTable;
