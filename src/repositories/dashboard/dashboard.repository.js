import BaseRepository from '../BaseRepository';
import dashboardSearchFilter from '@/pages/dashboard/utils/DashboardSearchFilter';

import dashboardService from '../../services/dashboard/dashboard.service';

class DashboardRepository extends BaseRepository {
  constructor() {
    super(dashboardService);
  }

  // =========================================================
  // Summary
  // =========================================================

  getSummary = async () => {
    return this.service.getSummary();
  };

  // =========================================================
  // Alerts
  // =========================================================

  getAlerts = async (filters = {}) => {
    const data = await this.service.getAlerts();

    return dashboardSearchFilter(data, filters, [
      'vehicleId',
      'driverId',
      'missionId',
    ]);
  };

  getComplianceAlerts = async (filters = {}) => {
    const data = await this.service.getComplianceAlerts();

    return dashboardSearchFilter(data, filters, ['vehicleId'], {
      dateField: 'expiryDate',
    });
  };

  // =========================================================
  // Fuel
  // =========================================================

  getFuelConsumption = async (filters = {}) => {
    const data = await this.service.getFuelConsumption();

    const filteredData = dashboardSearchFilter(
      data,
      filters,
      ['vehicleId', 'driverId', 'fuelType', 'dateRange'],
      {
        dateField: 'fuelDate',
      },
    );

    const result = Array.from({ length: 12 }, (_, index) => ({
      month: index + 1,
      fuelAmount: 0,
    }));

    filteredData.forEach((item) => {
      if (!item.fuelDate) return;

      const month = new Date(item.fuelDate).getMonth();

      if (month >= 0 && month < 12) {
        result[month].fuelAmount += Number(item.fuelAmount) || 0;
      }
    });

    return result;
  };

  getFuelRecordsDashboard = async (filters = {}) => {
    const data = await this.service.getFuelRecordsDashboard();

    return dashboardSearchFilter(
      data,
      filters,
      ['vehicleId', 'driverId', 'dateRange'],
      {
        dateField: 'fuelDate',
      },
    );
  };

  getDateRangeFuelCosts = async (filters = {}) => {
    const data = await this.service.getFuelRecordsDashboard();

    return dashboardSearchFilter(
      data,
      filters,
      ['vehicleId', 'driverId', 'dateRange'],
      {
        dateField: 'fuelDate',
      },
    );
  };

  // =========================================================
  // Expense
  // =========================================================

  getExpenses = async (filters = {}) => {
    const data = await this.service.getExpenses();

    return dashboardSearchFilter(
      data,
      filters,
      ['vehicleId', 'expenseTypeId', 'dateRange'],
      {
        dateField: 'expenseDate',
      },
    );
  };

  getExpenseDashboard = async (filters = {}) => {
    const data = await this.service.getExpenseDashboard();

    return dashboardSearchFilter(
      data,
      filters,
      ['vehicleId', 'expenseTypeId', 'dateRange'],
      {
        dateField: 'expenseDate',
      },
    );
  };

  getMonthlyExpense = async (filters = {}) => {
    const data = await this.service.getMonthlyExpense();

    return dashboardSearchFilter(
      data,
      filters,
      ['vehicleId', 'expenseTypeId', 'dateRange'],
      {
        dateField: 'expenseDate',
      },
    );
  };

  getExpense = async (filters = {}) => {
    const data = await this.service.getExpenses();

    const filteredExpenses = dashboardSearchFilter(
      data,
      filters,
      ['vehicleId', 'expenseTypeId', 'dateRange'],
      {
        dateField: 'expenseDate',
      },
    );

    const result = Array.from({ length: 12 }, (_, index) => ({
      month: index + 1,
      amount: 0,
    }));

    filteredExpenses.forEach((expense) => {
      if (!expense.expenseDate) return;

      const month = new Date(expense.expenseDate).getMonth();

      if (month >= 0 && month < 12) {
        result[month].amount += Number(expense.amount) || 0;
      }
    });

    return result;
  };

  getDateRangeFinancials = async (filters = {}) => {
    const data = await this.service.getExpenses();

    return dashboardSearchFilter(
      data,
      filters,
      ['vehicleId', 'expenseTypeId', 'dateRange'],
      {
        dateField: 'expenseDate',
      },
    );
  };

