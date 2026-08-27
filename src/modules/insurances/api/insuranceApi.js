import { apiClient } from '@/services';

/*
|--------------------------------------------------------------------------
| Insurance API Endpoints
|--------------------------------------------------------------------------
|
| GET    /Insurances
| GET    /Insurances/{id}
| POST   /Insurances
| PUT    /Insurance/{id}
| DELETE /Insurance/{id}
|
*/

const BASE_URL = '/insurance';

export const getInsurances = async (params = {}) => {
  const response = await apiClient.get(BASE_URL, {
    params,
  });

  return response;
};

export const getInsuranceById = async (id) => {
  const response = await apiClient.get(`${BASE_URL}/${id}`);

  return response;
};

export const createInsurance = async (insurance) => {
  console.log('api insurance:', insurance);
  const response = await apiClient.post(BASE_URL, insurance);

  return response;
};

export const updateInsurance = async (insurance) => {
  console.log('API UPDATE insurance:', insurance);

  const response = await apiClient.put(BASE_URL, insurance);

  return response;
};

export const deleteInsurance = async (id) => {
  const response = await apiClient.delete(`${BASE_URL}/${id}`);

  return response;
};
