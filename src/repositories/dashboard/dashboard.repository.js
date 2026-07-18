import BaseRepository from '../BaseRepository';

import dashboardService from '../../services/dashboard/dashboard.service';

class DashboardRepository extends BaseRepository {
  constructor() {
    super(dashboardService);
  }

  getFuelConsumption = async () => {
    // console.log('Repository Called');
    return this.service.getFuelConsumption();
  };

  getVehicleStatus = async () => {
    return this.service.getVehicleStatus();
  };
  getVehicleUsage = async () => {
    return this.service.getVehicleUsage();
  };
  getSummary = async () => {
    return this.service.getSummary();
  };
  getFuelCost = async () => {
    return this.service.getFuelCost();
  };
  getMonthlyDistance = async () => {
    return this.service.getMonthlyDistance();
  };
  getExpenses = async () => {
    return this.service.getExpenses();
  };
  getExpense = async () => {
    return this.service.getExpense();
  };
  getMissions = async () => {
    return this.service.getMissions();
  };
  getMissionTrend = async () => {
    return this.service.getMissionTrend();
  };
  getDriverPerformance = async () => {
    return this.service.getDriverPerformance();
  };
  getLatestActivities = async () => {
    return this.service.getLatestActivities();
  };
  getVehicles = async () => {
    return this.service.getVehicles();
  };
  getDrivers = async () => {
    return this.service.getDrivers();
  };
  getFuelRecords = async () => {
    return this.service.getFuelRecords();
  };

  getInsurances = async () => {
    return this.service.getInsurances();
  };
  getServiceReminders = async () => {
    return this.service.getServiceReminders();
  };
  getAlerts = async () => {
    return this.service.getAlerts();
  };
}

export default new DashboardRepository();
