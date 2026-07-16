import DashboardRepository from '@/repositories/dashboard/dashboard.repository';

import useDashboardWidget from '@/pages/dashboard/hooks/useDashboardWidget';

import useChartSeries from '../../../../common/charts/hooks/useChartSeries';

const useVehicleUsageChart = () => {
  const widget = useDashboardWidget({
    title: 'استفاده از ناوگان',

    subtitle: '30 روز اخیر',

    fetcher: DashboardRepository.getVehicleUsage,
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
  console.log(widget.rows);

  console.log(chart.categories);

  console.log(chart.series);
  return {
    ...widget,

    ...chart,
  };
};

export default useVehicleUsageChart;
