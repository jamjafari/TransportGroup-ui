import * as dashboardApi from './dashboardApi';

const unwrap = (response, defaultMessage) => {
  if (!response?.success) {
    throw new Error(response?.errors?.[0] || defaultMessage);
  }

  return response.data;
};

const dashboardService = {
  // --------------------------------
  // Dashboard
  // --------------------------------

  async getDashboard() {
    const [
      summary,
      alerts,
      fuelConsumption,
      vehicles,
      drivers,
      expenses,
      missions,
      fuelRecords,
      service,
      compliance,
      latestActivities,
    ] = await Promise.allSettled([
      this.getSummary(),
      this.getAlerts(),
      this.getFuelConsumption(),
      this.getVehiclesDashboard(),
      this.getDriversDashboard(),
      this.getExpenses(),
      this.getMissions(),
      this.getFuelRecordsDashboard(),
      this.getServiceDashboard(),
      this.getComplianceAlerts(),
      this.getLatestActivities(),
    ]);

    const value = (result, fallback = []) =>
      result.status === 'fulfilled' ? result.value : fallback;

    return {
      summary: value(summary, null),

      alerts: value(alerts),

      charts: {
        fuelConsumption: value(fuelConsumption),
        vehicles: value(vehicles),
        drivers: value(drivers),
        expenses: value(expenses),
        missions: value(missions),
      },

      tables: {
        fuelRecords: value(fuelRecords),
        service: value(service),
        compliance: value(compliance),
        latestActivities: value(latestActivities),
      },
    };
  },

  // --------------------------------
  // Summary
  // --------------------------------

  async getSummary() {
    const response = await dashboardApi.getDashboardSummary();

    return unwrap(response, 'خطا در دریافت آمار داشبورد');
  },

  // --------------------------------
  // Alerts
  // --------------------------------

  async getAlerts() {
    const response = await dashboardApi.getDashboardAlerts();

    return unwrap(response, 'خطا در دریافت هشدارهای داشبورد');
  },

  async getComplianceAlerts() {
    const response = await dashboardApi.getComplianceAlerts();

    return unwrap(response, 'خطا در دریافت هشدارهای بیمه و معاینه فنی');
  },

  // --------------------------------
  // Fuel
  // --------------------------------

  async getFuelConsumption() {
    const response = await dashboardApi.getFuelConsumptionRaw();

    return unwrap(response, 'خطا در دریافت اطلاعات مصرف سوخت');
  },

  async getFuelRecordsDashboard() {
    const response = await dashboardApi.getFuelRecoredDashboard();

    return unwrap(response, 'خطا در دریافت گزارش سوخت‌گیری');
  },

  // --------------------------------
  // Expense
  // --------------------------------

  async getExpenses() {
    const response = await dashboardApi.getExpensesRaw();

    return unwrap(response, 'خطا در دریافت هزینه‌ها');
  },

  async getExpenseDashboard() {
    const response = await dashboardApi.getExpenseDashborad();

    return unwrap(response, 'خطا در دریافت گزارش هزینه‌ها');
  },

  async getMonthlyExpense() {
    const response = await dashboardApi.getMonthlyExpense();

    return unwrap(response, 'خطا در دریافت هزینه ماهانه');
  },

  // --------------------------------
  // Mission
  // --------------------------------

  async getMissions() {
    const response = await dashboardApi.getMissionsRaw();

    return unwrap(response, 'خطا در دریافت ماموریت‌ها');
  },

  async getMissionsDashboard() {
    const response = await dashboardApi.getMissionsDashboard();

    return unwrap(response, 'خطا در دریافت گزارش ماموریت‌ها');
  },

  // --------------------------------
  // Vehicles
  // --------------------------------

  async getVehiclesDashboard() {
    const response = await dashboardApi.getVehiclesDashboard();

    return unwrap(response, 'خطا در دریافت اطلاعات خودروها');
  },

  // --------------------------------
  // Drivers
  // --------------------------------

  async getDriversDashboard() {
    const response = await dashboardApi.getDriversDashboard();

    return unwrap(response, 'خطا در دریافت اطلاعات رانندگان');
  },

  // --------------------------------
  // Service
  // --------------------------------

  async getServiceDashboard() {
    const response = await dashboardApi.getServiceDashboard();

    return unwrap(response, 'خطا در دریافت اطلاعات سرویس خودرو');
  },

  // --------------------------------
  // Latest Activities
  // --------------------------------

  async getLatestActivities() {
    const response = await dashboardApi.getLatestActivities();

    return unwrap(response, 'خطا در دریافت آخرین فعالیت‌ها');
  },
};

export default dashboardService;
