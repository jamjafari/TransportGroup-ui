import DashboardRepository from '@/repositories/dashboard/dashboard.repository';

import useDashboardWidget from '@/pages/dashboard/hooks/useDashboardWidget';

import useChartSeries from '../../../../common/charts/hooks/useChartSeries';

import useDashboardSearch from '@/pages/dashboard/hooks/useDashboardSearch';

const useMonthlyDistanceChart = () => {
  const { filters } = useDashboardSearch();

  const widget = useDashboardWidget({
    title: 'مسافت طی شده',

    subtitle: 'مسافت طی شده در 12 ماه گذشته',

    fetcher: () => DashboardRepository.getMonthlyDistance(filters),
  });

  const chart = useChartSeries(
    widget.rows,

    {
      categoryField: 'monthName',

      series: [
        {
          field: 'distanceKm',

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
