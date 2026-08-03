import useAsyncData from '@/hooks/useAsyncData';

import DashboardRepository from '@/repositories/dashboard/dashboard.repository';

import useDashboardSearch from '@/pages/dashboard/hooks/useDashboardSearch';

const useDateRangeFuelCostReport = () => {
  const { appliedFilters } = useDashboardSearch();
  console.log('hooks:', appliedFilters);

  return useAsyncData({
    fetcher: () => DashboardRepository.getDateRangeFuelCosts(appliedFilters),

    dependencies: [JSON.stringify(appliedFilters)],
  });
};

export default useDateRangeFuelCostReport;
