import dashboardRepository from '../../../../repositories/dashboard/dashboard.repository';

import useDashboardWidget from '../../hooks/useDashboardWidget';

import useChartSeries from '../../../../common/charts/hooks/useChartSeries';

const useMonthlyDistanceChart = () => {
  const widget = useDashboardWidget({
    title: 'مسافت طی شده',

    subtitle: '30 روز اخیر',

    fetcher: dashboardRepository.getMonthlyDistance,
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
