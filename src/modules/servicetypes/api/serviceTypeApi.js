import { apiClient } from '@/services';

/*
|--------------------------------------------------------------------------
| ServiceType API Endpoints
|--------------------------------------------------------------------------
|
| GET    /ServiceTypes
| GET    /ServiceTypes/{id}
| POST   /ServiceTypes
| PUT    /ServiceTypes/{id}
| DELETE /ServiceTypes/{id}
|
*/

const BASE_URL = '/serviceType';

export const getServiceTypes = async (params = {}) => {
  const response = await apiClient.get(BASE_URL, {
    params,
  });

  return response;
};

export const getServiceTypeById = async (id) => {
  const response = await apiClient.get(`${BASE_URL}/${id}`);

  return response;
};

export const createServiceType = async (serviceType) => {
  console.log('api ServiceType:', serviceType);
  const response = await apiClient.post(BASE_URL, serviceType);

  return response;
};

export const updateServiceType = async (serviceType) => {
  console.log('API UPDATE ServiceType:', serviceType);

  const response = await apiClient.put(BASE_URL, serviceType);

  return response;
};

export const deleteServiceType = async (id) => {
  const response = await apiClient.delete(`${BASE_URL}/${id}`);

  return response;
};
