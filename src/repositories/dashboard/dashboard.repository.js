import BaseRepository from '../BaseRepository';
import dashboardSearchFilter from '@/pages/dashboard/utils/DashboardSearchFilter';

import dashboardService from '../../services/dashboard/dashboard.service';

class DashboardRepository extends BaseRepository {
  constructor() {
    super(dashboardService);
  }

  getFuelConsumption = async (filters = {}) => {
    const data = await this.service.getFuelConsumption();

    const filteredData = dashboardSearchFilter(
      data,
      filters,
      ['vehicleId', 'driverId', 'missionId', 'fuelType', 'dateRange'],
      {
        dateField: 'date',
      },
    );

    const result = Array.from({ length: 12 }, (_, index) => ({
      month: index + 1,
      fuel: 0,
    }));

    filteredData.forEach((item) => {
      const month = new Date(item.date).getMonth();

      result[month].fuel += item.fuel;
    });

    return result;
  };

  getVehicleStatus = async () => {
    return this.service.getVehicleStatus();
  };
  // getVehicleUsage = async () => {
  //   return this.service.getVehicleUsage();
  // };
  getVehicleUsage = async (filters = {}) => {
    const data = await this.service.getVehicleUsage();

    return dashboardSearchFilter(data, filters, ['dateRange'], {
      dateField: 'Date',
    });
  };
  getVehicleSummary = async (filters = {}) => {
    const vehicles = await this.getVehicles();

    return {
      total: vehicles.length,

      active: vehicles.filter((x) => x.status === 'Active').length,

      mission: vehicles.filter((x) => x.status === 'Mission').length,

      inactive: vehicles.filter((x) => x.status === 'Inactive').length,

      repair: vehicles.filter((x) => x.status === 'Repair').length,
    };
  };
  getSummary = async () => {
    return this.service.getSummary();
  };
  getFuelCost = async () => {
    return this.service.getFuelCost();
  };
  getMonthlyDistance = async (filters = {}) => {
    const data = await this.service.getMonthlyDistance();

    const filteredData = dashboardSearchFilter(
      data,
      filters,
      ['vehicleId', 'driverId', 'missionId', 'dateRange'],
      {
        dateField: 'missionDate',
      },
    );

    const result = Array.from({ length: 12 }, (_, index) => ({
      month: index + 1,
      distanceKm: 0,
    }));

    filteredData.forEach((item) => {
      const month = new Date(item.missionDate).getMonth();

      result[month].distanceKm += item.distanceKm;
    });

    return result;
  };
  getExpenses = async (filters = {}) => {
    const expense = await this.service.getExpenses();

    return dashboardSearchFilter(
      expense,
      filters,
      ['vehicleId', 'expenseTypeId', 'dateRange', 'statusColor'],
      {
        dateField: 'expenseDate',
      },
    );
  };
  getExpense = async (filters = {}) => {
    const expense = await this.service.getExpense();

    const filteredExpenses = dashboardSearchFilter(
      expense,
      filters,
      ['vehicleId', 'expenseTypeId', 'dateRange'],
      {
        dateField: 'expenseDate',
      },
    );

    const groupedByMonth = Array.from({ length: 12 }, (_, index) => ({
      month: index + 1,
      amount: 0,
    }));

    filteredExpenses.forEach((expense) => {
      const month = new Date(expense.expenseDate).getMonth();

      groupedByMonth[month].amount += expense.amount;
    });

    return groupedByMonth;
  };

