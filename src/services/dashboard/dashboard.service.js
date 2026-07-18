import {
  VehicleMock,
  DriversMock,
  FuelRecordMock,
  ExpenseMock,
  MissionMock,
  MissionTrendMock,
  FuelConsumptionMock,
  ExpensesMock,
  MonthlyDistanceMock,
  VehicleUsageMock,
  DriverPerformanceMock,
  LatestActivitiesMock,
  InsurancesMock,
  ServiceReminderMock,
  AlertsMock,
} from './dashboard.mock';

const delay = (data, ms = 150) =>
  new Promise((resolve) => setTimeout(() => resolve(data), ms));

const dashboardService = {
  async getDashboard() {
    return delay({
      summary: await this.getSummary(),

      charts: {
        fuelConsumption: await this.getFuelConsumption(),
        vehicleStatus: await this.getVehicleStatus(),
        vehicleUsage: await this.getVehicleUsage(),
        fuelCost: await this.getFuelCost(),
        monthlyDistance: await this.getMonthlyDistance(),
        driverPerformance: await this.getDriverPerformance(),
        misiontrend: await this.getMissionTrend(),
        misiontrend: await this.getExpense(),
      },

      tables: {
        latestActivities: await this.getLatestActivities(),
        vehicles: await this.getVehicles(),
        drivers: await this.getDrivers(),
        fuelRecords: await this.getFuelRecords(),
        expenses: await this.getExpenses(),
        missions: await this.getMissions(),
        insurances: await this.getInsurances(),
        serviceReminders: await this.getServiceReminders(),
      },
    });
  },

  async getSummary() {
    return delay({
      vehicleCount: VehicleMock.length,
      driverCount: DriversMock.length,
      missionCount: MissionMock.length,
      expenseCount: ExpensesMock.length,
      alerts: await this.getAlerts(),
    });
  },
  async getAlerts() {
    return delay(AlertsMock);
  },
  async getFuelConsumption() {
    return delay(FuelConsumptionMock);
  },

  async getExpense() {
    return delay(ExpenseMock);
  },

  async getVehicleStatus() {
    return delay(VehicleUsageMock);
  },

  async getVehicleUsage() {
    return delay(VehicleUsageMock);
  },

  async getFuelCost() {
    return delay(ExpensesMock);
  },

  async getMonthlyDistance() {
    return delay(MonthlyDistanceMock);
  },

  async getExpenses() {
    return delay(ExpensesMock);
  },

  async getMissions() {
    return delay(MissionMock);
  },
  async getMissionTrend() {
    return delay(MissionTrendMock);
  },

  async getDriverPerformance() {
    return delay(DriverPerformanceMock);
  },

  async getLatestActivities() {
    return delay(LatestActivitiesMock);
  },

  async getVehicles() {
    return delay(VehicleMock);
  },

  async getDrivers() {
    return delay(DriversMock);
  },

  async getFuelRecords() {
    return delay(FuelRecordMock);
  },

  async getInsurances() {
    return delay(InsurancesMock);
  },

  async getServiceReminders() {
    return delay(ServiceReminderMock);
  },
};
// console.log('Service Called');

// console.log(FuelConsumptionMock);
export default dashboardService;
