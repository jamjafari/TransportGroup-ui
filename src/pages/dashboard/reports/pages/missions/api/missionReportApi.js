import { apiClient } from '@/services';

const BASE_URL = '/reports/missions';

export const getMissionsReport = async (filter = {}) => {
  return await apiClient.post(`${BASE_URL}/list`, filter);
};

export const getMissionsSummary = async (filter = {}) => {
  return await apiClient.post(`${BASE_URL}/summary`, filter);
};
