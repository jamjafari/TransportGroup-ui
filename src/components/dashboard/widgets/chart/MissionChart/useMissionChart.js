import DashboardRepository from '@/repositories/dashboard/dashboard.repository';

import useDashboardWidget from '@/pages/dashboard/hooks/useDashboardWidget';

import useChartSeries from '../../../../common/charts/hooks/useChartSeries';
import useDashboardSearch from '@/pages/dashboard/hooks/useDashboardSearch';

const useMissionChart = () => {
  const { filters } = useDashboardSearch();

  const widget = useDashboardWidget({
    title: 'ماموریت ها',

    subtitle: 'تعداد ماموریت ها در 12 ماه گذشته',

    fetcher: () => DashboardRepository.getMissionTrend(filters),
  });

  const chart = useChartSeries(
    widget.rows,

    {
      categoryField: 'month',

      series: [
        {
          field: 'missionCount',

          name: 'تعداد مأموریت',

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

export default useMissionChart;
