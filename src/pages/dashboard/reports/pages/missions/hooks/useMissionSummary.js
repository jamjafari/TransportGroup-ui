import useAsyncData from '@/hooks/useAsyncData';

import useDashboardSearch from '@/pages/dashboard/hooks/useDashboardSearch';

import { getMissionsSummary } from '../api/missionReportApi';
import { mapToMissionReportFilter } from '../utils/mapFilters';

const useMissionSummary = () => {
  const { appliedFilters } = useDashboardSearch();

  return useAsyncData({
    fetcher: async () => {
      const response = await getMissionsSummary(
        mapToMissionReportFilter(appliedFilters),
      );

      if (!response.success) {
        throw new Error(
          response.errors?.[0] || 'خطا در دریافت خلاصه ماموریت‌ها',
        );
      }

      return response.data;
    },
    dependencies: [JSON.stringify(appliedFilters)],
  });
};

export default useMissionSummary;
