// useDriverSummary.js

import useAsyncData from '@/hooks/useAsyncData';

import DashboardRepository from '@/repositories/dashboard/dashboard.repository';

import useDashboardSearch from '@/pages/dashboard/hooks/useDashboardSearch';

const useLatestActivitiesSummary = () => {
  const { filters, searchKey } = useDashboardSearch();

  return useAsyncData({
    fetcher: () => DashboardRepository.getLatestActivitiesSummary(filters),

    dependencies: [searchKey],

    initialData: {
      total: 0,
      mission: 0,
      insurance: 0,
      service: 0,
      expense: 0,
      fuel: 0,
    },
  });
};

export default useLatestActivitiesSummary;
