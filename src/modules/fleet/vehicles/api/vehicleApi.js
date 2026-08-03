import { apiClient } from '@/services';

/*
|--------------------------------------------------------------------------
| Vehicle API Endpoints
|--------------------------------------------------------------------------
|
| GET    /vehicles
| GET    /vehicles/{id}
| POST   /vehicles
| PUT    /vehicles/{id}
| DELETE /vehicles/{id}
|
*/

const BASE_URL = '/vehicles';

export const getVehicles = async (params = {}) => {
  const response = await apiClient.get(BASE_URL, {
    params,
  });

  return response;
};

export const getVehicleById = async (Id) => {
  const response = await apiClient.get(`${BASE_URL}/${Id}`);

  return response;
};

export const createVehicle = async (vehicle) => {
  const response = await apiClient.post(BASE_URL, vehicle);

  return response;
};

export const updateVehicle = async (Id, vehicle) => {
  const response = await apiClient.put(`${BASE_URL}/${Id}`, vehicle);

  return response;
};

export const deleteVehicle = async (Id) => {
  const response = await apiClient.delete(`${BASE_URL}/${Id}`);

  return response;
};
