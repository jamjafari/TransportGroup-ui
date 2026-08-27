// hooks/useServiceReport.js

import useAsyncData from '@/hooks/useAsyncData';

import useDashboardSearch from '@/pages/dashboard/hooks/useDashboardSearch';

import { getServiceReport } from '../api/serviceReportApi';

const useServiceReport = () => {
  const { appliedFilters } = useDashboardSearch();

  const filter = {
    vehicleId: appliedFilters.vehicleId || null,
    dateFrom: appliedFilters.dateRange?.from || null,
    dateTo: appliedFilters.dateRange?.to || null,
  };

  return useAsyncData({
    fetcher: async () => {
      const response = await getServiceReport(filter);

      if (!response.success) {
        throw new Error(response.errors?.[0] || 'خطا در دریافت گزارش سرویس');
      }

      return response.data;
    },
    dependencies: [JSON.stringify(filter)],
  });
};

export default useServiceReport;
