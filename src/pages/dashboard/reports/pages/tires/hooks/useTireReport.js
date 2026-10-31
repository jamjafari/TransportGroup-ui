import toApiError from '@/services/apiError';
import useAsyncData from '@/hooks/useAsyncData';

import useDashboardSearch from '@/pages/dashboard/hooks/useDashboardSearch';

import { getTiresReport } from '../api/tireReportApi';

// فیلتر خودرو از فرم جستجوی مشترک گزارش‌ها: فقط تایرهایی که الان روی آن خودرو نصب‌اند
const useTireReport = () => {
  const { appliedFilters } = useDashboardSearch();

  return useAsyncData({
    fetcher: async () => {
      const response = await getTiresReport({
        vehicleId: appliedFilters.vehicleId || null,
      });

      if (!response.success) {
        throw toApiError(response, 'خطا در دریافت گزارش تایرها');
      }

      return response.data;
    },
    dependencies: [JSON.stringify(appliedFilters)],
  });
};

export default useTireReport;
