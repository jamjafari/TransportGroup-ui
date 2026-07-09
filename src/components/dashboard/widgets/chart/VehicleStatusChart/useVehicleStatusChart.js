import { useMemo } from 'react';

import dashboardRepository from '../../../../repositories/dashboard/dashboard.repository';

import useDashboardWidget from '../../hooks/useDashboardWidget';

const COLORS = [
  '#2e7d32',
  '#1976d2',
  '#ed6c02',
  '#9c27b0',
  '#d32f2f',
  '#0288d1',
];

const useVehicleStatusChart = () => {
  const widget = useDashboardWidget({
    title: 'وضعیت ناوگان',

    subtitle: 'وضعیت فعلی خودروها',

    fetcher: dashboardRepository.getVehicleStatus,
  });

  const chartData = useMemo(() => {
    return widget.rows.map((item, index) => ({
      label: item.label,

      value: item.value,

      color: item.color || COLORS[index % COLORS.length],

      percent: item.percent,
    }));
  }, [widget.rows]);

  return {
    ...widget,

    data: chartData,
  };
};

export default useVehicleStatusChart;
