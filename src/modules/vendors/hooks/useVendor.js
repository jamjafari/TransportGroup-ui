import { useCallback } from 'react';

import { useVendorContext } from '../context';
import * as vendorApi from '../api/vendorApi';

const useVendor = () => {
  const {
    vendors,
    setVendors,
    selectedVendor,
    setSelectedVendor,
    loading,
    setLoading,
    filters,
    setFilters,
  } = useVendorContext();

  const unwrap = (response) => {
    if (!response.success) {
      throw new Error(response.errors?.[0] || 'خطا در ارتباط با سرور');
    }
    return response.data;
  };

  const getVendors = useCallback(async () => {
    try {
      setLoading(true);
      const response = await vendorApi.getVendors(filters);
      const data = unwrap(response);
      setVendors(data);
      return data;
    } finally {
      setLoading(false);
    }
  }, [filters, setLoading, setVendors]);

  const getVendorById = useCallback(
    async (id) => {
      try {
        setLoading(true);
        const response = await vendorApi.getVendorById(id);
        const data = unwrap(response);
        setSelectedVendor(data);
        return data;
      } finally {
        setLoading(false);
      }
    },
    [setLoading, setSelectedVendor],
  );

  const createVendor = useCallback(
    async (vendor) => {
      try {
        setLoading(true);
        const response = await vendorApi.createVendor(vendor);
        return unwrap(response);
      } finally {
        setLoading(false);
      }
    },
    [setLoading],
  );

  const updateVendor = useCallback(
    async (vendor) => {
      console.log('UPDATE vendor:', vendor);
      try {
        setLoading(true);
        const response = await vendorApi.updateVendor(vendor);
        return unwrap(response);
      } finally {
        setLoading(false);
      }
    },
    [setLoading],
  );

  const deleteVendor = useCallback(
    async (id) => {
      try {
        setLoading(true);
        const response = await vendorApi.deleteVendor(id);
        return unwrap(response);
      } finally {
        setLoading(false);
      }
    },
    [setLoading],
  );

  return {
    vendors,
    selectedVendor,
    loading,
    filters,
    setFilters,
    getVendors,
    getVendorById,
    createVendor,
    updateVendor,
    deleteVendor,
  };
};

export default useVendor;
