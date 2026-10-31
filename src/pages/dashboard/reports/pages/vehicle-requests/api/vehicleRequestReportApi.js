import { apiClient } from '@/services';

const BASE_URL = '/reports/vehicle-requests';

export const getVehicleRequestsReport = async (filter = {}) => {
  return await apiClient.post(`${BASE_URL}/list`, filter);
};

export const getVehicleRequestsSummary = async (filter = {}) => {
  return await apiClient.post(`${BASE_URL}/summary`, filter);
};
