import useAsyncData from '@/hooks/useAsyncData';

import useDashboardSearch from '@/pages/dashboard/hooks/useDashboardSearch';

import { getActivityReport } from '../api/activityReportApi';

const useActivityReport = () => {
  const { appliedFilters } = useDashboardSearch();

  const filter = {
    dateFrom: appliedFilters.dateRange?.from || null,
    dateTo: appliedFilters.dateRange?.to || null,
  };

  return useAsyncData({
    fetcher: async () => {
      const response = await getActivityReport(filter);

      if (!response.success) {
        throw new Error(
          response.errors?.[0] || 'خطا در دریافت گزارش فعالیت‌ها',
        );
      }

      return response.data;
    },
    dependencies: [JSON.stringify(filter)],
  });
};

export default useActivityReport;
