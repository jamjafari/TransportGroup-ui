import { useMemo } from 'react';

import DashboardRepository from '../../../../repositories/dashboard/dashboard.repository';

import useDashboardWidget from '@/pages/dashboard/hooks/useDashboardWidget';
import useDashboardSearch from '@/pages/dashboard/hooks/useDashboardSearch';
import { formatJalaliDate } from '@/utils';

const useExpenseTable = () => {
  const { filters } = useDashboardSearch();

  const widget = useDashboardWidget({
    title: 'آخرین هزینه ها',

    subtitle: 'آخرین هزینه های ثبت شده',

    fetcher: () => DashboardRepository.getExpenseDashboard(filters),
  });

  const columns = useMemo(
    () => [
      {
        field: 'expenseDate',
        headerName: 'تاریخ',
        flex: 1,
        renderCell: ({ value }) => (value ? formatJalaliDate(value) : '—'),
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
        field: 'vendorName',
        headerName: 'تامین کننده',
        flex: 1,
      },

      {
        field: 'amount',
        headerName: 'مبلغ(تومان)',
        flex: 1,
        renderCell: ({ value }) => Number(value ?? 0).toLocaleString('fa-IR'),
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
