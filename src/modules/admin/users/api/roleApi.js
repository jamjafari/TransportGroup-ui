import { apiClient } from '@/services';

export const getRoles = async () => {
  const response = await apiClient.get('/roles');
  return response;
};
