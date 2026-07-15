import DashboardRepository from '@/repositories/dashboard/dashboard.repository';

import useDashboard from '../../../hooks/useDashboard';

import useChartSeries from '../../../../common/charts/hooks/useChartSeries';

const useVehicleUsageChart = () => {
  const widget = useDashboard({
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

  return {
    ...widget,

    ...chart,
  };
};

export default useVehicleUsageChart;
