import useAsyncData from '@/hooks/useAsyncData';

import useDashboardSearch from '@/pages/dashboard/hooks/useDashboardSearch';

import { getMissionsReport } from '../api/missionReportApi';
import { mapToMissionReportFilter } from '../utils/mapFilters';

const useMissionReport = () => {
  const { appliedFilters } = useDashboardSearch();

  return useAsyncData({
    fetcher: async () => {
      const response = await getMissionsReport(
        mapToMissionReportFilter(appliedFilters),
      );

      if (!response.success) {
        throw new Error(
          response.errors?.[0] || 'خطا در دریافت گزارش ماموریت‌ها',
        );
      }

      return response.data;
    },
    dependencies: [JSON.stringify(appliedFilters)],
  });
};

export default useMissionReport;
