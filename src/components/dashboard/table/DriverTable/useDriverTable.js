import { useMemo } from 'react';

import DashboardRepository from '../../../../repositories/dashboard/dashboard.repository';

import useDashboardWidget from '@/pages/dashboard/hooks/useDashboardWidget';
import useDashboardSearch from '@/pages/dashboard/hooks/useDashboardSearch';
import { formatJalaliDate } from '@/utils';

const useDriverTable = () => {
  const { filters } = useDashboardSearch();

  const widget = useDashboardWidget({
    title: 'وضعیت رانندگان',
    subtitle: 'تخصیص خودرو و ماموریت هر راننده',
    fetcher: () => DashboardRepository.getDriversDashboard(filters),
  });

  const columns = useMemo(
    () => [
      { field: 'fullName', headerName: 'نام و نام‌خانوادگی', flex: 1.5 },
      {
        field: 'assignedVehiclePlate',
        headerName: 'خودروی تخصیصی',
        flex: 1,
        renderCell: ({ value }) => value || '—',
      },
      {
        field: 'lastAssignmentStartDate',
        headerName: 'تاریخ شروع تخصیص',
        flex: 1,
        renderCell: ({ value }) => (value ? formatJalaliDate(value) : '—'),
      },
      {
        field: 'missionCount',
        headerName: 'تعداد ماموریت',
        flex: 1,
        align: 'right',
      },
      { field: 'status', headerName: 'وضعیت', flex: 1, align: 'right' },
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
