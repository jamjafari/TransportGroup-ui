import useAsyncData from '@/hooks/useAsyncData';

import useDashboardSearch from '@/pages/dashboard/hooks/useDashboardSearch';

import { getInsuranceReport } from '../api/insuranceReportApi';

const useInsuranceReport = () => {
  const { appliedFilters } = useDashboardSearch();

  const filter = {
    vehicleId: appliedFilters.vehicleId || null,
    expiringSoonDays: 15,
  };

  return useAsyncData({
    fetcher: async () => {
      const response = await getInsuranceReport(filter);

      if (!response.success) {
        throw new Error(response.errors?.[0] || 'خطا در دریافت گزارش بیمه');
      }

      return response.data;
    },
    dependencies: [JSON.stringify(filter)],
  });
};

export default useInsuranceReport;
