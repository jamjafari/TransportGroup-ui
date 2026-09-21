import { apiClient } from '@/services';

const BASE_URL = '/missions';

export const getMyMissions = async () => {
  const response = await apiClient.get(`${BASE_URL}/my`);
  return response;
};

export const recordGpsPoint = async (missionId, { latitude, longitude }) => {
  const response = await apiClient.post(`${BASE_URL}/${missionId}/gps-points`, {
    latitude,
    longitude,
  });
  return response;
};

export const getGpsPoints = async (missionId) => {
  const response = await apiClient.get(`${BASE_URL}/${missionId}/gps-points`);
  return response;
};
