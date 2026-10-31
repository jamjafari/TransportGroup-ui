import toApiError from '@/services/apiError';
import useAsyncData from '@/hooks/useAsyncData';

import useDashboardSearch from '@/pages/dashboard/hooks/useDashboardSearch';

import { getVehicleRequestsReport } from '../api/vehicleRequestReportApi';
import { mapToVehicleRequestReportFilter } from '../utils/mapFilters';

const useVehicleRequestReport = () => {
  const { appliedFilters } = useDashboardSearch();

  return useAsyncData({
    fetcher: async () => {
      const response = await getVehicleRequestsReport(
        mapToVehicleRequestReportFilter(appliedFilters),
      );

      if (!response.success) {
        throw toApiError(response, 'خطا در دریافت گزارش درخواست‌های خودرو');
      }

      return response.data;
    },
    dependencies: [JSON.stringify(appliedFilters)],
  });
};

export default useVehicleRequestReport;
