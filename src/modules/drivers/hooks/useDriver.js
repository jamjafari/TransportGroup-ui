import { useCallback } from 'react';

import { useDriverContext } from '../context';
import * as driverApi from '../api/driverApi';

const useDriver = () => {
  const {
    drivers,
    setDrivers,
    selectedDriver,
    setSelectedDriver,
    loading,
    setLoading,
    filters,
    setFilters,
  } = useDriverContext();

  const unwrap = (response) => {
    if (!response.success) {
      throw new Error(response.errors?.[0] || 'خطا در ارتباط با سرور');
    }
    return response.data;
  };

  const getDrivers = useCallback(async () => {
    try {
      setLoading(true);
      const response = await driverApi.getDrivers(filters);
      const data = unwrap(response);
      setDrivers(data);
      return data;
    } finally {
      setLoading(false);
    }
  }, [filters, setLoading, setDrivers]);

  const getDriverById = useCallback(
    async (id) => {
      try {
        setLoading(true);
        const response = await driverApi.getDriverById(id);
        const data = unwrap(response);
        setSelectedDriver(data);
        return data;
      } finally {
        setLoading(false);
      }
    },
    [setLoading, setSelectedDriver],
  );

  const createDriver = useCallback(
    async (driver) => {
      try {
        setLoading(true);
        const response = await driverApi.createDriver(driver);
        return unwrap(response);
      } finally {
        setLoading(false);
      }
    },
    [setLoading],
  );

  const updateDriver = useCallback(
    async (driver) => {
      try {
        setLoading(true);
        const response = await driverApi.updateDriver(driver);
        return unwrap(response);
      } finally {
        setLoading(false);
      }
    },
    [setLoading],
  );

  const deleteDriver = useCallback(
    async (id) => {
      try {
        setLoading(true);
        const response = await driverApi.deleteDriver(id);
        return unwrap(response);
      } finally {
        setLoading(false);
      }
    },
    [setLoading],
  );

  return {
    drivers,
    selectedDriver,
    loading,
    filters,
    setFilters,
    getDrivers,
    getDriverById,
    createDriver,
    updateDriver,
    deleteDriver,
  };
};

export default useDriver;
