// useMissionSummary.js

import useAsyncData from '@/hooks/useAsyncData';

import useDashboardSearch from '@/pages/dashboard/hooks/useDashboardSearch';

import DashboardRepository from '@/repositories/dashboard/dashboard.repository';

const useMissionSummary = () => {
  const { filters, searchKey } = useDashboardSearch();

  return useAsyncData({
    fetcher: () => DashboardRepository.getMissionSummary(filters),

    dependencies: [searchKey],
  });
};

export default useMissionSummary;
