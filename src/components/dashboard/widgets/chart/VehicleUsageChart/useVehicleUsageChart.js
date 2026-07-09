import dashboardRepository from '../../../../repositories/dashboard/dashboard.repository';

import useDashboardWidget from '../../hooks/useDashboardWidget';

import useChartSeries from '../../../../common/charts/hooks/useChartSeries';

const useVehicleUsageChart = () => {
  const widget = useDashboardWidget({
    title: 'استفاده از ناوگان',

    subtitle: '30 روز اخیر',

    fetcher: dashboardRepository.getVehicleUsage,
  });

  const chart = useChartSeries(
    widget.rows,

    {
      categoryField: 'day',

      series: [
        {
          field: 'usage',

          name: 'درصد استفاده',

          color: '#1976d2',
        },
      ],
    },
  );

  return {
    ...widget,

    ...chart,
  };
};

export default useVehicleUsageChart;
