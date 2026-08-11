import { useCallback } from 'react';

import { useServiceTypeContext } from '../context';
import * as serviceTypeApi from '../api/serviceTypeApi';

const useServiceType = () => {
  const {
    serviceTypes,
    setServiceTypes,
    selectedServiceType,
    setSelectedServiceType,
    loading,
    setLoading,
    filters,
    setFilters,
  } = useServiceTypeContext();

  const unwrap = (response) => {
    if (!response.success) {
      throw new Error(response.errors?.[0] || 'خطا در ارتباط با سرور');
    }
    return response.data;
  };

  const getServiceTypes = useCallback(async () => {
    try {
      setLoading(true);
      const response = await serviceTypeApi.getServiceTypes(filters);
      const data = unwrap(response);
      setServiceTypes(data);
      return data;
    } finally {
      setLoading(false);
    }
  }, [filters, setLoading, setServiceTypes]);

  const getServiceTypeById = useCallback(
    async (id) => {
      try {
        setLoading(true);
        const response = await serviceTypeApi.getServiceTypeById(id);
        const data = unwrap(response);
        setSelectedServiceType(data);
        return data;
      } finally {
        setLoading(false);
      }
    },
    [setLoading, setSelectedServiceType],
  );

  const createServiceType = useCallback(
    async (serviceType) => {
      try {
        setLoading(true);
        const response = await serviceTypeApi.createServiceType(serviceType);
        return unwrap(response);
      } finally {
        setLoading(false);
      }
    },
    [setLoading],
  );

  const updateServiceType = useCallback(
    async (serviceType) => {
      console.log('UPDATE serviceType:', serviceType);
      try {
        setLoading(true);
        const response = await serviceTypeApi.updateServiceType(serviceType);
        return unwrap(response);
      } finally {
        setLoading(false);
      }
    },
    [setLoading],
  );

  const deleteServiceType = useCallback(
    async (id) => {
      try {
        setLoading(true);
        const response = await serviceTypeApi.deleteServiceType(id);
        return unwrap(response);
      } finally {
        setLoading(false);
      }
    },
    [setLoading],
  );

  return {
    serviceTypes,
    selectedServiceType,
    loading,
    filters,
    setFilters,
    getServiceTypes,
    getServiceTypeById,
    createServiceType,
    updateServiceType,
    deleteServiceType,
  };
};

export default useServiceType;
