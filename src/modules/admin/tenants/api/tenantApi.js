import { apiClient } from '@/services';

const BASE_URL = '/tenant';

export const getTenants = async (params = {}) => {
  const response = await apiClient.get(BASE_URL, { params });
  return response;
};

export const getTenantById = async (id) => {
  const response = await apiClient.get(`${BASE_URL}/${id}/detail`);
  return response;
};

export const createTenant = async (tenant) => {
  const response = await apiClient.post(BASE_URL, tenant);
  return response;
};

export const updateTenant = async (tenant) => {
  const response = await apiClient.put(BASE_URL, tenant);
  return response;
};

export const deleteTenant = async (id) => {
  const response = await apiClient.delete(`${BASE_URL}/${id}`);
  return response;
};

export const setTenantStatus = async (id, isActive) => {
  const response = await apiClient.patch(`${BASE_URL}/${id}/status`, isActive);
  return response;
};
export const createTenantAdmin = async (tenantId, payload) => {
  const response = await apiClient.post(
    `${BASE_URL}/${tenantId}/admin-user`,
    payload,
  );
  return response;
};
export const getTenantAdmins = async (tenantId) => {
  const response = await apiClient.get(`${BASE_URL}/admins`, {
    params: tenantId ? { tenantId } : {},
  });
  return response;
};

export const setAdminStatus = async (userId, isActive) => {
  const response = await apiClient.patch(
    `${BASE_URL}/admins/${userId}/status`,
    isActive,
  );
  return response;
};

export const deleteAdmin = async (userId) => {
  const response = await apiClient.delete(`${BASE_URL}/admins/${userId}`);
  return response;
};
