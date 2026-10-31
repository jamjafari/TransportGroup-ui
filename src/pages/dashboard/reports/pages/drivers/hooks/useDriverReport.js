import useAsyncData from '@/hooks/useAsyncData';

import useDashboardSearch from '@/pages/dashboard/hooks/useDashboardSearch';

import { getDriversReport } from '../api/driverReportApi';
import { mapToDriverReportFilter } from '../utils/mapFilters';
import toApiError from '@/services/apiError';

const useDriverReport = () => {
  const { appliedFilters } = useDashboardSearch();

  return useAsyncData({
    fetcher: async () => {
      const response = await getDriversReport(
        mapToDriverReportFilter(appliedFilters),
      );

      if (!response.success) {
        throw toApiError(response, 'خطا در دریافت گزارش رانندگان');
      }

      return response.data;
    },
    dependencies: [JSON.stringify(appliedFilters)],
  });
};

export default useDriverReport;
