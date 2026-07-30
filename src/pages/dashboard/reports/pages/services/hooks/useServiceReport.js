// hooks/useMissionReport.js

import useAsyncData from '@/hooks/useAsyncData';

import DashboardRepository from '@/repositories/dashboard/dashboard.repository';

import useDashboardSearch from '@/pages/dashboard/hooks/useDashboardSearch';

const useServiceReport = () => {
  const { appliedFilters } = useDashboardSearch();

  return useAsyncData({
    fetcher: () => DashboardRepository.getServiceReport(appliedFilters),

    dependencies: [JSON.stringify(appliedFilters)],
  });
};

export default useServiceReport;
