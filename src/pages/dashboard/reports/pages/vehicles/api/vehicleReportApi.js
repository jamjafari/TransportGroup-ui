import { apiClient } from '@/services';

const BASE_URL = '/reports/vehicles';

export const getVehiclesReport = async (filter = {}) => {
  return await apiClient.post(`${BASE_URL}/list`, filter);
};

export const getVehiclesSummary = async (filter = {}) => {
  return await apiClient.post(`${BASE_URL}/summary`, filter);
};
