import useAsyncData from '@/hooks/useAsyncData';

import useDashboardSearch from '@/pages/dashboard/hooks/useDashboardSearch';

import { getFleetReport } from '../api/fleetReportApi';

const useFleetReport = () => {
  const { appliedFilters } = useDashboardSearch();

  const filter = {
    dateFrom: appliedFilters.dateRange?.from || null,
    dateTo: appliedFilters.dateRange?.to || null,
  };

  return useAsyncData({
    fetcher: async () => {
      const response = await getFleetReport(filter);

      if (!response.success) {
        throw new Error(response.errors?.[0] || 'خطا در دریافت گزارش ناوگان');
      }

      return response.data;
    },
    dependencies: [JSON.stringify(filter)],
  });
};

export default useFleetReport;
