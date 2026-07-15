import { useMemo } from 'react';

import DashboardRepository from '@/repositories/dashboard/dashboard.repository';

import useDashboard from '../../../hooks/useDashboard';

const COLORS = [
  '#2e7d32',
  '#1976d2',
  '#ed6c02',
  '#9c27b0',
  '#d32f2f',
  '#0288d1',
];

const useVehicleStatusChart = () => {
  const widget = useDashboard({
    title: 'وضعیت ناوگان',

    subtitle: 'وضعیت فعلی خودروها',

    fetcher: DashboardRepository.getVehicleStatus,
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
