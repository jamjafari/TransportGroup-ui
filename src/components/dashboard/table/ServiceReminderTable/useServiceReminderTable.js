import { useMemo } from 'react';

import DashboardRepository from '../../../../repositories/dashboard/dashboard.repository';

import useDashboardWidget from '@/pages/dashboard/hooks/useDashboardWidget';

const useServiceReminderTable = () => {
  const widget = useDashboardWidget({
    title: 'سرویس های دوره ای',

    subtitle: 'سرویس های نزدیک به موعد',

    fetcher: DashboardRepository.getServiceReminders,
  });

  const columns = useMemo(
    () => [
      {
        field: 'vehicleName',
        headerName: 'خودرو',
        flex: 1,
      },

      {
        field: 'serviceType',
        headerName: 'نوع سرویس',
        flex: 1,
      },

      {
        field: 'currentKm',
        headerName: 'کارکرد فعلی',
        flex: 1,
        align: 'right',
      },

      {
        field: 'serviceKm',
        headerName: 'سرویس در',
        flex: 1,
        align: 'right',
      },

      {
        field: 'remainKm',
        headerName: 'باقیمانده',
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
