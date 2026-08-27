import { apiClient } from '@/services';

export const getFinancialReport = async (filter = {}) => {
  return await apiClient.post('/reports/financial', filter);
};
