import dashboardRepository from '../../../repositories/dashboard/dashboard.repository';

import useDashboardWidget from '../../hooks/useDashboardWidget';

import useChartSeries from '../../../common/charts/hooks/useChartSeries';

const useFuelCostChart = () => {
  const widget = useDashboardWidget({
    title: 'هزینه سوخت',

    subtitle: '30 روز اخیر',

    fetcher: dashboardRepository.getFuelCost,
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
