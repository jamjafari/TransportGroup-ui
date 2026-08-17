import { apiClient } from '@/services';

const BASE_URL = '/users';

export const getUsers = async (params = {}) => {
  const response = await apiClient.get(BASE_URL, { params });
  return response;
};

export const getUserById = async (id) => {
  const response = await apiClient.get(`${BASE_URL}/${id}`);
  return response;
};

export const createUser = async (user) => {
  const response = await apiClient.post(BASE_URL, user);
  return response;
};

export const updateUser = async (user) => {
  const response = await apiClient.put(BASE_URL, user);
  return response;
};

export const deleteUser = async (id) => {
  const response = await apiClient.delete(`${BASE_URL}/${id}`);
  return response;
};

export const resetPassword = async (payload) => {
  const response = await apiClient.put(`${BASE_URL}/Reset-Password`, payload);
  return response;
};

export const changePassword = async (payload) => {
  const response = await apiClient.post(`${BASE_URL}/change-password`, payload);
  return response;
};
