import { useCallback } from 'react';

import { useLocationContext } from '../context';
import * as locationApi from '../api/locationApi';

const useLocation = () => {
  const {
    locations,
    setLocations,
    selectedLocation,
    setSelectedLocation,
    loading,
    setLoading,
    filters,
    setFilters,
  } = useLocationContext();

  const unwrap = (response) => {
    if (!response.success) {
      throw new Error(response.errors?.[0] || 'خطا در ارتباط با سرور');
    }
    return response.data;
  };

  const getLocations = useCallback(async () => {
    try {
      setLoading(true);
      const response = await locationApi.getLocations(filters);
      const data = unwrap(response);
      setLocations(data);
      return data;
    } finally {
      setLoading(false);
    }
  }, [filters, setLoading, setLocations]);

  const getLocationById = useCallback(
    async (id) => {
      try {
        setLoading(true);
        const response = await locationApi.getLocationById(id);
        const data = unwrap(response);
        setSelectedLocation(data);
        return data;
      } finally {
        setLoading(false);
      }
    },
    [setLoading, setSelectedLocation],
  );

  const createLocation = useCallback(
    async (location) => {
      try {
        setLoading(true);
        const response = await locationApi.createLocation(location);
        return unwrap(response);
      } finally {
        setLoading(false);
      }
    },
    [setLoading],
  );

  const updateLocation = useCallback(
    async (location) => {
      console.log('UPDATE Location:', location);
      try {
        setLoading(true);
        const response = await locationApi.updateLocation(location);
        return unwrap(response);
      } finally {
        setLoading(false);
      }
    },
    [setLoading],
  );

  const deleteLocation = useCallback(
    async (id) => {
      try {
        setLoading(true);
        const response = await locationApi.deleteLocation(id);
        return unwrap(response);
      } finally {
        setLoading(false);
      }
    },
    [setLoading],
  );

  return {
    locations,
    selectedLocation,
    loading,
    filters,
    setFilters,
    getLocations,
    getLocationById,
    createLocation,
    updateLocation,
    deleteLocation,
  };
};

export default useLocation;
