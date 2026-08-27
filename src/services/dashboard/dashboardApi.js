import { apiClient } from '@/services';

export const getDashboardSummary = async () => {
  return await apiClient.get('/dashboard/summary');
};

export const getDashboardAlerts = async () => {
  return await apiClient.get('/dashboard/alerts');
};
export const getMonthlyExpense = async () => {
  return await apiClient.get('/dashboard/monthly-expense');
};
export const getExpensesRaw = async () => {
  return await apiClient.get('/dashboard/expenses');
};
export const getFuelConsumptionRaw = async () => {
  return await apiClient.get('/dashboard/fuelrecords');
};
export const getMissionsRaw = async () => {
  return await apiClient.get('/dashboard/missions');
};
export const getMonthlyDistance = async () => {
  return await apiClient.get('/dashboard/missions');
};
export const getVehiclesDashboard = async () => {
  return await apiClient.get('/dashboard/vehicles');
};
export const getDriversDashboard = async () => {
  return await apiClient.get('/dashboard/drivers');
};
export const getExpenseDashborad = async () => {
  return await apiClient.get('/dashboard/expenseDashboard');
};
export const getMissionsDashboard = async () => {
  return await apiClient.get('/dashboard/missionDashboard');
};

export const getFuelRecoredDashboard = async () => {
  return await apiClient.get('/dashboard/fuelRecoredDashboard');
};
export const getServiceDashboard = async () => {
  return await apiClient.get('/dashboard/seviceDashboard');
};
export const getComplianceAlerts = async () => {
  return await apiClient.get('/dashboard/compliance-alerts');
};
export const getLatestActivities = async (take = 20) => {
  return await apiClient.get('/dashboard/latest-activities', {
    params: { take },
  });
};
