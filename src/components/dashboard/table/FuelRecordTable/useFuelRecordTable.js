import { useMemo } from 'react';

import DashboardRepository from '../../../../repositories/dashboard/dashboard.repository';

import useDashboard from '../../hooks/useDashboard';

const useFuelRecordTable = () => {
  const widget = useDashboard({
    title: 'آخرین سوخت گیری',

    subtitle: 'آخرین تراکنش های سوخت',

    fetcher: DashboardRepository.getFuelRecords,
  });

  const columns = useMemo(
    () => [
      {
        field: 'fuelDate',
        headerName: 'تاریخ',
        width: 110,
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
        field: 'fuelAmount',
        headerName: 'لیتر',
        width: 90,
        align: 'right',
      },

      {
        field: 'totalCost',
        headerName: 'هزینه',
        width: 130,
        align: 'right',
      },

      {
        field: 'stationName',
        headerName: 'جایگاه',
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

export default useFuelRecordTable;
