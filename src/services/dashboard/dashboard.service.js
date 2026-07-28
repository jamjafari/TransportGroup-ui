import {
  VehicleMock,
  DriversMock,
  FuelRecordMock,
  ExpenseMock,
  ExpenseTypeMock,
  MissionMock,
  FuelConsumptionMock,
  ExpensesMock,
  MonthlyDistanceMock,
  VehicleUsageMock,
  DriverPerformanceMock,
  LatestActivitiesMock,
  InsurancesMock,
  ServiceReminderMock,
  AlertsMock,
  VehicleServicesMock,
} from './dashboard.mock';
import { buildServiceReminders } from '@/pages/dashboard/utils/serviceReminderBuilder';

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
    return delay(MissionMock);
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
  async getFleet() {
    const reminders = buildServiceReminders(VehicleServicesMock, VehicleMock);
    const totalVehicles = VehicleMock.length;

    const active = VehicleMock.filter((x) => x.status === 'Active').length;

    const mission = VehicleMock.filter((x) => x.status === 'Mission').length;

    const repair = VehicleMock.filter((x) => x.status === 'Repair').length;
    const utilization = Math.round((mission / totalVehicles) * 100);

    const availability = Math.round(((active + mission) / totalVehicles) * 100);

    const totalFuel = FuelRecordMock.reduce(
      (sum, item) => sum + item.totalCost,
      0,
    );
    const totalExpense = ExpensesMock.reduce(
      (sum, item) => sum + item.amount,
      0,
    );
    const costPerVehicle = Math.round(
      (totalFuel + totalExpense) / totalVehicles,
    );
    const expiredInsurance = InsurancesMock.filter(
      (x) => x.status === 'Critical',
    ).length;

    const requiredService = reminders.filter(
      (x) => x.status === 'Warning',
    ).length;

    const criticalService = reminders.filter(
      (x) => x.status === 'Critical',
    ).length;
    const averageFuel = Math.round(totalFuel / totalVehicles);

    const averageKm = Math.round(
      VehicleMock.reduce((sum, item) => sum + item.odometer, 0) / totalVehicles,
    );

    const costPerKm = Math.round(
      (totalFuel + totalExpense) / (averageKm / 1000),
    );
    return {
      summary: {
        totalVehicles,
        active,
        mission,
        repair,
      },

      kpi: {
        utilization,

        availability,

        averageFuel,

        averageKm,

        costPerVehicle,

        costPerKm,
      },
      charts: {
        status: {
          labels: ['فعال', 'ماموریت', 'تعمیرگاه'],

          series: [active, mission, repair],
        },

        fuel: {
          categories: [
            'فروردین',
            'اردیبهشت',
            'خرداد',
            'تیر',
            'مرداد',
            'شهریور',
          ],

          series: [
            {
              name: 'مصرف سوخت',

              data: [1200, 1500, 1800, 1700, 2000, 2100],
            },
          ],
        },

        expense: {
          categories: ['سوخت', 'تعمیرات', 'بیمه', 'سرویس'],

          series: [
            {
              name: 'هزینه',

              data: [totalFuel, 12000000, 5000000, totalExpense],
            },
          ],
        },
      },
      financial: {
        totalFuel,
        totalExpense,
        costPerVehicle,
      },

      alerts: {
        expiredInsurance,
        requiredService,
        criticalService,
      },
    };
  },
  async getFinancial() {
    const totalFuel = ExpenseMock.filter(
      (x) => x.expenseType === 'سوخت',
    ).reduce((s, x) => s + x.amount, 0);

    const totalService = ExpenseMock.filter(
      (x) => x.expenseType === 'تعمیرات',
    ).reduce((s, x) => s + x.amount, 0);

    const totalInsurance = ExpenseMock.filter(
      (x) => x.expenseType === 'بیمه',
    ).reduce((s, x) => s + x.amount, 0);

    const total = ExpenseMock.reduce((sum, item) => sum + item.amount, 0);
    return {
      summary: {
        total,

        totalFuel,
        totalInsurance,
        totalService,
      },

      kpi: {
        costPerVehicle: Math.round(total / VehicleMock.length),

        monthlyAverage: Math.round(total / 12),

        fuelPercent: Math.round((totalFuel / total) * 100),
      },

      charts: {
        expenseDistribution: {
          labels: ['سوخت', 'هزینه‌ها', 'بیمه', 'سرویس'],

          series: [totalFuel, total, totalInsurance, totalService],
        },

        monthlyExpenses: {
          categories: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر'],

          series: [
            {
              name: 'هزینه',

              data: [12000000, 15000000, 18000000, 16000000],
            },
          ],
        },

        vehicleCost: {
          categories: VehicleMock.map((x) => x.vehicleName),

          series: [
            {
              name: 'هزینه',

              data: VehicleMock.map(() => Math.round(Math.random() * 10000000)),
            },
          ],
        },
      },

      table: ExpenseMock,
    };
  },
  async getFinancialByVehicle() {
    const financialByVehicle = VehicleMock.map((vehicle) => {
      const fuelCost = FuelRecordMock.filter(
        (x) => x.vehicleId === vehicle.id,
      ).reduce((s, x) => s + x.totalCost, 0);

      const expenseCost = ExpenseMock.filter(
        (x) => x.vehicleId === vehicle.id,
      ).reduce((s, x) => s + x.amount, 0);
      return {
        vehicleId: vehicle.id,
        vehicleName: vehicle.vehicleName,

        fuelCost,
        expenseCost,

        totalCost: fuelCost + expenseCost,

        missionCount: MissionMock.filter((x) => x.vehicleId === vehicle.id)
          .length,
      };
    });
    const totalFuelCost = FuelRecordMock.reduce(
      (sum, x) => sum + x.totalCost,
      0,
    );

    const totalExpenseCost = ExpenseMock.reduce((sum, x) => sum + x.amount, 0);

    const totalCost = totalFuelCost + totalExpenseCost;

    const averageCostPerVehicle = Math.round(totalCost / VehicleMock.length);

    const totalMissions = MissionMock.length;

    const averageCostPerMission = Math.round(totalCost / totalMissions);

    const mostExpensive = [...financialByVehicle].sort(
      (a, b) => b.totalCost - a.totalCost,
    )[0];

    const mostExpensiveVehicle = mostExpensive.vehicleName;

    const mostExpensiveVehicleCost = mostExpensive.totalCost;
    const vehicleCostChart = {
      categories: financialByVehicle.map((x) => x.vehicleName),

      series: [
        {
          name: 'هزینه کل',
          data: financialByVehicle.map((x) => x.totalCost),
        },
      ],
    };

    const fuelVsExpenseChart = {
      labels: ['سوخت', 'هزینه جاری'],

      series: [totalFuelCost, totalExpenseCost],
    };
    const labels = ExpenseTypeMock.map((item) => item.title);
    const series = ExpenseTypeMock.map((expenseType) =>
      ExpenseMock.filter(
        (expense) => expense.expenseTypeId === expenseType.id,
      ).reduce((sum, expense) => sum + expense.amount, 0),
    );
    const expenseTypeChart = {
      series,

      labels,

      legend: {
        position: 'bottom',
      },

      dataLabels: {
        enabled: true,

        formatter: (value, opts) =>
          `${opts.w.config.labels[opts.seriesIndex]}
                 ${value.toFixed(0)}%`,
      },
    };
    return {
      summary: {
        totalFuelCost,
        totalExpenseCost,
        totalCost,
        transactionCount: ExpenseMock.length + FuelRecordMock.length,
      },
      kpi: {
        averageCostPerVehicle,
        averageCostPerMission,
        mostExpensiveVehicle,
        mostExpensiveVehicleCost,
      },
      charts: {
        // monthly: monthlyFinancialChart,
        expenseTypes: expenseTypeChart,
        vehicles: vehicleCostChart,
        fuelVsExpense: fuelVsExpenseChart,
      },
      financialByVehicle,
      table: ExpenseMock,
    };
  },
  async getFuelCost() {
    const getMonthlyFuelReport = (fuelRecords) => {
      const result = {};

      fuelRecords.forEach((record) => {
        const month = new Date(record.fuelDate).getMonth() + 1;

        if (!result[month]) {
          result[month] = {
            month,
            totalFuel: 0,
            totalCost: 0,
            records: 0,
          };
        }

        result[month].totalFuel += record.fuelAmount;

        result[month].totalCost += record.totalCost;

        result[month].records += 1;
      });

      return Object.values(result);
    };

    const monthlyData = getMonthlyFuelReport(FuelRecordMock);

    const totalFuelCost = FuelRecordMock.reduce(
      (sum, item) => sum + item.totalCost,
      0,
    );

    const totalFuel = FuelRecordMock.reduce(
      (sum, item) => sum + item.fuelAmount,
      0,
    );

    const averageFuel = (totalFuel / FuelRecordMock.length).toFixed(2);

    const averageCost = (totalFuelCost / FuelRecordMock.length).toFixed(2);
    // نمودار بهره‌وری
    const fuelEfficiency = VehicleMock.map((vehicle) => {
      const vehicleFuel = FuelRecordMock.filter(
        (x) => x.vehicleId === vehicle.id,
      );

      const totalVehicleFuel = vehicleFuel.reduce(
        (sum, item) => sum + item.fuelAmount,
        0,
      );

      const totalKM = vehicleFuel.reduce(
        (sum, item) => sum + item.odometerKM,
        0,
      );

      return {
        vehicle: vehicle.plateNumber,

        kmPerLiter:
          totalVehicleFuel > 0
            ? Number((totalKM / totalVehicleFuel).toFixed(2))
            : 0,
      };
    });

    // نمودار سهم هزینه سوخت
    const fuelCostShare = VehicleMock.map((vehicle) => {
      const cost = FuelRecordMock.filter(
        (x) => x.vehicleId === vehicle.id,
      ).reduce((sum, item) => sum + item.totalCost, 0);

      return {
        name: vehicle.plateNumber,

        value: cost,
      };
    }).filter((item) => item.value > 0);
    const fuelCostShareChart = {
      labels: fuelCostShare.map((x) => x.name),

      series: fuelCostShare.map((x) => x.value),
    };
    const fuelEfficiencyChart = {
      categories: fuelEfficiency.map((x) => x.vehicle),

      series: [
        {
          name: 'KM/L',

          data: fuelEfficiency.map((x) => x.kmPerLiter),
        },
      ],
    };
    return {
      summary: {
        totalFuelCost,
        totalFuel,
        averageFuel,
        averageCost,
        transactionCount: FuelRecordMock.length,
      },

      charts: {
        fuelCostShare: fuelCostShareChart,

        fuelEfficiency: fuelEfficiencyChart,
      },
      monthlyData,
      table: FuelRecordMock,
    };
  },
  async getInsuranceReport() {
    const getInsuranceStatus = (expireDate) => {
      const today = new Date();

      const expire = new Date(expireDate);

      const days = Math.ceil((expire - today) / (1000 * 60 * 60 * 24));

      if (days < 0) return 'منقضی شده';

      if (days <= 7) return 'بحرانی';

      if (days <= 30) return 'هشدار';

      return 'فعال';
    };
    const getRemainingDays = (expireDate) => {
      const today = new Date();

      const expire = new Date(expireDate);

      return Math.ceil((expire - today) / (1000 * 60 * 60 * 24));
    };
    const table = InsuranceMock.map((insurance) => {
      const vehicle = VehicleMock.find((v) => v.id === insurance.vehicleId);

      return {
        id: insurance.id,

        plateNumber: vehicle.plateNumber,

        vehicleName: vehicle.vehicleName,

        insuranceType: insurance.insuranceType,

        company: insurance.insuranceCompany,

        startDate: insurance.startDate,

        expireDate: insurance.expireDate,

        amount: insurance.amount,

        remainingDays: getRemainingDays(insurance.expireDate),

        status: getInsuranceStatus(insurance.expireDate),
      };
    });
    const totalInsurances = table.length;

    const expiredCount = table.filter((x) => x.status === 'منقضی شده').length;

    const warningCount = table.filter((x) => x.status === 'هشدار').length;

    const criticalCount = table.filter((x) => x.status === 'بحرانی').length;

    const activeCount = table.filter((x) => x.status === 'فعال').length;

    const totalInsuranceCost = table.reduce((sum, x) => sum + x.amount, 0);

    const averageInsuranceCost = Number(
      (totalInsuranceCost / totalInsurances).toFixed(2),
    );

    const summary = {
      totalInsurances,

      totalInsuranceCost,

      averageInsuranceCost,

      expiredCount,

      warningCount,

      criticalCount,

      activeCount,
    };
    const kpi = [
      {
        title: 'کل بیمه‌ها',
        value: totalInsurances,
        color: 'primary',
      },

      {
        title: 'فعال',
        value: activeCount,
        color: 'success',
      },

      {
        title: 'هشدار',
        value: warningCount,
        color: 'warning',
      },

      {
        title: 'بحرانی',
        value: criticalCount,
        color: 'error',
      },

      {
        title: 'منقضی',
        value: expiredCount,
        color: 'secondary',
      },
    ];
    const insuranceStatusChart = {
      labels: ['فعال', 'هشدار', 'بحرانی', 'منقضی شده'],

      series: [activeCount, warningCount, criticalCount, expiredCount],
    };
    const companies = [...new Set(table.map((x) => x.company))];

    const insuranceCompanyChart = {
      categories: companies,

      series: [
        {
          name: 'هزینه بیمه',

          data: companies.map((company) =>
            table
              .filter((x) => x.company === company)
              .reduce((sum, item) => sum + item.amount, 0),
          ),
        },
      ],
    };
    const months = [
      'فروردین',
      'اردیبهشت',
      'خرداد',
      'تیر',
      'مرداد',
      'شهریور',
      'مهر',
      'آبان',
      'آذر',
      'دی',
      'بهمن',
      'اسفند',
    ];

    const insuranceExpireByMonth = {
      categories: months,

      series: [
        {
          name: 'تعداد',

          data: months.map(
            (_, index) =>
              table.filter((x) => new Date(x.expireDate).getMonth() === index)
                .length,
          ),
        },
      ],
    };
    return {
      summary,

      kpi,

      charts: {
        insuranceStatus: insuranceStatusChart,

        insuranceCompany: insuranceCompanyChart,

        insuranceExpireByMonth,
      },

      table,
    };
  },
};
// یک نکته وجود دارد و آن اینکه اگر به ایصورت عمل می شود باید در دیتا بیس هزینه سوخت از هزینه جاری یا هزینه سرویس خودرو جدا شود

export default dashboardService;
