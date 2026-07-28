import useAsyncData from '@/hooks/useAsyncData';

import DashboardRepository from '@/repositories/dashboard/dashboard.repository';

import useDashboardSearch from '@/pages/dashboard/hooks/useDashboardSearch';

const useFuelCostReport = () => {
  const { appliedFilters } = useDashboardSearch();

  return useAsyncData({
    fetcher: () => DashboardRepository.getFuelCost(appliedFilters),

    dependencies: [JSON.stringify(appliedFilters)],
  });
};

export default useFuelCostReport;
