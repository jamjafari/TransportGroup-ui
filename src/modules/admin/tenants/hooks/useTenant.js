import { useCallback, useState } from 'react';

import { useTenantContext } from '../context';
import * as tenantApi from '../api/tenantApi';

const unwrap = (response) => {
  if (!response.success) {
    throw new Error(response.errors?.[0] || 'خطا در ارتباط با سرور');
  }
  return response.data;
};

const useTenant = () => {
  const {
    tenants,
    setTenants,
    selectedTenant,
    setSelectedTenant,
    loading,
    setLoading,
    filters,
    setFilters,
  } = useTenantContext();
  const [admins, setAdmins] = useState([]);
  const getTenants = useCallback(async () => {
    try {
      setLoading(true);
      const response = await tenantApi.getTenants(filters);
      const data = unwrap(response);
      setTenants(data);
      return data;
    } finally {
      setLoading(false);
    }
  }, [filters, setLoading, setTenants]);

  const getTenantById = useCallback(
    async (id) => {
      try {
        setLoading(true);
        const response = await tenantApi.getTenantById(id);
        const data = unwrap(response);
        setSelectedTenant(data);
        return data;
      } finally {
        setLoading(false);
      }
    },
    [setLoading, setSelectedTenant],
  );

  const createTenant = useCallback(
    async (tenant) => {
      try {
        setLoading(true);
        const response = await tenantApi.createTenant(tenant);
        return unwrap(response);
      } finally {
        setLoading(false);
      }
    },
    [setLoading],
  );

  const updateTenant = useCallback(
    async (tenant) => {
      try {
        setLoading(true);
        const response = await tenantApi.updateTenant(tenant);
        return unwrap(response);
      } finally {
        setLoading(false);
      }
    },
    [setLoading],
  );

  const deleteTenant = useCallback(
    async (id) => {
      try {
        setLoading(true);
        const response = await tenantApi.deleteTenant(id);
        return unwrap(response);
      } finally {
        setLoading(false);
      }
    },
    [setLoading],
  );

  const setTenantStatus = useCallback(async (id, isActive) => {
    const response = await tenantApi.setTenantStatus(id, isActive);
    return unwrap(response);
  }, []);

  // ✅ این متد رو مطمئن بشید در فایل خودتون هم اضافه شده
  const createTenantAdmin = useCallback(async (tenantId, payload) => {
    const response = await tenantApi.createTenantAdmin(tenantId, payload);
    return unwrap(response);
  }, []);
  const getTenantAdmins = useCallback(
    async (tenantId) => {
      try {
        setLoading(true);
        const response = await tenantApi.getTenantAdmins(tenantId);
        const data = unwrap(response);
        setAdmins(data);
        return data;
      } finally {
        setLoading(false);
      }
    },
    [setLoading],
  );

  const setAdminStatus = useCallback(async (userId, isActive) => {
    const response = await tenantApi.setAdminStatus(userId, isActive);
    return unwrap(response);
  }, []);

  const deleteAdmin = useCallback(async (userId) => {
    const response = await tenantApi.deleteAdmin(userId);
    return unwrap(response);
  }, []);
  return {
    tenants,
    selectedTenant,
    loading,
    filters,
    setFilters,
    getTenants,
    getTenantById,
    createTenant,
    updateTenant,
    deleteTenant,
    setTenantStatus,
    createTenantAdmin, // ✅ این خط رو هم چک کنید حتماً به return اضافه شده باشه
    admins,
    getTenantAdmins,
    setAdminStatus,
    deleteAdmin,
  };
};

export default useTenant;
