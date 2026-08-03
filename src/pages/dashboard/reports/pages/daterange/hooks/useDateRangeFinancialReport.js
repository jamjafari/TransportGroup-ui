import useAsyncData from '@/hooks/useAsyncData';

import DashboardRepository from '@/repositories/dashboard/dashboard.repository';

import useDashboardSearch from '@/pages/dashboard/hooks/useDashboardSearch';

const useDateRangeFinancialReport = () => {
  const { appliedFilters } = useDashboardSearch();
  console.log('hooks:', appliedFilters);

  return useAsyncData({
    fetcher: () => DashboardRepository.getDateRangeFinancials(appliedFilters),

    dependencies: [JSON.stringify(appliedFilters)],
  });
};

export default useDateRangeFinancialReport;