  getDateRangeFinancialSummary = async (filters = {}) => {
    const expenses = await this.getExpenses(filters);

    return {
      total: expenses.length,

      Approved: expenses.filter((x) => x.status === 'Approved').length,

      Rejected: expenses.filter((x) => x.status === 'Rejected').length,

      Pending: expenses.filter((x) => x.status === 'Pending').length,
    };
  };

  // =========================================================
  // Missions
  // =========================================================

  getMissions = async (filters = {}) => {
    const data = await this.service.getMissions();

    return dashboardSearchFilter(
      data,
      filters,
      ['vehicleId', 'driverId', 'missionId', 'dateRange'],
      {
        dateField: 'startDate',
      },
    );
  };

  getMissionsDashboard = async (filters = {}) => {
    const data = await this.service.getMissionsDashboard();

    return dashboardSearchFilter(
      data,
      filters,
      ['vehicleId', 'driverId', 'missionId', 'dateRange'],
      {
        dateField: 'startDate',
      },
    );
  };

  getMissionTrend = async (filters = {}) => {
    const data = await this.service.getMissions();

    const filteredData = dashboardSearchFilter(
      data,
      filters,
      ['vehicleId', 'driverId', 'dateRange'],
      {
        dateField: 'startDate',
      },
    );

    const result = Array.from({ length: 12 }, (_, index) => ({
      month: index + 1,
      missionCount: 0,
    }));

    filteredData.forEach((item) => {
      if (!item.startDate) return;

      const month = new Date(item.startDate).getMonth();

      if (month >= 0 && month < 12) {
        result[month].missionCount += 1;
      }
    });

    return result;
  };

  getMonthlyDistance = async (filters = {}) => {
    const data = await this.service.getMissions();

    const filteredData = dashboardSearchFilter(
      data,
      filters,
      ['vehicleId', 'driverId', 'missionId', 'dateRange'],
      {
        dateField: 'startDate',
      },
    );

    const result = Array.from({ length: 12 }, (_, index) => ({
      month: index + 1,
      distanceKm: 0,
    }));

    filteredData.forEach((item) => {
      if (!item.startDate) return;

      const month = new Date(item.startDate).getMonth();

      if (month >= 0 && month < 12) {
        result[month].distanceKm += Number(item.distanceKm) || 0;
      }
    });

    return result;
  };

  // =========================================================
  // Vehicles
  // =========================================================

  getVehiclesDashboard = async (filters = {}) => {
    const data = await this.service.getVehiclesDashboard();

    return dashboardSearchFilter(data, filters, ['vehicleId']);
  };

  getVehicleStatus = async () => {
    return this.service.getVehicleStatus();
  };

  getVehicleUsage = async (filters = {}) => {
    const data = await this.service.getVehicleUsage();

    return dashboardSearchFilter(data, filters, ['vehicleId', 'dateRange'], {
      dateField: 'date',
    });
  };

  // =========================================================
  // Drivers
  // =========================================================

  getDriversDashboard = async (filters = {}) => {
    const data = await this.service.getDriversDashboard();

    return dashboardSearchFilter(data, filters, ['driverId']);
  };

  getDriverPerformance = async () => {
    return this.service.getDriverPerformance();
  };

  // =========================================================
  // Services
  // =========================================================

  getServiceDashboard = async (filters = {}) => {
    const data = await this.service.getServiceDashboard();

    return dashboardSearchFilter(data, filters, ['vehicleId']);
  };

  // =========================================================
  // Latest Activities
  // =========================================================

  getLatestActivities = async (filters = {}) => {
    const data = await this.service.getLatestActivities();

    return dashboardSearchFilter(data, filters, ['dateRange'], {
      dateField: 'date',
    });
  };

  getLatestActivitiesSummary = async (filters = {}) => {
    const activities = await this.getLatestActivities(filters);

    return {
      total: activities.length,

      mission: activities.filter((x) => x.type === 'Mission').length,

      expense: activities.filter((x) => x.type === 'Expense').length,

      fuel: activities.filter((x) => x.type === 'Fuel').length,

      service: activities.filter((x) => x.type === 'Service').length,

      insurance: activities.filter((x) => x.type === 'Insurance').length,
    };
  };
}

export default new DashboardRepository();
