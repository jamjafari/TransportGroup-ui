export const DashboardSummaryMock = {
  vehicleCount: 28,
  driverCount: 34,
  missionCount: 182,
  expenseCount: 56,

  activeVehicles: 24,

  inactiveVehicles: 4,

  runningMissions: 18,

  completedMissions: 164,

  monthlyExpense: 485000000,

  monthlyFuelCost: 212000000,
};
export const FuelConsumptionMock = [
  {
    day: '1',

    fuel: 320,
  },

  {
    day: '5',

    fuel: 410,
  },

  {
    day: '10',

    fuel: 280,
  },

  {
    day: '15',

    fuel: 500,
  },

  {
    day: '20',

    fuel: 360,
  },

  {
    day: '25',

    fuel: 430,
  },

  {
    day: '30',

    fuel: 390,
  },
];

export const ExpenseMock = [
  {
    day: '1',
    amount: 18000000,
  },
  {
    day: '5',
    amount: 23500000,
  },
  {
    day: '10',
    amount: 19500000,
  },
  {
    day: '15',
    amount: 26400000,
  },
  {
    day: '20',
    amount: 28700000,
  },
  {
    day: '25',
    amount: 22100000,
  },
  {
    day: '30',
    amount: 30100000,
  },
];
export const MonthlyDistanceMock = [
  {
    day: '1',
    distance: 1240,
  },
  {
    day: '5',
    distance: 980,
  },
  {
    day: '10',
    distance: 1510,
  },
  {
    day: '15',
    distance: 1335,
  },
  {
    day: '20',
    distance: 1670,
  },
  {
    day: '25',
    distance: 1420,
  },
  {
    day: '30',
    distance: 1580,
  },
];
export const VehicleUsageMock = [
  {
    day: '1',
    usage: 72,
  },
  {
    day: '5',
    usage: 68,
  },
  {
    day: '10',
    usage: 81,
  },
  {
    day: '15',
    usage: 77,
  },
  {
    day: '20',
    usage: 84,
  },
  {
    day: '25',
    usage: 79,
  },
  {
    day: '30',
    usage: 86,
  },
];

export const MissionTrendMock = [
  { day: '1', count: 18 },
  { day: '5', count: 22 },
  { day: '10', count: 25 },
  { day: '15', count: 21 },
  { day: '20', count: 28 },
  { day: '25', count: 31 },
  { day: '30', count: 26 },
];

