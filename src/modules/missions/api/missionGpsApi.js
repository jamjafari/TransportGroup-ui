import { apiClient } from '@/services';

export const getMissionGpsPoints = async (missionId) => {
  const response = await apiClient.get(`/missions/${missionId}/gps-points`);
  return response;
};
