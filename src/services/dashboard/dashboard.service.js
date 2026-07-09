import { createService } from '../serviceFactory';

const service = createService('/dashboard');

const dashboardService = {
  getSummary() {
    return service.get('/summary');
  },

  getFuelConsumption() {
    return service.get('/fuel-consumption');
  },

  getVehicleStatus() {
    return service.get('/vehicle-status');
  },
  getVehicleUsage() {
    return service.get('/vehicle-usage');
  },
  getMonthlyDistance() {
    return service.get('/monthly-distance');
  },
  getExpenses() {
    return service.get('/expenses');
  },
  getMissions() {
    return service.get('/missions');
  },
  getDriverPerformance() {
    return service.get('/driver-performance');
  },
  getLatestActivities() {
    return service.get('/latest-activities');
  },
  getVehicles() {
    return service.get('/vehicles/dashboard');
  },
  getDrivers() {
    return service.get('/drivers/dashboard');
  },
  getFuelRecords() {
    return service.get('/fuel-records/dashboard');
  },
  getExpenses() {
    return service.get('/expenses/dashboard');
  },
  getMissions() {
    return service.get('/missions/dashboard');
  },
  getInsurances() {
    return service.get('/insurances/dashboard');
  },
  getServiceReminders() {
    return service.get('/service-reminders/dashboard');
  },
};

export default dashboardService;
