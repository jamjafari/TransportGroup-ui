import DashboardRepository from '@/repositories/dashboard/dashboard.repository';

import useDashboardWidget from '@/pages/dashboard/hooks/useDashboardWidget';

import useChartSeries from '../../../../common/charts/hooks/useChartSeries';

const useMissionChart = () => {
  const widget = useDashboardWidget({
    title: 'مأموریت‌ها',

    subtitle: '30 روز اخیر',

    fetcher: DashboardRepository.getMissionTrend,
  });

  const chart = useChartSeries(
    widget.rows,

    {
      categoryField: 'day',

      series: [
        {
          field: 'count',

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
