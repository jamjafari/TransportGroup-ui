import { apiClient } from '@/services';

/*
|--------------------------------------------------------------------------
| Expense API Endpoints
|--------------------------------------------------------------------------
|
| GET    /expenses
| GET    /expenses/{id}
| POST   /expenses
| PUT    /expenses/{id}
| DELETE /expenses/{id}
|
*/

const BASE_URL = '/expense';

export const getExpenses = async (params = {}) => {
  const response = await apiClient.get(BASE_URL, {
    params,
  });

  return response;
};

export const getExpenseById = async (id) => {
  const response = await apiClient.get(`${BASE_URL}/${id}`);

  return response;
};

export const createExpense = async (expense) => {
  console.log('api expense:', expense);
  const response = await apiClient.post(BASE_URL, expense);

  return response;
};

export const updateExpense = async (expense) => {
  console.log('API UPDATE expense:', expense);

  const response = await apiClient.put(BASE_URL, expense);

  return response;
};

export const deleteExpense = async (id) => {
  const response = await apiClient.delete(`${BASE_URL}/${id}`);

  return response;
};
