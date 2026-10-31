import toApiError from '@/services/apiError';
import useAsyncData from '@/hooks/useAsyncData';

import useDashboardSearch from '@/pages/dashboard/hooks/useDashboardSearch';

import { getVehicleRequestsSummary } from '../api/vehicleRequestReportApi';
import { mapToVehicleRequestReportFilter } from '../utils/mapFilters';

const useVehicleRequestSummary = () => {
  const { appliedFilters } = useDashboardSearch();

  return useAsyncData({
    fetcher: async () => {
      const response = await getVehicleRequestsSummary(
        mapToVehicleRequestReportFilter(appliedFilters),
      );

      if (!response.success) {
        throw toApiError(response, 'خطا در دریافت خلاصه درخواست‌های خودرو');
      }

      return response.data;
    },
    dependencies: [JSON.stringify(appliedFilters)],
  });
};

export default useVehicleRequestSummary;
