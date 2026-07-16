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
        width: 120,
        align: 'right',
      },

      {
        field: 'serviceKm',
        headerName: 'سرویس در',
        width: 120,
        align: 'right',
      },

      {
        field: 'remainKm',
        headerName: 'باقیمانده',
        width: 110,
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

export default useServiceReminderTable;
