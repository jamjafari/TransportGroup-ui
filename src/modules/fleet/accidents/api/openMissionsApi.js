import { apiClient } from '@/services';

export const getOpenMissionsByVehicle = async (vehicleId) =>
  await apiClient.get(`/mission/open-by-vehicle/${vehicleId}`);
