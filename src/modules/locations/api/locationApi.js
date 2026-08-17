import { apiClient } from '@/services';

/*
|--------------------------------------------------------------------------
| location API Endpoints
|--------------------------------------------------------------------------
|
| GET    /locations
| GET    /locations/{id}
| POST   /locations
| PUT    /locations/{id}
| DELETE /locations/{id}
|
*/

const BASE_URL = '/location';

export const getLocations = async (params = {}) => {
  const response = await apiClient.get(BASE_URL, {
    params,
  });

  return response;
};

export const getLocationById = async (id) => {
  const response = await apiClient.get(`${BASE_URL}/${id}`);

  return response;
};

export const createLocation = async (location) => {
  console.log('api location:', location);
  const response = await apiClient.post(BASE_URL, location);

  return response;
};

export const updateLocation = async (location) => {
  console.log('API UPDATE LOCATION:', location);

  const response = await apiClient.put(BASE_URL, location);

  return response;
};

export const deleteLocation = async (id) => {
  const response = await apiClient.delete(`${BASE_URL}/${id}`);

  return response;
};