export const DriverPerformanceMock = [
  {
    driver: 'احمدی',
    score: 92,
  },
  {
    driver: 'محمدی',
    score: 88,
  },
  {
    driver: 'کریمی',
    score: 84,
  },
  {
    driver: 'حسینی',
    score: 81,
  },
  {
    driver: 'رضایی',
    score: 78,
  },
];
export const LatestActivitiesMock = [
  {
    id: 1,
    activity: 'ثبت سوخت',
    user: 'احمدی',
    date: '1405/04/18',
    time: '08:35',
  },
  {
    id: 2,
    activity: 'ثبت مأموریت',
    user: 'محمدی',
    date: '1405/04/18',
    time: '09:20',
  },
  {
    id: 3,
    activity: 'ثبت هزینه تعمیر',
    user: 'کریمی',
    date: '1405/04/18',
    time: '10:15',
  },
  {
    id: 4,
    activity: 'پایان مأموریت',
    user: 'حسینی',
    date: '1405/04/18',
    time: '11:40',
  },
];
export const VehicleMock = [
  {
    id: 1,
    plateNumber: '21الف345-67',
    vehicleName: 'ولوو FH500',
    driverName: 'احمد احمدی',
    odometer: 245630,
    status: 'فعال',
  },
  {
    id: 2,
    plateNumber: '18ب456-21',
    vehicleName: 'اسکانیا R450',
    driverName: 'رضا محمدی',
    odometer: 182450,
    status: 'در مأموریت',
  },
  {
    id: 3,
    plateNumber: '54ج789-11',
    vehicleName: 'ایسوزو NPR',
    driverName: 'علی کریمی',
    odometer: 96450,
    status: 'تعمیرگاه',
  },
];
export const DriversMock = [
  {
    id: 1,
    fullName: 'احمد احمدی',
    nationalCode: '1234567890',
    phoneNumber: '09121234567',
    missionCount: 18,
    status: 'Active',
  },
  {
    id: 2,
    fullName: 'رضا محمدی',
    nationalCode: '2234567890',
    phoneNumber: '09123334444',
    missionCount: 22,
    status: 'OnMission',
  },
  {
    id: 3,
    fullName: 'علی کریمی',
    nationalCode: '3234567890',
    phoneNumber: '09125556666',
    missionCount: 14,
    status: 'Leave',
  },
];
export const FuelRecordMock = [
  {
    id: 1,
    fuelDate: '1405/04/18',
    vehicleName: 'ولوو FH500',
    driverName: 'احمدی',
    fuelAmount: 320,
    totalCost: 108000000,
    stationName: 'جایگاه آزادی',
  },
  {
    id: 2,
    fuelDate: '1405/04/18',
    vehicleName: 'اسکانیا R450',
    driverName: 'محمدی',
    fuelAmount: 285,
    totalCost: 96400000,
    stationName: 'جایگاه بعثت',
  },
];
export const ExpensesMock = [
  {
    id: 1,
    expenseDate: '1405/04/18',
    expenseType: 'تعمیرات',
    vehicleName: 'ولوو FH500',
    driverName: 'احمدی',
    amount: 12500000,
    status: 'Approved',
  },
  {
    id: 2,
    expenseDate: '1405/04/18',
    expenseType: 'لاستیک',
    vehicleName: 'اسکانیا R450',
    driverName: 'محمدی',
    amount: 42000000,
    status: 'Pending',
  },
  {
    id: 3,
    expenseDate: '1405/04/17',
    expenseType: 'روغن موتور',
    vehicleName: 'ایسوزو NPR',
    driverName: 'کریمی',
    amount: 5800000,
    status: 'Rejected',
  },
];
export const MissionMock = [
  {
    id: 1,
    missionNumber: 'M-1001',
    vehicleName: 'ولوو FH500',
    driverName: 'احمد احمدی',
    origin: 'تهران',
    destination: 'اصفهان',
    missionDate: '1405/04/18',
    status: 'Running',
  },
  {
    id: 2,
    missionNumber: 'M-1002',
    vehicleName: 'اسکانیا R450',
    driverName: 'رضا محمدی',
    origin: 'تبریز',
    destination: 'تهران',
    missionDate: '1405/04/18',
    status: 'Completed',
  },
  {
    id: 3,
    missionNumber: 'M-1003',
    vehicleName: 'ایسوزو NPR',
    driverName: 'علی کریمی',
    origin: 'مشهد',
    destination: 'یزد',
    missionDate: '1405/04/17',
    status: 'Cancelled',
  },
];
export const InsurancesMock = [
  {
    id: 1,
    vehicleName: 'ولوو FH500',
    insuranceCompany: 'بیمه ایران',
    policyNumber: 'IR-145632',
    expireDate: '1405/05/12',
    remainDays: 25,
    status: 'Warning',
  },
  {
    id: 2,
    vehicleName: 'اسکانیا R450',
    insuranceCompany: 'آسیا',
    policyNumber: 'AS-245781',
    expireDate: '1405/04/22',
    remainDays: 5,
    status: 'Critical',
  },
  {
    id: 3,
    vehicleName: 'ایسوزو NPR',
    insuranceCompany: 'البرز',
    policyNumber: 'AL-852147',
    expireDate: '1405/09/18',
    remainDays: 145,
    status: 'Active',
  },
];
export const ServiceReminderMock = [
  {
    id: 1,
    vehicleName: 'ولوو FH500',
    serviceType: 'تعویض روغن',
    currentKm: 248500,
    serviceKm: 250000,
    remainKm: 1500,
    status: 'Warning',
  },
  {
    id: 2,
    vehicleName: 'اسکانیا R450',
    serviceType: 'بازدید ترمز',
    currentKm: 179800,
    serviceKm: 180000,
    remainKm: 200,
    status: 'Critical',
  },
  {
    id: 3,
    vehicleName: 'ایسوزو NPR',
    serviceType: 'تعویض فیلتر',
    currentKm: 95000,
    serviceKm: 100000,
    remainKm: 5000,
    status: 'Active',
  },
];
