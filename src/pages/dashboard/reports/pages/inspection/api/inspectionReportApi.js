import { apiClient } from '@/services';

export const getInspectionReport = async (filter = {}) => {
  return await apiClient.post('/reports/inspection', filter);
};
