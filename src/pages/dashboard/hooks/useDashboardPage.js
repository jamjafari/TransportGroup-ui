import { useCallback, useEffect, useState } from 'react';

import dashboardService from '@/services/dashboard';

const initialState = {
  statistics: null,
  charts: null,
  tables: null,
};

const useDashboardPage = () => {
  const [dashboard, setDashboard] = useState(initialState);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  const loadDashboard = useCallback(async () => {
    try {
      setLoading(true);

      setError(null);

      const data = await dashboardService.getDashboard();

      setDashboard(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadDashboard();
  }, [loadDashboard]);

  return {
    loading,
    error,

    statistics: dashboard.statistics,
    charts: dashboard.charts,
    tables: dashboard.tables,

    refresh: loadDashboard,
  };
};

export default useDashboardPage;
