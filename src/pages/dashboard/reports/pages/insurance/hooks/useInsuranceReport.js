import useAsyncData from '@/hooks/useAsyncData';

import DashboardRepository from '@/repositories/dashboard/dashboard.repository';

import useDashboardSearch from '@/pages/dashboard/hooks/useDashboardSearch';

const useInsuranceReport = () => {
  const { appliedFilters } = useDashboardSearch();
  console.log('Fetcher called');
  return useAsyncData({
    fetcher: () => DashboardRepository.getInsuranceReport(appliedFilters),

    dependencies: [JSON.stringify(appliedFilters)],
  });
};

export default useInsuranceReport;
