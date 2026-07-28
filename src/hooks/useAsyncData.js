// src/hooks/useAsyncData.js

import { useEffect, useState } from 'react';

const useAsyncData = ({ fetcher, dependencies = [], initialData = [] }) => {
  const [data, setData] = useState(initialData);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

  const loadData = async () => {
    try {
      setLoading(true);

      setError(null);

      const result = await fetcher();

      setData(result);
    } catch (err) {
      console.error('useAsyncData Error:', err);

      setError(err);

      setData(initialData);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, dependencies);

  return {
    data,
    loading,
    error,
    reload: loadData,
  };
};

export default useAsyncData;
