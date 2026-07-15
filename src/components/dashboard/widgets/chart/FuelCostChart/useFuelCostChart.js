import DashboardRepository from '@/repositories/dashboard/dashboard.repository';

import useDashboard from '../../../hooks/useDashboard';

import useChartSeries from '@/components/common/charts/hooks/useChartSeries';

const useFuelCostChart = () => {
  const widget = useDashboard({
    title: 'هزینه سوخت',

    subtitle: '30 روز اخیر',

    fetcher: DashboardRepository.getFuelCost,
  });

  const chart = useChartSeries(
    widget.rows,

    {
      categoryField: 'day',

      series: [
        {
          field: 'cost',

          name: 'هزینه',

          color: '#2e7d32',
        },
      ],
    },
  );

  return {
    ...widget,

    ...chart,
  };
};

export default useFuelCostChart;
