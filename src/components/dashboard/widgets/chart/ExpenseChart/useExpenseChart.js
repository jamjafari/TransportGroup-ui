import dashboardRepository from '../../../../repositories/dashboard/dashboard.repository';

import useDashboardWidget from '../../hooks/useDashboardWidget';

import useChartSeries from '../../../../common/charts/hooks/useChartSeries';

const useExpenseChart = () => {
  const widget = useDashboardWidget({
    title: 'روند هزینه‌ها',

    subtitle: '30 روز اخیر',

    fetcher: dashboardRepository.getExpenses,
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

  return {
    ...widget,

    ...chart,
  };
};

export default useExpenseChart;
