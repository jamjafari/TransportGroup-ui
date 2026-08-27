import useAsyncData from '@/hooks/useAsyncData';

import useDashboardSearch from '@/pages/dashboard/hooks/useDashboardSearch';

import { getInspectionReport } from '../api/inspectionReportApi';

const useInspectionReport = () => {
  const { appliedFilters } = useDashboardSearch();

  const filter = {
    vehicleId: appliedFilters.vehicleId || null,
    expiringSoonDays: 15,
  };

  return useAsyncData({
    fetcher: async () => {
      const response = await getInspectionReport(filter);

      if (!response.success) {
        throw new Error(
          response.errors?.[0] || 'خطا در دریافت گزارش معاینه فنی',
        );
      }

      return response.data;
    },
    dependencies: [JSON.stringify(filter)],
  });
};

export default useInspectionReport;
