import BaseRepository from '../BaseRepository';
import dashboardSearchFilter from '@/pages/dashboard/utils/DashboardSearchFilter';

import dashboardService from '../../services/dashboard/dashboard.service';
import { persianMonthNames } from '@/utils';
import { getRollingJalaliMonths, getJalaliYearMonth } from '@/utils';

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
    // 1. دریافت رکوردهای واقعی از Backend
    const data = await this.service.getFuelConsumption();

    // 2. اعمال فیلترهای داشبورد
    const filteredData = dashboardSearchFilter(
      data,
      filters,
      ['vehicleId', 'driverId', 'fuelType', 'dateRange'],
      {
        dateField: 'fuelDate',
      },
    );

    const result = getRollingJalaliMonths(12);

    // 4. برای پیدا کردن سریع ماه مقصد
    const indexByKey = new Map(
      result.map((item, index) => [`${item.year}-${item.month}`, index]),
    );

    // 5. تجمیع مصرف سوخت هر ماه
    filteredData.forEach((item) => {
      const jalali = getJalaliYearMonth(item.fuelDate);

      if (!item.fuelDate) return;

      const date = new Date(item.fuelDate);

      if (Number.isNaN(date.getTime())) return;

      const { year, month } = getJalaliYearMonth(date);

      const index = indexByKey.get(`${year}-${month}`);

      if (index === undefined) return;

      result[index].fuelAmount += Number(item.fuelAmount) || 0;
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

    // ۱۲ ماه اخیر شمسی
    const result = getRollingJalaliMonths(12).map((item) => ({
      year: item.year,
      month: item.month,
      monthName: item.monthName,
      amount: 0,
    }));

    // پیدا کردن سریع ماه مقصد
    const indexByKey = new Map(
      result.map((item, index) => [`${item.year}-${item.month}`, index]),
    );

    // تجمیع هزینه‌های هر ماه
    filteredExpenses.forEach((expense) => {
      if (!expense.expenseDate) return;

      const date = new Date(expense.expenseDate);

      if (Number.isNaN(date.getTime())) return;

      const { year, month } = getJalaliYearMonth(date);

      const index = indexByKey.get(`${year}-${month}`);

      if (index === undefined) return;

      result[index].amount += Number(expense.amount) || 0;
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

    const result = getRollingJalaliMonths(12);

    // پیدا کردن سریع ایندکس ماه
    const indexByKey = new Map(
      result.map((item, index) => [`${item.year}-${item.month}`, index]),
    );

    // شمارش مأموریت‌های هر ماه
    filteredData.forEach((item) => {
      if (!item.startDate) return;

      const date = new Date(item.startDate);

      if (Number.isNaN(date.getTime())) return;

      const { year, month } = getJalaliYearMonth(date);

      const index = indexByKey.get(`${year}-${month}`);

      if (index === undefined) return;

      // هر رکورد مأموریت = یک مأموریت
      result[index].missionCount += 1;
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

    // 12 ماه اخیر شمسی
    const result = getRollingJalaliMonths(12).map((item) => ({
      ...item,
      distanceKm: 0,
    }));

    // ایندکس سریع ماه
    const indexByKey = new Map(
      result.map((item, index) => [`${item.year}-${item.month}`, index]),
    );

    // تجمیع مسافت طی‌شده در هر ماه
    filteredData.forEach((item) => {
      if (!item.startDate) return;

      const date = new Date(item.startDate);

      if (Number.isNaN(date.getTime())) return;

      const { year, month } = getJalaliYearMonth(date);

      const index = indexByKey.get(`${year}-${month}`);

      if (index === undefined) return;

      result[index].distanceKm += Number(item.distanceKm) || 0;
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
