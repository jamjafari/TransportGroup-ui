import DashboardRepository from '@/repositories/dashboard/dashboard.repository';

import useDashboardWidget from '@/pages/dashboard/hooks/useDashboardWidget';
import useChartSeries from '../../../../common/charts/hooks/useChartSeries';

const useExpenseChart = () => {
  const widget = useDashboardWidget({
    title: 'روند هزینه‌ها',
    subtitle: '30 روز اخیر',
    fetcher: DashboardRepository.getExpense,
  });

  const chart = useChartSeries(
    widget.rows,

    {
      categoryField: 'day',

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
