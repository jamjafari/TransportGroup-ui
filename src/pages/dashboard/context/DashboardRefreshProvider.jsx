import { useState, useCallback } from 'react';

import DashboardRefreshContext from './DashboardRefreshContext';

const DashboardRefreshProvider = ({ children }) => {
  const [refreshKey, setRefreshKey] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const [lastRefreshTime, setLastRefreshTime] = useState(new Date());

  const refreshDashboard = useCallback(() => {
    setRefreshing(true);

    setRefreshKey((prev) => prev + 1);

    setTimeout(() => {
      setRefreshing(false);
      setLastRefreshTime(new Date());
    }, 1500);
  }, []);

  return (
    <DashboardRefreshContext.Provider
      value={{
        refreshKey,
        refreshing,
        lastRefreshTime,
        refreshDashboard,
      }}
    >
      {children}
    </DashboardRefreshContext.Provider>
  );
};

export default DashboardRefreshProvider;
