// useMissionReport.jsx
import DashboardRepository from '../../../../repositories/dashboard/dashboard.repository';
import useDashboardSearch from '@/pages/dashboard/hooks/useDashboardSearch';
const useMissionReport = () => {
  const { filters, searchKey } = useDashboardSearch();

  return useAsyncData({
    fetcher: () => DashboardRepository.getMissions(filters),

    dependencies: [searchKey],
  });
};
