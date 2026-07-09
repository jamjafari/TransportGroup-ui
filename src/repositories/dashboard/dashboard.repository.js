import BaseRepository from '../BaseRepository';

import dashboardService from '../../services/dashboard/dashboard.service';

class DashboardRepository extends BaseRepository {
  constructor() {
    super(dashboardService);
  }

  async getFuelConsumption() {
    return this.service.getFuelConsumption();
  }

  async getVehicleStatus() {
    return this.service.getVehicleStatus();
  }
  async getVehicleUsage() {
    return this.service.getVehicleUsage();
  }
  async getSummary() {
    return this.service.getSummary();
  }
  async getFuelCost() {
    return this.service.getFuelCost();
  }
  async getMonthlyDistance() {
    return this.service.getMonthlyDistance();
  }
  async getExpenses() {
    return this.service.getExpenses();
  }
  async getMissions() {
    return this.service.getMissions();
  }
  async getDriverPerformance() {
    return this.service.getDriverPerformance();
  }
  async getLatestActivities() {
    return this.service.getLatestActivities();
  }
  async getVehicles() {
    return this.service.getVehicles();
  }
  async getDrivers() {
    return this.service.getDrivers();
  }
  async getFuelRecords() {
    return this.service.getFuelRecords();
  }
  async getExpenses() {
    return this.service.getExpenses();
  }
  async getMissions() {
    return this.service.getMissions();
  }
  async getInsurances() {
    return this.service.getInsurances();
  }
  async getServiceReminders() {
    return this.service.getServiceReminders();
  }
}

export default new DashboardRepository();
