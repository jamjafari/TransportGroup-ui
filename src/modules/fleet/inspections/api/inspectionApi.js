import { apiClient } from '@/services';

const BASE_URL = '/technicalinspections';

export const getInspections = async (params = {}) =>
  await apiClient.get(BASE_URL, { params });
export const getInspectionById = async (id) =>
  await apiClient.get(`${BASE_URL}/${id}`);
export const createInspection = async (inspection) =>
  await apiClient.post(BASE_URL, inspection);
export const updateInspection = async (inspection) =>
  await apiClient.put(BASE_URL, inspection);
export const deleteInspection = async (id) =>
  await apiClient.delete(`${BASE_URL}/${id}`);
