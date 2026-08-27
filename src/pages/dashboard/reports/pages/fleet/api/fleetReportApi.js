import { apiClient } from '@/services';

export const getFleetReport = async (filter = {}) => {
  return await apiClient.post('/reports/fleet', filter);
};
