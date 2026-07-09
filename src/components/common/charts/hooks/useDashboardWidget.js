import { useState, useEffect, useCallback } from 'react';

const useDashboardWidget = ({
  fetcher,

  title,

  subtitle = '',

  autoRefresh = false,

  refreshInterval = 60000,

  permission = null,

  enabled = true,
}) => {
  const [rows, setRows] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

  const [lastUpdate, setLastUpdate] = useState(null);

  const load = useCallback(async () => {
    if (!enabled || !fetcher) {
      return;
    }

    try {
      setLoading(true);

      setError(null);

      const result = await fetcher();

      setRows(result || []);

      setLastUpdate(new Date());
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [enabled, fetcher]);

  useEffect(() => {
    load();
  }, [load]);

  useEffect(() => {
    if (!autoRefresh) {
      return;
    }

    const timer = setInterval(
      load,

      refreshInterval,
    );

    return () => clearInterval(timer);
  }, [autoRefresh, refreshInterval, load]);

  return {
    title,

    subtitle,

    permission,

    rows,

    loading,

    error,

    refresh: load,

    lastUpdate,

    hasData: rows.length > 0,

    isEmpty: rows.length === 0,
  };
};

export default useDashboardWidget;
