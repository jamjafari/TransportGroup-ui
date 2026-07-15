import { useMemo } from 'react';

import useDashboardPage from './useDashboardPage';

const useDashboardStatistics = () => {
  const { data, loading, error, refresh } = useDashboard();

  const statistics = useMemo(() => {
    if (!data?.summary) {
      return {
        vehicleCount: 0,
        driverCount: 0,
        missionCount: 0,
        expenseCount: 0,
      };
    }

    return {
      vehicleCount: data.summary.vehicleCount,
      driverCount: data.summary.driverCount,
      missionCount: data.summary.missionCount,
      expenseCount: data.summary.expenseCount,
    };
  }, [data]);

  return {
    ...statistics,
    loading,
    error,
    refresh,
  };
};

export default useDashboardStatistics;
