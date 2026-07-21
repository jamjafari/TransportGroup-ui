import DashboardRepository from '@/repositories/dashboard/dashboard.repository';

import useDashboardWidget from '@/pages/dashboard/hooks/useDashboardWidget';
import useChartSeries from '../../../../common/charts/hooks/useChartSeries';
import useDashboardSearch from '@/pages/dashboard/hooks/useDashboardSearch';

const useExpenseChart = () => {
  const { filters } = useDashboardSearch();
  const widget = useDashboardWidget({
    title: 'هزینه‌های ماهیانه',

    subtitle: 'هزینه‌های ۱۲ ماه گذشته',
    fetcher: () => DashboardRepository.getExpense(filters),
  });

  const chart = useChartSeries(
    widget.rows,

    {
      categoryField: 'month',

      series: [
        {
          field: 'amount',

          name: 'هزینه',

          color: '#d32f2f',
        },
      ],
    },
  );
  // console.log(widget.rows);

  // console.log(chart.categories);

  // console.log(chart.series);
  return {
    ...widget,

    ...chart,
  };
};

export default useExpenseChart;
