import { createContext } from 'react';

const DashboardRefreshContext = createContext({
  refreshKey: 0,

  refreshing: false,
  lastRefreshTime: null,
  refreshDashboard: () => {},
});

export default DashboardRefreshContext;
