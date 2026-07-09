import { useMemo } from 'react';

import dashboardRepository from '../../../../repositories/dashboard/dashboard.repository';

import useDashboardWidget from '../../hooks/useDashboardWidget';

const useExpenseTable = () => {
  const widget = useDashboardWidget({
    title: 'آخرین هزینه ها',

    subtitle: 'آخرین هزینه های ثبت شده',

    fetcher: dashboardRepository.getExpenses,
  });

  const columns = useMemo(
    () => [
      {
        field: 'expenseDate',
        headerName: 'تاریخ',
        width: 110,
      },

      {
        field: 'expenseType',
        headerName: 'نوع هزینه',
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
        field: 'amount',
        headerName: 'مبلغ',
        width: 140,
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

export default useExpenseTable;
