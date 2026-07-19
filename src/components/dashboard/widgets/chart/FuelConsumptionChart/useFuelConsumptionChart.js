import DashboardRepository from '@/repositories/dashboard/dashboard.repository';

import useDashboardWidget from '@/pages/dashboard/hooks/useDashboardWidget';

import useChartSeries from '@/components/common/charts/hooks/useChartSeries';

const useFuelConsumptionChart = () => {
  const widget = useDashboardWidget({
    title: 'مصرف سوخت',

    subtitle: ' 30 روز اخیر',

    fetcher: DashboardRepository.getFuelConsumption,
  });

  const chart = useChartSeries(
    widget.rows,

    {
      categoryField: 'day',

      series: [
        {
          field: 'fuel',

          name: 'مصرف',

          color: '#7d2e44',
        },
      ],
    },
  );
  console.log(widget.rows);

  // console.log(chart.categories);

  // console.log('series:', chart.series);
  return {
    ...widget,

    ...chart,
  };
};

export default useFuelConsumptionChart;
