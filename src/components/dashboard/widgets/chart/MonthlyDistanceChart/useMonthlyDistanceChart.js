import DashboardRepository from '@/repositories/dashboard/dashboard.repository';

import useDashboardWidget from '@/pages/dashboard/hooks/useDashboardWidget';

import useChartSeries from '../../../../common/charts/hooks/useChartSeries';

const useMonthlyDistanceChart = () => {
  const widget = useDashboardWidget({
    title: 'مسافت طی شده',

    subtitle: '30 روز اخیر',

    fetcher: DashboardRepository.getMonthlyDistance,
  });

  const chart = useChartSeries(
    widget.rows,

    {
      categoryField: 'day',

      series: [
        {
          field: 'distance',

          name: 'کیلومتر',

          color: '#ed6c02',
        },
      ],
    },
  );

  return {
    ...widget,

    ...chart,
  };
};

export default useMonthlyDistanceChart;
