// useDriverSummary.js

import useAsyncData from '@/hooks/useAsyncData';

import DashboardRepository from '@/repositories/dashboard/dashboard.repository';

import useDashboardSearch from '@/pages/dashboard/hooks/useDashboardSearch';

const useDriverSummary = () => {
  const { filters, searchKey } = useDashboardSearch();

  return useAsyncData({
    fetcher: () => DashboardRepository.getDriverSummary(filters),

    dependencies: [searchKey],

    initialData: {
      total: 0,
      active: 0,
      mission: 0,
      inactive: 0,
      repair: 0,
    },
  });
};

export default useDriverSummary;
