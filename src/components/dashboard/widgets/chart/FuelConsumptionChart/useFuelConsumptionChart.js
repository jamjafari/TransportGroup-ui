import DashboardRepository from '@/repositories/dashboard/dashboard.repository';

import useDashboardWidget from '@/pages/dashboard/hooks/useDashboardWidget';

import useChartSeries from '@/components/common/charts/hooks/useChartSeries';

import useDashboardSearch from '@/pages/dashboard/hooks/useDashboardSearch';

const useFuelConsumptionChart = () => {
  const { filters } = useDashboardSearch();
  const widget = useDashboardWidget({
    title: 'مصرف سوخت',

    subtitle: 'مصرف سوخت در 12 ماه گذشته',

    fetcher: () => DashboardRepository.getFuelConsumption(filters),
  });

  const chart = useChartSeries(
    widget.rows,

    {
      categoryField: 'month',

      series: [
        {
          field: 'fuelAmount',

          name: 'لیتر',

          color: '#7d2e44',
        },
      ],
    },
  );

  return {
    ...widget,

    ...chart,
  };
};

export default useFuelConsumptionChart;
