import { apiClient } from '@/services';

/*
|--------------------------------------------------------------------------
| Tire Assignment API Endpoints
|--------------------------------------------------------------------------
|
| GET    /TireAssignments?vehicleId={id}
| POST   /TireAssignments
| POST   /TireAssignments/{id}/unassign
|
*/

const BASE_URL = '/TireAssignments';

export const getTireAssignmentsByVehicle = async (vehicleId) => {
  const response = await apiClient.get(BASE_URL, {
    params: { vehicleId },
  });

  return response;
};

export const createTireAssignment = async (assignment) => {
  const response = await apiClient.post(BASE_URL, assignment);

  return response;
};

export const unassignTire = async (id, payload) => {
  const response = await apiClient.post(`${BASE_URL}/${id}/unassign`, payload);

  return response;
};
