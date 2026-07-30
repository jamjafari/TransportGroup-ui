import useAsyncData from '@/hooks/useAsyncData';

import DashboardRepository from '@/repositories/dashboard/dashboard.repository';

import useDashboardSearch from '@/pages/dashboard/hooks/useDashboardSearch';

const useDateRangeFinancialReport = () => {
  const { filters } = useDashboardSearch();

  return useAsyncData({
    fetcher: () => DashboardRepository.getDateRangeFinancials(filters),

    dependencies: [JSON.stringify(filters)],
  });
};

export default useDateRangeFinancialReport;
