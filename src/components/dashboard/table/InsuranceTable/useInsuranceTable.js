import { useMemo } from 'react';

import dashboardRepository from '../../../../repositories/dashboard/dashboard.repository';

import useDashboardWidget from '../../hooks/useDashboardWidget';

const useInsuranceTable = () => {
  const widget = useDashboardWidget({
    title: 'بیمه نامه ها',

    subtitle: 'بیمه های نزدیک به انقضا',

    fetcher: dashboardRepository.getInsurances,
  });

  const columns = useMemo(
    () => [
      {
        field: 'vehicleName',
        headerName: 'خودرو',
        flex: 1,
      },

      {
        field: 'insuranceCompany',
        headerName: 'شرکت بیمه',
        flex: 1,
      },

      {
        field: 'policyNumber',
        headerName: 'شماره بیمه',
        width: 150,
      },

      {
        field: 'expireDate',
        headerName: 'تاریخ انقضا',
        width: 120,
      },

      {
        field: 'remainDays',
        headerName: 'روز مانده',
        width: 110,
        align: 'center',
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

export default useInsuranceTable;
