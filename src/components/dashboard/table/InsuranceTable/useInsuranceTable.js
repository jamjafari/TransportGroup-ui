import { useMemo } from 'react';

import DashboardRepository from '../../../../repositories/dashboard/dashboard.repository';

import useDashboardWidget from '@/pages/dashboard/hooks/useDashboardWidget';

const useInsuranceTable = () => {
  const widget = useDashboardWidget({
    title: 'بیمه نامه ها',

    subtitle: 'بیمه های نزدیک به انقضا',

    fetcher: DashboardRepository.getInsurances,
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
        flex: 1,
      },

      {
        field: 'expireDate',
        headerName: 'تاریخ انقضا',
        flex: 1,
      },

      {
        field: 'remainDays',
        headerName: 'روز مانده',
        flex: 1,
        align: 'center',
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

export default useInsuranceTable;
