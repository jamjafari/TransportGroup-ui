import { useCallback } from 'react';

import { useTireContext } from '../context';
import * as tireApi from '../api/tireApi';

const useTire = () => {
  const {
    tires,
    setTires,
    selectedTire,
    setSelectedTire,
    loading,
    setLoading,
    filters,
    setFilters,
  } = useTireContext();

  const unwrap = (response) => {
    if (!response.success) {
      throw new Error(response.errors?.[0] || 'خطا در ارتباط با سرور');
    }
    return response.data;
  };

  const getTires = useCallback(async () => {
    try {
      setLoading(true);
      const response = await tireApi.getTires(filters);
      const data = unwrap(response);
      setTires(data);
      return data;
    } finally {
      setLoading(false);
    }
  }, [filters, setLoading, setTires]);

  const getTireById = useCallback(
    async (id) => {
      try {
        setLoading(true);
        const response = await tireApi.getTireById(id);
        const data = unwrap(response);
        setSelectedTire(data);
        return data;
      } finally {
        setLoading(false);
      }
    },
    [setLoading, setSelectedTire],
  );

  const createTire = useCallback(
    async (tire) => {
      try {
        setLoading(true);
        const response = await tireApi.createTire(tire);
        return unwrap(response);
      } finally {
        setLoading(false);
      }
    },
    [setLoading],
  );

  const updateTire = useCallback(
    async (tire) => {
      console.log('UPDATE tire:', tire);
      try {
        setLoading(true);
        const response = await tireApi.updateTire(tire);
        return unwrap(response);
      } finally {
        setLoading(false);
      }
    },
    [setLoading],
  );

  const deleteTire = useCallback(
    async (id) => {
      try {
        setLoading(true);
        const response = await tireApi.deleteTire(id);
        return unwrap(response);
      } finally {
        setLoading(false);
      }
    },
    [setLoading],
  );

  return {
    tires,
    selectedTire,
    loading,
    filters,
    setFilters,
    getTires,
    getTireById,
    createTire,
    updateTire,
    deleteTire,
  };
};

export default useTire;
