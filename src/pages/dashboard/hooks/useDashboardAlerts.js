import DashboardRepository from '@/repositories/dashboard/dashboard.repository';

import useDashboardWidget from './useDashboardWidget';

const useDashboardAlerts = () => {
  return useDashboardWidget({
    title: 'هشدارها',

    subtitle: 'پیغام های مهم',
    fetcher: DashboardRepository.getAlerts,
  });
};

export default useDashboardAlerts;
