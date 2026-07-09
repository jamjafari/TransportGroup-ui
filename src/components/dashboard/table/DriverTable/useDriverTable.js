import { useMemo } from 'react';

import dashboardRepository from '../../../../repositories/dashboard/dashboard.repository';

import useDashboardWidget from '../../hooks/useDashboardWidget';

const useDriverTable = () => {
  const widget = useDashboardWidget({
    title: 'رانندگان',

    subtitle: 'وضعیت رانندگان',

    fetcher: dashboardRepository.getDrivers,
  });

  const columns = useMemo(
    () => [
      {
        field: 'fullName',
        headerName: 'نام راننده',
        flex: 1.5,
      },

      {
        field: 'nationalCode',
        headerName: 'کد ملی',
        width: 120,
      },

      {
        field: 'phoneNumber',
        headerName: 'موبایل',
        width: 130,
      },

      {
        field: 'missionCount',
        headerName: 'ماموریت',
        width: 100,
        align: 'center',
      },

      {
        field: 'status',
        headerName: 'وضعیت',
        width: 140,

        renderCell: ({ value }) => <StatusChip status={value} />,
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
