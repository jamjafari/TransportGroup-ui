import { useCallback, useEffect, useState } from 'react';

import dashboardService from '@/services/dashboard';

const initialState = {
  summary: null,
  charts: null,
  tables: null,
};

const useDashboardPage = () => {
  const [data, setData] = useState(initialState);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  const loadDashboard = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const dashboard = await dashboardService.getDashboard();

      setData(dashboard);
    } catch (err) {
      console.error(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadDashboard();
  }, [loadDashboard]);

  return {
    data,
    loading,
    error,
    refresh: loadDashboard,
  };
};

export default useDashboardPage;
