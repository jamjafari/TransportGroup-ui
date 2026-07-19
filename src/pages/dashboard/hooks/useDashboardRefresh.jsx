import { useContext } from 'react';

import DashboardRefreshContext from '../context/DashboardRefreshContext';

const useDashboardRefresh = () => {
  return useContext(DashboardRefreshContext);
};

export default useDashboardRefresh;
