import { useMemo } from 'react';

import dashboardRepository from '../../../../repositories/dashboard/dashboard.repository';

import useDashboardWidget from '../../hooks/useDashboardWidget';

const useVehicleTable = () => {
  const widget = useDashboardWidget({
    title: 'وضعیت خودروها',

    subtitle: 'ناوگان فعال',

    fetcher: dashboardRepository.getVehicles,
  });

  const columns = useMemo(
    () => [
      {
        field: 'plateNumber',
        headerName: 'پلاک',
        width: 130,
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
        width: 120,
        align: 'right',
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

export default useVehicleTable;
