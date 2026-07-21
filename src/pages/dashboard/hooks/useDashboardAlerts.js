import DashboardRepository from '@/repositories/dashboard/dashboard.repository';
import useDashboardSearch from './useDashboardSearch';

import useDashboardWidget from './useDashboardWidget';

const useDashboardAlerts = () => {
  const { filters } = useDashboardSearch();
  return useDashboardWidget({
    title: 'هشدارها',

    subtitle: 'پیغام های مهم',
    fetcher: () => DashboardRepository.getAlerts(filters),
  });
};

export default useDashboardAlerts;
