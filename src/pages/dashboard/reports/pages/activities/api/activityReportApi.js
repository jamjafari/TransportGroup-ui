import { apiClient } from '@/services';

export const getActivityReport = async (filter = {}) => {
  return await apiClient.post('/reports/activities', filter);
};
