import useAsyncData from '@/hooks/useAsyncData';

import useDashboardSearch from '@/pages/dashboard/hooks/useDashboardSearch';

import { getFinancialReport } from '../api/financialReportApi';

const useFinancialReport = () => {
  const { appliedFilters } = useDashboardSearch();

  const filter = {
    vehicleId: appliedFilters.vehicleId || null,
    dateFrom: appliedFilters.dateRange?.from || null,
    dateTo: appliedFilters.dateRange?.to || null,
  };

  return useAsyncData({
    fetcher: async () => {
      const response = await getFinancialReport(filter);

      if (!response.success) {
        throw new Error(response.errors?.[0] || 'خطا در دریافت گزارش مالی');
      }

      return response.data;
    },
    dependencies: [JSON.stringify(filter)],
  });
};

export default useFinancialReport;
