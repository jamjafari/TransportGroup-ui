import { apiClient } from '@/services';

/*
|--------------------------------------------------------------------------
| FuelRecord API Endpoints
|--------------------------------------------------------------------------
|
| GET    /FuelRecords
| GET    /FuelRecords/{id}
| POST   /FuelRecords
| PUT    /FuelRecord/{id}
| DELETE /FuelRecord/{id}
|
*/

const BASE_URL = '/fuelRecord';

export const getFuelRecords = async (params = {}) => {
  const response = await apiClient.get(BASE_URL, {
    params,
  });

  return response;
};

export const getFuelRecordById = async (id) => {
  const response = await apiClient.get(`${BASE_URL}/${id}`);

  return response;
};

export const createFuelRecord = async (fuelRecord) => {
  console.log('api fuelRecord:', fuelRecord);
  const response = await apiClient.post(BASE_URL, fuelRecord);

  return response;
};

export const updateFuelRecord = async (fuelRecord) => {
  console.log('API UPDATE fuelRecord:', fuelRecord);

  const response = await apiClient.put(BASE_URL, fuelRecord);

  return response;
};

export const deleteFuelRecord = async (id) => {
  const response = await apiClient.delete(`${BASE_URL}/${id}`);

  return response;
};
