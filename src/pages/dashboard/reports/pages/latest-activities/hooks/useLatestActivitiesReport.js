import useAsyncData from '@/hooks/useAsyncData';

import DashboardRepository from '@/repositories/dashboard/dashboard.repository';

import useDashboardSearch from '@/pages/dashboard/hooks/useDashboardSearch';
const useLatestActivitiesReport = () => {
  const { appliedFilters } = useDashboardSearch();

  return useAsyncData({
    fetcher: () => DashboardRepository.getLatestActivities(appliedFilters),

    dependencies: [JSON.stringify(appliedFilters)],
  });
};
export default useLatestActivitiesReport;
