import { apiClient } from '@/services';

export const getInsuranceReport = async (filter = {}) => {
  return await apiClient.post('/reports/insurance', filter);
};
