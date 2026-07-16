import DashboardRepository from '@/repositories/dashboard/dashboard.repository';

import useDashboardWidget from '@/pages/dashboard/hooks/useDashboardWidget';

import useChartSeries from '../../../../common/charts/hooks/useChartSeries';

const useDriverPerformanceChart = () => {
  const widget = useDashboardWidget({
    title: 'عملکرد رانندگان',

    subtitle: '10 راننده برتر',

    fetcher: DashboardRepository.getDriverPerformance,
  });

  const chart = useChartSeries(
    widget.rows,

    {
      categoryField: 'driver',

      series: [
        {
          field: 'score',

          name: 'امتیاز',

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

export default useDriverPerformanceChart;
