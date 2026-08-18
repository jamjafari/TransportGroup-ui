import { apiClient } from '@/services';

const BASE_URL = '/accidents';

export const getAccidents = async () => await apiClient.get(BASE_URL);
export const getAccidentById = async (id) =>
  await apiClient.get(`${BASE_URL}/${id}`);
export const createAccident = async (accident) =>
  await apiClient.post(BASE_URL, accident);
export const updateAccident = async (accident) =>
  await apiClient.put(BASE_URL, accident);
export const deleteAccident = async (id) =>
  await apiClient.delete(`${BASE_URL}/${id}`);
