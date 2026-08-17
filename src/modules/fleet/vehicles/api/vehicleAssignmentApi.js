import { apiClient } from '@/services';

const BASE_URL = '/VehicleAssignment';

export const getAssignmentsByVehicle = async (vehicleId) => {
  const response = await apiClient.get(BASE_URL, { params: { vehicleId } });
  return response;
};

export const getCurrentDriverByVehicle = async (vehicleId) => {
  const response = await apiClient.get(
    `${BASE_URL}/current-driver/${vehicleId}`,
  );
  return response;
};

export const createAssignment = async (assignment) => {
  const response = await apiClient.post(BASE_URL, assignment);
  return response;
};

export const finishAssignment = async (id) => {
  const response = await apiClient.post(`${BASE_URL}/${id}/finish`);
  return response;
};
