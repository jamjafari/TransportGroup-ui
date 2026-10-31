import { apiClient } from '@/services';

const BASE_URL = '/reports/tires';

export const getTiresReport = async (filter = {}) => {
  return await apiClient.post(`${BASE_URL}/list`, filter);
};

export const getTiresSummary = async (filter = {}) => {
  return await apiClient.post(`${BASE_URL}/summary`, filter);
};
