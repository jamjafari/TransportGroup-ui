import useAsyncData from '@/hooks/useAsyncData';

import useDashboardSearch from '@/pages/dashboard/hooks/useDashboardSearch';

import { getDriversSummary } from '../api/driverReportApi';
import { mapToDriverReportFilter } from '../utils/mapFilters';
import toApiError from '@/services/apiError';

const useDriverSummary = () => {
  const { appliedFilters } = useDashboardSearch();

  return useAsyncData({
    fetcher: async () => {
      const response = await getDriversSummary(
        mapToDriverReportFilter(appliedFilters),
      );

      if (!response.success) {
        throw toApiError(response, 'خطا در دریافت خلاصه رانندگان');
      }

      return response.data;
    },
    dependencies: [JSON.stringify(appliedFilters)],
    initialData: { total: 0, active: 0, inactive: 0 },
  });
};

export default useDriverSummary;