  getMissions = async (filters = {}) => {
    const data = await this.service.getMissions();
    return dashboardSearchFilter(
      data,
      filters,
      ['vehicleId', 'driverId', 'missionId', 'dateRange', 'statusColor'],
      {
        dateField: 'missionDate',
      },
    );
  };
  getMissionSummary = async (filters = {}) => {
    const missions = await this.getMissions();

    return {
      total: missions.length,

      Completed: missions.filter((x) => x.status === 'Completed').length,

      Running: missions.filter((x) => x.status === 'Running').length,

      cancelled: missions.filter((x) => x.status === 'Cancelled').length,
    };
  };
  getMissionTrend = async (filters = {}) => {
    const data = await this.service.getMissionTrend();

    const filteredData = dashboardSearchFilter(
      data,
      filters,
      ['vehicleId', 'driverId', 'dateRange'],
      {
        dateField: 'missionDate',
      },
    );

    const result = Array.from({ length: 12 }, (_, index) => ({
      month: index + 1,
      missionCount: 0,
    }));

    filteredData.forEach((item) => {
      const month = new Date(item.missionDate).getMonth();

      result[month].missionCount += 1;
    });

    return result;
  };
  getDriverPerformance = async () => {
    return this.service.getDriverPerformance();
  };
  getLatestActivities = async (filters = {}) => {
    const data = await this.service.getLatestActivities();

    return dashboardSearchFilter(
      data,
      filters,
      ['vehicleId', 'driverId', 'missionId', 'dateRange'],
      {
        dateField: 'date',
      },
    );
  };
  getLatestActivitiesSummary = async (filters = {}) => {
    const latestactivity = await this.getLatestActivities();

    return {
      total: latestactivity.length,

      mission: latestactivity.filter((x) => x.type === 'Mission').length,

      expense: latestactivity.filter((x) => x.type === 'Expense').length,

      fuel: latestactivity.filter((x) => x.type === 'Fuel').length,

      service: latestactivity.filter((x) => x.type === 'Service').length,

      insurance: latestactivity.filter((x) => x.type === 'Insurance').length,
    };
  };
  getVehicles = async (filters = {}) => {
    const data = await this.service.getVehicles();

    return dashboardSearchFilter(data, filters, [
      'vehicleId',
      'driverId',
      'statusColor',
    ]);
  };
  getDrivers = async (filters = {}) => {
    const data = await this.service.getDrivers();

    return dashboardSearchFilter(data, filters, ['driverId', 'statusColor']);
  };
  getDriverSummary = async (filters = {}) => {
    const drivers = await this.getDrivers();

    return {
      total: drivers.length,

      active: drivers.filter((x) => x.status === 'Active').length,

      mission: drivers.filter((x) => x.status === 'Mission').length,

      inactive: drivers.filter((x) => x.status === 'Inactive').length,

      repair: drivers.filter((x) => x.status === 'Repair').length,
    };
  };
  getFuelRecords = async (filters = {}) => {
    const data = await this.service.getFuelRecords();
    return dashboardSearchFilter(
      data,
      filters,
      ['vehicleId', 'driverId', 'dateRange'],
      {
        dateField: 'fuelDate',
      },
    );
  };

  getInsurances = async (filters = {}) => {
    const data = await this.service.getInsurances();
    return dashboardSearchFilter(
      data,
      filters,
      ['vehicleId', 'dateRange', 'statusColor'],
      {
        dateField: 'expireDate',
      },
    );
  };
  getServiceReminders = async (filters = {}) => {
    const data = await this.service.getServiceReminders();
    return dashboardSearchFilter(data, filters, ['vehicleId', 'statusColor']);
  };

  getAlerts = async (filters = {}) => {
    const alerts = await this.service.getAlerts();

    return dashboardSearchFilter(alerts, filters, [
      'vehicleId',
      'driverId',
      'missionId',
    ]);
  };
  getFleet = async (filters = {}) => {
    return await this.service.getFleet();
  };
  getFinancial = async (filters = {}) => {
    return await this.service.getFinancial();
  };
  getFinancialByVehicle = async (filters = {}) => {
    return await this.service.getFinancialByVehicle();
  };
  getFuelCost = async (filters = {}) => {
    return await this.service.getFuelCost();
  };
  getInsuranceReport = async (filters = {}) => {
    const result = await this.service.getInsuranceReport();
    console.log('Repository Result:', result);
    return result;
  };
  getServiceReport = async (filters = {}) => {
    return await this.service.getServiceReport();
  };
  getDateRangeFinancials = async (filters = {}) => {
    return await this.service.getExpenses();
  };
  getDateRangeFinancialSummary = async (filters = {}) => {
    const expenses = await this.service.getExpenses();

    return {
      total: expenses.length,

      Approved: expenses.filter((x) => x.status === 'Approved').length,

      Rejected: expenses.filter((x) => x.status === 'Rejected').length,

      Pending: expenses.filter((x) => x.status === 'Pending').length,
    };
  };
}

export default new DashboardRepository();
