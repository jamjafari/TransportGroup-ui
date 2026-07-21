import { useMemo } from 'react';

import useDashboardPage from './useDashboardPage';

const useDashboardStatistics = (filters = {}) => {
  const { data, loading, error, refresh } = useDashboardPage();

  const filteredStatistics = useMemo(() => {
    if (!data?.summary) {
      return {
        vehicleCount: 0,
        driverCount: 0,
        missionCount: 0,
        expenseCount: 0,
      };
    }

    let summary = {
      vehicleCount: data.summary.vehicleCount,
      driverCount: data.summary.driverCount,
      missionCount: data.summary.missionCount,
      expenseCount: data.summary.expenseCount,
    };

    /*
        Search Filters
    */
    if (filters.vehicleId) {
      summary.vehicleCount = 1;
    }

    if (filters.driverId) {
      summary.driverCount = 1;
    }

    if (filters.missionId) {
      summary.missionCount = 1;
    }

    if (filters.expenseType) {
      summary.expenseCount = 1;
    }

    return summary;
  }, [data, filters]);

  return {
    ...filteredStatistics,

    loading,
    error,

    refresh,
  };
};

export default useDashboardStatistics;
