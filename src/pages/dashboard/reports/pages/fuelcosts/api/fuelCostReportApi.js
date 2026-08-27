import { apiClient } from '@/services';

export const getFuelCostReport = async (filter = {}) => {
  return await apiClient.post('/reports/fuelcost', filter);
};
