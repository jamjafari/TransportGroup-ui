import { useEffect, useState } from 'react';

export const useAsyncOptions = ({ fetcher, params, enabled = true }) => {
  const [options, setOptions] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!enabled || !fetcher) return;

    const load = async () => {
      setLoading(true);

      try {
        const res = await fetcher(params);

        setOptions(res || []);
      } catch (err) {
        setOptions([]);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [fetcher, JSON.stringify(params)]);

  return {
    options,
    loading,
  };
};
