import { useMemo } from 'react';

import DashboardRepository from '../../../../repositories/dashboard/dashboard.repository';

import useDashboardWidget from '@/pages/dashboard/hooks/useDashboardWidget';

const useFuelRecordTable = () => {
  const widget = useDashboardWidget({
    title: 'آخرین سوخت گیری',

    subtitle: 'آخرین تراکنش های سوخت',

    fetcher: DashboardRepository.getFuelRecords,
  });

  const columns = useMemo(
    () => [
      {
        field: 'fuelDate',
        headerName: 'تاریخ',
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
        field: 'fuelAmount',
        headerName: 'لیتر',
        flex: 1,
        align: 'right',
      },

      {
        field: 'totalCost',
        headerName: 'هزینه',
        flex: 1,
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
  // console.log('fuel record:', columns);
  return {
    ...widget,

    columns,

    rows: widget.rows,
  };
};

export default useFuelRecordTable;
