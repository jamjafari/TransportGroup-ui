import useAsyncData from '@/hooks/useAsyncData';

import useDashboardSearch from '@/pages/dashboard/hooks/useDashboardSearch';

import { getVehiclesSummary } from '../api/vehicleReportApi';
import { mapToVehicleReportFilter } from '../utils/mapFilters';
import toApiError from '@/services/apiError';

const useVehicleSummary = () => {
  const { appliedFilters } = useDashboardSearch();

  return useAsyncData({
    fetcher: async () => {
      const response = await getVehiclesSummary(
        mapToVehicleReportFilter(appliedFilters),
      );

      if (!response.success) {
        throw toApiError(response, 'خطا در دریافت خلاصه خودروها');
      }

      return response.data;
    },
    dependencies: [JSON.stringify(appliedFilters)],
    initialData: { total: 0, active: 0, inactive: 0, inRepair: 0, sold: 0 },
  });
};

export default useVehicleSummary;
