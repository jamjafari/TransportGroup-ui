import { useEffect, useState, useCallback } from 'react';

const useChartData = ({
  fetcher,

  initialData = [],

  enabled = true,
}) => {
  const [rows, setRows] = useState(initialData);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

  const load = useCallback(async () => {
    if (!enabled || !fetcher) {
      return;
    }

    try {
      setLoading(true);

      setError(null);

      const result = await fetcher();

      setRows(result || []);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [enabled, fetcher]);

  useEffect(() => {
    load();
  }, [load]);

  return {
    rows,

    loading,

    error,

    refresh: load,

    hasData: rows.length > 0,

    isEmpty: rows.length === 0,
  };
};

export default useChartData;
