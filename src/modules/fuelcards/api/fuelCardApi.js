import { apiClient } from '@/services';

/*
|--------------------------------------------------------------------------
| Driver API Endpoints
|--------------------------------------------------------------------------
|
| GET    /fuelCards
| GET    /fuelCards/{id}
| POST   /fuelCards
| PUT    /fuelCards/{id}
| DELETE /fuelCards/{id}
|
*/

const BASE_URL = '/fuelCard';

export const getFuelCards = async (params = {}) => {
  const response = await apiClient.get(BASE_URL, {
    params,
  });

  return response;
};

export const getFuelCardById = async (id) => {
  const response = await apiClient.get(`${BASE_URL}/${id}`);

  return response;
};

export const createFuelCard = async (fuelCard) => {
  // console.log('api fuelCard:', fuelCard);
  const response = await apiClient.post(BASE_URL, fuelCard);

  return response;
};

export const updateFuelCard = async (fuelCard) => {
  // console.log('API UPDATE FuelCard:', fuelCard);

  const response = await apiClient.put(BASE_URL, fuelCard);

  return response;
};

export const deleteFuelCard = async (id) => {
  const response = await apiClient.delete(`${BASE_URL}/${id}`);

  return response;
};
