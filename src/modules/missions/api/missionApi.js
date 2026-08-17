import { apiClient } from '@/services';

/*
|--------------------------------------------------------------------------
| Mission API Endpoints
|--------------------------------------------------------------------------
|
| GET    /Missions
| GET    /Missions/{id}
| POST   /Missions
| PUT    /Missions/{id}
| DELETE /Missions/{id}
|
*/

const BASE_URL = '/mission';

export const getMissions = async (params = {}) => {
  const response = await apiClient.get(BASE_URL, {
    params,
  });

  return response;
};

export const getMissionById = async (id) => {
  const response = await apiClient.get(`${BASE_URL}/${id}`);

  return response;
};

export const createMission = async (mission) => {
  console.log('api mission:', mission);
  const response = await apiClient.post(BASE_URL, mission);

  return response;
};

export const updateMission = async (mission) => {
  console.log('API UPDATE mission:', mission);

  const response = await apiClient.put(BASE_URL, mission);

  return response;
};

export const deleteMission = async (id) => {
  const response = await apiClient.delete(`${BASE_URL}/${id}`);

  return response;
};
