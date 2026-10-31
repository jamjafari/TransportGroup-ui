import toApiError from '@/services/apiError';
import useAsyncData from '@/hooks/useAsyncData';

import useDashboardSearch from '@/pages/dashboard/hooks/useDashboardSearch';

import { getTiresSummary } from '../api/tireReportApi';

// فیلتر خودرو از فرم جستجوی مشترک گزارش‌ها: فقط تایرهایی که الان روی آن خودرو نصب‌اند
const useTireSummary = () => {
  const { appliedFilters } = useDashboardSearch();

  return useAsyncData({
    fetcher: async () => {
      const response = await getTiresSummary({
        vehicleId: appliedFilters.vehicleId || null,
      });

      if (!response.success) {
        throw toApiError(response, 'خطا در دریافت خلاصه تایرها');
      }

      return response.data;
    },
    dependencies: [JSON.stringify(appliedFilters)],
    initialData: { total: 0, mounted: 0, inStock: 0, inactive: 0 },
  });
};

export default useTireSummary;
