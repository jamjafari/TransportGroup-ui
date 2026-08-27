import { apiClient } from '@/services';

export const getServiceReport = async (filter = {}) => {
  return await apiClient.post('/reports/service', filter);
};
