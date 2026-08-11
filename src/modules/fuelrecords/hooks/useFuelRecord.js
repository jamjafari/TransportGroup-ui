import { useCallback } from 'react';

import { useFuelRecordContext } from '../context';
import * as fuelRecordApi from '../api/fuelRecordApi';

const useFuelRecord = () => {
  const {
    fuelRecords,
    setFuelRecords,
    selectedFuelRecord,
    setSelectedFuelRecord,
    loading,
    setLoading,
    filters,
    setFilters,
  } = useFuelRecordContext();

  const unwrap = (response) => {
    if (!response.success) {
      throw new Error(response.errors?.[0] || 'خطا در ارتباط با سرور');
    }
    return response.data;
  };

  const getFuelRecords = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fuelRecordApi.getFuelRecords(filters);
      const data = unwrap(response);
      setFuelRecords(data);
      return data;
    } finally {
      setLoading(false);
    }
  }, [filters, setLoading, setFuelRecords]);

  const getFuelRecordById = useCallback(
    async (id) => {
      try {
        setLoading(true);
        const response = await fuelRecordApi.getFuelRecordById(id);
        const data = unwrap(response);
        setSelectedFuelRecord(data);
        return data;
      } finally {
        setLoading(false);
      }
    },
    [setLoading, setSelectedFuelRecord],
  );

  const createFuelRecord = useCallback(
    async (fuelRecord) => {
      try {
        setLoading(true);
        const response = await fuelRecordApi.createFuelRecord(fuelRecord);
        return unwrap(response);
      } finally {
        setLoading(false);
      }
    },
    [setLoading],
  );

  const updateFuelRecord = useCallback(
    async (fuelRecord) => {
      console.log('UPDATE fuelRecord:', fuelRecord);
      try {
        setLoading(true);
        const response = await fuelRecordApi.updateFuelRecord(fuelRecord);
        return unwrap(response);
      } finally {
        setLoading(false);
      }
    },
    [setLoading],
  );

  const deleteFuelRecord = useCallback(
    async (id) => {
      try {
        setLoading(true);
        const response = await fuelRecordApi.deleteFuelRecord(id);
        return unwrap(response);
      } finally {
        setLoading(false);
      }
    },
    [setLoading],
  );

  return {
    fuelRecords,
    selectedFuelRecord,
    loading,
    filters,
    setFilters,
    getFuelRecords,
    getFuelRecordById,
    createFuelRecord,
    updateFuelRecord,
    deleteFuelRecord,
  };
};

export default useFuelRecord;
