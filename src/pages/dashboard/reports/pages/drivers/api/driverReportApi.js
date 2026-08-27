import { apiClient } from '@/services';

const BASE_URL = '/reports/drivers';

export const getDriversReport = async (filter = {}) => {
  return await apiClient.post(`${BASE_URL}/list`, filter);
};

export const getDriversSummary = async (filter = {}) => {
  return await apiClient.post(`${BASE_URL}/summary`, filter);
};
