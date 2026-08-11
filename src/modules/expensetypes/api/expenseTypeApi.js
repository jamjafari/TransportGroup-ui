import { apiClient } from '@/services';

/*
|--------------------------------------------------------------------------
| Driver API Endpoints
|--------------------------------------------------------------------------
|
| GET    /expenseTypes
| GET    /expenseTypes/{id}
| POST   /expenseTypes
| PUT    /expenseTypes/{id}
| DELETE /expenseTypes/{id}
|
*/

const BASE_URL = '/expenseType';

export const getExpenseTypes = async (params = {}) => {
  const response = await apiClient.get(BASE_URL, {
    params,
  });

  return response;
};

export const getExpenseTypeById = async (id) => {
  const response = await apiClient.get(`${BASE_URL}/${id}`);

  return response;
};

export const createExpenseType = async (expenseType) => {
  console.log('api expenseType:', expenseType);
  const response = await apiClient.post(BASE_URL, expenseType);

  return response;
};

export const updateExpenseType = async (expenseType) => {
  // console.log('API UPDATE expenseType:', expenseType);

  const response = await apiClient.put(BASE_URL, expenseType);

  return response;
};

export const deleteExpenseType = async (id) => {
  const response = await apiClient.delete(`${BASE_URL}/${id}`);

  return response;
};
