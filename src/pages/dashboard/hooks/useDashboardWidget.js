import { useState, useEffect } from 'react';

const useDashboardWidget = ({ title = '', subtitle = '', fetcher }) => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadData = async () => {
    try {
      setLoading(true);
      setError(null);

      const result = await fetcher();

      setRows(result ?? []);
    } catch (err) {
      setError(err);
      setRows([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return {
    title,
    subtitle,
    rows,
    loading,
    error,
    refresh: loadData,
  };
};

export default useDashboardWidget;
