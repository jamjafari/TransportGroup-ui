import useAsyncData from '@/hooks/useAsyncData';

import useDashboardSearch from '@/pages/dashboard/hooks/useDashboardSearch';

import { getVehiclesReport } from '../api/vehicleReportApi';
import { mapToVehicleReportFilter } from '../utils/mapFilters';

const useVehicleReport = () => {
  const { appliedFilters } = useDashboardSearch();

  return useAsyncData({
    fetcher: async () => {
      const response = await getVehiclesReport(
        mapToVehicleReportFilter(appliedFilters),
      );

      if (!response.success) {
        throw new Error(response.errors?.[0] || 'خطا در دریافت گزارش خودروها');
      }

      return response.data;
    },
    dependencies: [JSON.stringify(appliedFilters)],
  });
};

export default useVehicleReport;
