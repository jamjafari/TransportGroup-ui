import { apiClient } from '@/services';

/*
|--------------------------------------------------------------------------
| Service API Endpoints
|--------------------------------------------------------------------------
|
| GET    /Services
| GET    /Services/{id}
| POST   /Services
| PUT    /Services/{id}
| DELETE /Services/{id}
|
*/

const BASE_URL = '/vehicleService';

export const getServices = async (params = {}) => {
  const response = await apiClient.get(BASE_URL, {
    params,
  });

  return response;
};

export const getServiceById = async (id) => {
  const response = await apiClient.get(`${BASE_URL}/${id}`);

  return response;
};

export const createService = async (service) => {
  console.log('api service:', service);
  const response = await apiClient.post(BASE_URL, service);

  return response;
};

export const updateService = async (service) => {
  console.log('API UPDATE service:', service);

  const response = await apiClient.put(BASE_URL, service);

  return response;
};

export const deleteService = async (id) => {
  const response = await apiClient.delete(`${BASE_URL}/${id}`);

  return response;
};
