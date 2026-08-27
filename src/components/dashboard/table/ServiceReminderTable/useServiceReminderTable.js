import { useMemo } from 'react';

import DashboardRepository from '../../../../repositories/dashboard/dashboard.repository';

import useDashboardWidget from '@/pages/dashboard/hooks/useDashboardWidget';
import useDashboardSearch from '@/pages/dashboard/hooks/useDashboardSearch';
import { formatJalaliDate } from '@/utils';

const useServiceReminderTable = () => {
  const { filters } = useDashboardSearch();
  const widget = useDashboardWidget({
    title: 'سرویس های دوره ای',

    subtitle: 'سرویس های نزدیک به موعد',

    fetcher: () => DashboardRepository.getServiceDashboard(filters),
  });

  const columns = useMemo(
    () => [
      {
        field: 'plateNumber',
        headerName: 'خودرو',
        flex: 1,
      },

      {
        field: 'serviceType',
        headerName: 'نوع سرویس',
        flex: 1,
      },
      {
        field: 'serviceDate',
        headerName: 'تاریخ سرویس',
        flex: 1,
        renderCell: ({ value }) => (value ? formatJalaliDate(value) : '—'),
      },
      {
        field: 'odometerKm',
        headerName: 'کارکرد در سرویس',
        flex: 1,
        align: 'right',
      },

      {
        field: 'remainingKm',
        headerName: ' کیلومتر باقیمانده',
        flex: 1,
        align: 'right',
      },
      {
        field: 'remainingDays',
        headerName: ' روز باقیماده',
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

export default useServiceReminderTable;
