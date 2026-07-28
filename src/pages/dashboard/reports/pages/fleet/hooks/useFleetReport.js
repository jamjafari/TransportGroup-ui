import useAsyncData from '@/hooks/useAsyncData';

import DashboardRepository from '@/repositories/dashboard/dashboard.repository';

import useDashboardSearch from '@/pages/dashboard/hooks/useDashboardSearch';
const useFleetReport = () => {
  const { appliedFilters } = useDashboardSearch();

  return useAsyncData({
    fetcher: () => DashboardRepository.getFleet(appliedFilters),

    dependencies: [JSON.stringify(appliedFilters)],
  });
};
export default useFleetReport;
