import { apiClient } from '@/services';

/*
|--------------------------------------------------------------------------
| Driver API Endpoints
|--------------------------------------------------------------------------
|
| GET    /drivers
| GET    /drivers/{id}
| POST   /drivers
| PUT    /drivers/{id}
| DELETE /drivers/{id}
|
*/

const BASE_URL = '/driver';

export const getDrivers = async (params = {}) => {
  const response = await apiClient.get(BASE_URL, {
    params,
  });

  return response;
};

export const getDriverById = async (id) => {
  const response = await apiClient.get(`${BASE_URL}/${id}`);

  return response;
};

export const createDriver = async (driver) => {
  console.log('api driver:', driver);
  const response = await apiClient.post(BASE_URL, driver);

  return response;
};

export const updateDriver = async (driver) => {
  console.log('API UPDATE DRIVER:', driver);

  const response = await apiClient.put(BASE_URL, driver);

  return response;
};

export const deleteDriver = async (id) => {
  const response = await apiClient.delete(`${BASE_URL}/${id}`);

  return response;
};
