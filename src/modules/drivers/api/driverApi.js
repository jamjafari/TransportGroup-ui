import { apiClient } from '@/services';

/*
|--------------------------------------------------------------------------
| Vehicle API Endpoints
|--------------------------------------------------------------------------
|
| GET    /drivers
| GET    /drivers/{id}
| POST   /drivers
| PUT    /drivers/{id}
| DELETE /drivers/{id}
|
*/

const BASE_URL = '/drivers';

export const getDrivers = async (params = {}) => {
  const response = await apiClient.get(BASE_URL, {
    params,
  });

  return response;
};

export const getDriverById = async (Id) => {
  const response = await apiClient.get(`${BASE_URL}/${Id}`);

  return response;
};

export const createDriver = async (vehicle) => {
  const response = await apiClient.post(BASE_URL, vehicle);

  return response;
};

export const updateDriver = async (Id, vehicle) => {
  const response = await apiClient.put(`${BASE_URL}/${Id}`, vehicle);

  return response;
};

export const deleteDriver = async (Id) => {
  const response = await apiClient.delete(`${BASE_URL}/${Id}`);

  return response;
};
