import { useCallback } from 'react';

import { useVehicleContext } from '../context';

import * as vehicleApi from '../api/vehicleApi';

const useVehicle = () => {
  const {
    vehicles,
    setVehicles,

    selectedVehicle,
    setSelectedVehicle,

    loading,
    setLoading,

    filters,
    setFilters,
  } = useVehicleContext();

  const getVehicles = useCallback(async () => {
    try {
      setLoading(true);

      const data = await vehicleApi.getVehicles(filters);

      setVehicles(data);

      return data;
    } finally {
      setLoading(false);
    }
  }, [filters, setLoading, setVehicles]);

  const getVehicleById = useCallback(
    async (id) => {
      try {
        setLoading(true);

        const data = await vehicleApi.getVehicleById(id);

        setSelectedVehicle(data);

        return data;
      } finally {
        setLoading(false);
      }
    },
    [setLoading, setSelectedVehicle],
  );

  const createVehicle = useCallback(
    async (vehicle) => {
      try {
        setLoading(true);

        const response = await vehicleApi.createVehicle(vehicle);

        if (!response.success) {
          throw new Error(response.errors?.[0] || 'خطا در ثبت خودرو');
        }

        return response.data;
      } finally {
        setLoading(false);
      }
    },
    [setLoading],
  );

  const updateVehicle = useCallback(
    async (id, vehicle) => {
      try {
        setLoading(true);

        const data = await vehicleApi.updateVehicle(id, vehicle);

        return data;
      } finally {
        setLoading(false);
      }
    },
    [setLoading],
  );

  const deleteVehicle = useCallback(
    async (id) => {
      try {
        setLoading(true);

        const data = await vehicleApi.deleteVehicle(id);

        return data;
      } finally {
        setLoading(false);
      }
    },
    [setLoading],
  );

  return {
    vehicles,
    selectedVehicle,
    loading,

    filters,
    setFilters,

    getVehicles,
    getVehicleById,
    createVehicle,
    updateVehicle,
    deleteVehicle,
  };
};

export default useVehicle;
