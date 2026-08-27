import { useMemo } from 'react';

import DashboardRepository from '../../../../repositories/dashboard/dashboard.repository';

import useDashboardWidget from '@/pages/dashboard/hooks/useDashboardWidget';
import useDashboardSearch from '@/pages/dashboard/hooks/useDashboardSearch';
import { formatJalaliDate } from '@/utils';

const useFuelRecordTable = () => {
  const { filters } = useDashboardSearch();

  const widget = useDashboardWidget({
    title: 'آخرین سوخت گیری',

    subtitle: 'آخرین تراکنش های سوخت',

    fetcher: () => DashboardRepository.getFuelRecordsDashboard(filters),
  });

  const columns = useMemo(
    () => [
      {
        field: 'fuelDate',
        headerName: 'تاریخ',
        flex: 1,
        renderCell: ({ value }) => (value ? formatJalaliDate(value) : '—'),
      },

      {
        field: 'plateNumber',
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
        field: 'unitPrice',
        headerName: 'هزینه واحد',
        flex: 1,
        align: 'right',
        renderCell: ({ value }) => Number(value ?? 0).toLocaleString('fa-IR'),
      },

      {
        field: 'totalPrice',
        headerName: 'مبلغ (تومان)',
        flex: 1,
        align: 'right',
        renderCell: ({ value }) => Number(value ?? 0).toLocaleString('fa-IR'),
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
