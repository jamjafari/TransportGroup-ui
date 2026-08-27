import { useCallback } from 'react';

import { useServiceContext } from '../context';
import * as serviceApi from '../api/serviceApi';

const useService = () => {
  const {
    services,
    setServices,
    selectedService,
    setSelectedService,
    loading,
    setLoading,
    filters,
    setFilters,
  } = useServiceContext();

  const unwrap = (response) => {
    if (!response.success) {
      throw new Error(response.errors?.[0] || 'خطا در ارتباط با سرور');
    }
    return response.data;
  };

  const getServices = useCallback(async () => {
    try {
      setLoading(true);
      const response = await serviceApi.getServices(filters);
      const data = unwrap(response);
      setServices(data);
      return data;
    } finally {
      setLoading(false);
    }
  }, [filters, setLoading, setServices]);

  const getServiceById = useCallback(
    async (id) => {
      try {
        setLoading(true);
        const response = await serviceApi.getServiceById(id);
        const data = unwrap(response);
        setSelectedService(data);
        return data;
      } finally {
        setLoading(false);
      }
    },
    [setLoading, setSelectedService],
  );

  const createService = useCallback(
    async (service) => {
      try {
        setLoading(true);
        const response = await serviceApi.createService(service);
        return unwrap(response);
      } finally {
        setLoading(false);
      }
    },
    [setLoading],
  );

  const updateService = useCallback(
    async (service) => {
      console.log('UPDATE service:', service);
      try {
        setLoading(true);
        const response = await serviceApi.updateService(service);
        return unwrap(response);
      } finally {
        setLoading(false);
      }
    },
    [setLoading],
  );

  const deleteService = useCallback(
    async (id) => {
      try {
        setLoading(true);
        const response = await serviceApi.deleteService(id);
        return unwrap(response);
      } finally {
        setLoading(false);
      }
    },
    [setLoading],
  );

  return {
    services,
    selectedService,
    loading,
    filters,
    setFilters,
    getServices,
    getServiceById,
    createService,
    updateService,
    deleteService,
  };
};

export default useService;
