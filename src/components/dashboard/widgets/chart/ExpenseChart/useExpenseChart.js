import DashboardRepository from '@/repositories/dashboard/dashboard.repository';

import useDashboard from '../../../hooks/useDashboard';

import useChartSeries from '../../../../common/charts/hooks/useChartSeries';

const useExpenseChart = () => {
  const widget = useDashboard({
    title: 'روند هزینه‌ها',

    subtitle: '30 روز اخیر',

    fetcher: DashboardRepository.getExpenses,
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
