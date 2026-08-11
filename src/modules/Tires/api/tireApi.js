import { apiClient } from '@/services';

/*
|--------------------------------------------------------------------------
| Driver API Endpoints
|--------------------------------------------------------------------------
|
| GET    /Tires
| GET    /Tires/{id}
| POST   /Tires
| PUT    /Tires/{id}
| DELETE /Tires/{id}
|
*/

const BASE_URL = '/Tire';

export const getTires = async (params = {}) => {
  const response = await apiClient.get(BASE_URL, {
    params,
  });

  return response;
};

export const getTireById = async (id) => {
  const response = await apiClient.get(`${BASE_URL}/${id}`);

  return response;
};

export const createTire = async (Tire) => {
  console.log('api Tire:', Tire);
  const response = await apiClient.post(BASE_URL, Tire);

  return response;
};

export const updateTire = async (Tire) => {
  console.log('API UPDATE DRIVER:', Tire);

  const response = await apiClient.put(BASE_URL, Tire);

  return response;
};

export const deleteTire = async (id) => {
  const response = await apiClient.delete(`${BASE_URL}/${id}`);

  return response;
};
