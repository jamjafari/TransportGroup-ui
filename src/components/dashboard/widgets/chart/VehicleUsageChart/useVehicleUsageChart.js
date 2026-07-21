import DashboardRepository from '@/repositories/dashboard/dashboard.repository';

import useDashboardWidget from '@/pages/dashboard/hooks/useDashboardWidget';

import useChartSeries from '../../../../common/charts/hooks/useChartSeries';

import useDashboardSearch from '@/pages/dashboard/hooks/useDashboardSearch';

const useVehicleUsageChart = () => {
  const { filters } = useDashboardSearch();
  const widget = useDashboardWidget({
    title: 'استفاده از ناوگان',

    subtitle: '30 روز اخیر',

    fetcher: () => DashboardRepository.getVehicleUsage(filters),
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
