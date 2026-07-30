export const DashboardSummaryMock = {
  vehicleCount: 28,
  driverCount: 34,
  missionCount: 182,
  expenseCount: 56,

  activeVehicles: 24,

  inactiveVehicles: 4,

  runningMissions: 18,

  completedMissions: 164,

  monthlyExpense: 48500,

  monthlyFuelCost: 21200,
};
export const FuelConsumptionMock = [
  {
    id: 1,
    day: '1',
    vehicleId: 1,
    driverId: 1,
    missionId: 1,

    fuelType: 'Diesel',

    date: '2026-02-01',

    fuel: 320,
  },

  {
    id: 2,
    day: '5',
    vehicleId: 2,
    driverId: 1,
    missionId: 3,

    fuelType: 'Gasoline',

    date: '2026-04-05',

    fuel: 410,
  },

  {
    id: 3,
    day: '10',
    vehicleId: 2,
    driverId: 2,
    missionId: 3,

    fuelType: 'Gasoline',

    date: '2026-01-05',

    fuel: 280,
  },

  {
    id: 4,
    day: '15',
    vehicleId: 1,
    driverId: 1,
    missionId: 3,

    fuelType: 'Gasoline',

    date: '2026-03-05',

    fuel: 500,
  },

  {
    id: 5,
    day: '20',
    vehicleId: 2,
    driverId: 2,
    missionId: 1,

    fuelType: 'Gasoline',

    date: '2026-05-05',

    fuel: 360,
  },

  {
    id: 6,
    day: '25',
    vehicleId: 2,
    driverId: 2,
    missionId: 1,

    fuelType: 'Gasoline',

    date: '2026-05-05',

    fuel: 430,
  },

  {
    id: 7,
    day: '30',
    vehicleId: 1,
    driverId: 2,
    missionId: 1,

    fuelType: 'Gasoline',

    date: '2026-03-01',

    fuel: 390,
  },
];

export const ExpenseMock = [
  {
    id: 1,

    vehicleId: 1,

    vehicleName: 'ولوو FH500',

    expenseTypeId: 1,

    expenseType: 'سوخت',

    vendorId: 1,

    fuelRecordId: null,

    expenseDate: '2026-01-10',

    amount: 150,

    invoiceNumber: 'EXP001',

    status: 'Success',

    description: 'ثبت هزینه سوخت',
  },

  {
    id: 2,

    vehicleId: 1,

    vehicleName: 'ولوو FH500',

    expenseTypeId: 2,

    expenseType: 'تعمیرات',

    vendorId: null,

    fuelRecordId: null,

    expenseDate: '2026-02-14',

    amount: 350,

    invoiceNumber: 'EXP002',

    status: 'Pending',

    description: 'تعویض لنت',
  },

  {
    id: 3,

    vehicleId: 3,

    vehicleName: 'اسکانیا R450',

    expenseTypeId: 1,

    expenseType: 'سوخت',

    vendorId: 2,

    fuelRecordId: null,

    expenseDate: '2026-04-10',

    amount: 170,

    invoiceNumber: 'EXP003',

    status: 'Success',

    description: 'ثبت هزینه سوخت',
  },

  {
    id: 4,

    vehicleId: 2,

    vehicleName: 'بنز آکتروس',

    expenseTypeId: 4,

    expenseType: ' لاستیک',

    vendorId: 1,

    fuelRecordId: null,

    expenseDate: '2026-02-10',

    amount: 250,

    invoiceNumber: 'EXP004',

    status: 'Canceled',

    description: 'تمدید بیمه',
  },
  {
    id: 5,

    vehicleId: 1,

    vehicleName: 'ولوو FH500',

    expenseTypeId: 5,

    expenseType: 'مالیات',

    vendorId: 1,

    fuelRecordId: null,

    expenseDate: '2026-11-10',

    amount: 150,

    invoiceNumber: 'EXP001',

    status: 'Success',

    description: 'ثبت هزینه سوخت',
  },

  {
    id: 6,

    vehicleId: 1,

    vehicleName: 'ولوو FH500',

    expenseTypeId: 6,

    expenseType: 'معاینه فنی',

    vendorId: null,

    fuelRecordId: null,

    expenseDate: '2026-01-14',

    amount: 350,

    invoiceNumber: 'EXP002',

    status: 'Pending',

    description: 'تعویض لنت',
  },

  {
    id: 7,

    vehicleId: 3,

    vehicleName: 'اسکانیا R450',

    expenseTypeId: 7,

    expenseType: 'تعویض روغن',

    vendorId: 2,

    fuelRecordId: null,

    expenseDate: '2026-09-10',

    amount: 170,

    invoiceNumber: 'EXP003',

    status: 'Success',

    description: 'ثبت هزینه سوخت',
  },

  {
    id: 8,

    vehicleId: 2,

    vehicleName: 'بنز آکتروس',

    expenseTypeId: 3,

    expenseType: 'بیمه',

    vendorId: 1,

    fuelRecordId: null,

    expenseDate: '2026-06-10',

    amount: 250,

    invoiceNumber: 'EXP004',

    status: 'Canceled',

    description: 'تمدید بیمه',
  },
];
export const MonthlyDistanceMock = [
  {
    id: 1,
    vehicleId: 1,
    driverId: 1,
    missionId: 1,
    missionDate: '2026-01-05',
    distanceKm: 450,
  },

  {
    id: 2,
    vehicleId: 1,
    driverId: 1,
    missionId: 2,
    missionDate: '2026-01-18',
    distanceKm: 780,
  },

  {
    id: 3,
    vehicleId: 2,
    driverId: 2,
    missionId: 3,
    missionDate: '2026-02-12',
    distanceKm: 350,
  },

  {
    id: 4,
    vehicleId: 3,
    driverId: 2,
    missionId: 4,
    missionDate: '2026-03-10',
    distanceKm: 1200,
  },

  {
    id: 5,
    vehicleId: 1,
    driverId: 3,
    missionId: 5,
    missionDate: '2026-03-20',
    distanceKm: 900,
  },

  {
    id: 6,
    vehicleId: 2,
    driverId: 1,
    missionId: 6,
    missionDate: '2026-04-08',
    distanceKm: 650,
  },

  {
    id: 7,
    vehicleId: 4,
    driverId: 4,
    missionId: 7,
    missionDate: '2026-05-17',
    distanceKm: 1400,
  },

  {
    id: 8,
    vehicleId: 3,
    driverId: 2,
    missionId: 8,
    missionDate: '2026-06-22',
    distanceKm: 800,
  },

  {
    id: 9,
    vehicleId: 1,
    driverId: 1,
    missionId: 9,
    missionDate: '2026-07-03',
    distanceKm: 950,
  },

  {
    id: 10,
    vehicleId: 5,
    driverId: 5,
    missionId: 10,
    missionDate: '2026-08-15',
    distanceKm: 700,
  },

  {
    id: 11,
    vehicleId: 2,
    driverId: 3,
    missionId: 11,
    missionDate: '2026-09-07',
    distanceKm: 1100,
  },

  {
    id: 12,
    vehicleId: 4,
    driverId: 2,
    missionId: 12,
    missionDate: '2026-10-18',
    distanceKm: 600,
  },

  {
    id: 13,
    vehicleId: 1,
    driverId: 1,
    missionId: 13,
    missionDate: '2026-11-09',
    distanceKm: 1350,
  },

  {
    id: 14,
    vehicleId: 3,
    driverId: 4,
    missionId: 14,
    missionDate: '2026-12-21',
    distanceKm: 850,
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
    type: 'Fuel',
    title: 'ثبت سوخت',
    description: 'ثبت ۳۲۰ لیتر گازوئیل',
    user: 'احمدی',
    driverId: 1,
    driverName: 'علی احمدی',
    vehicleId: 1,
    vehicleName: 'کامیون ولوو FH500',
    missionId: 1,
    missionNumber: 'MIS-001',
    status: 'Completed',
    activityDate: '2026-04-18',
    activityTime: '08:35',
  },

  {
    id: 2,
    type: 'Mission',
    title: 'ایجاد مأموریت',
    description: 'ثبت مأموریت تهران - تبریز',
    user: 'مدیر عملیات',
    driverId: 2,
    driverName: 'محمد رضایی',
    vehicleId: 2,
    vehicleName: 'اسکانیا R450',
    missionId: 2,
    missionNumber: 'MIS-002',
    status: 'Running',
    activityDate: '2026-04-18',
    activityTime: '09:10',
  },

  {
    id: 3,
    type: 'Expense',
    title: 'ثبت هزینه',
    description: 'هزینه تعویض لاستیک',
    user: 'کریمی',
    driverId: null,
    driverName: null,
    vehicleId: 3,
    vehicleName: 'بنز Actros',
    missionId: null,
    missionNumber: null,
    status: 'Approved',
    activityDate: '2026-04-18',
    activityTime: '10:15',
  },

  {
    id: 4,
    type: 'Insurance',
    title: 'تمدید بیمه',
    description: 'تمدید بیمه شخص ثالث خودرو',
    user: 'احمدی',
    driverId: null,
    vehicleId: 1,
    vehicleName: 'کامیون ولوو FH500',
    status: 'Active',
    activityDate: '2026-04-18',
    activityTime: '11:00',
  },

  {
    id: 5,
    type: 'Service',
    title: 'ثبت سرویس',
    description: 'سرویس دوره‌ای ۲۰ هزار کیلومتر',
    user: 'واحد تعمیرات',
    vehicleId: 2,
    vehicleName: 'اسکانیا R450',
    status: 'ServiceCompleted',
    activityDate: '2026-04-18',
    activityTime: '13:20',
  },

  {
    id: 6,
    type: 'Driver',
    title: 'تغییر وضعیت راننده',
    description: 'راننده در مأموریت قرار گرفت',
    user: 'مدیر عملیات',
    driverId: 3,
    driverName: 'مهدی کریمی',
    status: 'Mission',
    activityDate: '2026-04-18',
    activityTime: '14:05',
  },

  {
    id: 7,
    type: 'Vehicle',
    title: 'ورود به تعمیرگاه',
    description: 'خودرو جهت تعمیر موتور متوقف شد',
    user: 'واحد تعمیرات',
    vehicleId: 3,
    vehicleName: 'بنز Actros',
    status: 'Repaier',
    activityDate: '2026-04-18',
    activityTime: '15:30',
  },

  {
    id: 8,
    type: 'Mission',
    title: 'اتمام مأموریت',
    description: 'مأموریت تهران - بندرعباس با موفقیت پایان یافت',
    user: 'مدیر عملیات',
    missionId: 3,
    missionNumber: 'MIS-003',
    status: 'Completed',
    activityDate: '2026-04-18',
    activityTime: '17:45',
  },
];
export const VehicleMock = [
  {
    id: 1,
    driverId: 1,
    vehicleId: 1,
    plateNumber: '21الف345-67',
    vehicleName: 'ولوو FH500',
    driverName: 'احمد احمدی',
    odometer: 245630,
    status: 'Active',
  },
  {
    id: 2,
    driverId: 3,
    vehicleId: 3,
    plateNumber: '18ب456-21',
    vehicleName: 'اسکانیا R450',
    driverName: 'رضا محمدی',
    odometer: 182450,
    status: 'Mission',
  },
  {
    id: 3,
    driverId: 2,
    vehicleId: 3,
    plateNumber: '54ج789-11',
    vehicleName: 'ایسوزو NPR',
    driverName: 'علی کریمی',
    odometer: 10450,
    status: 'Repair',
  },
  {
    id: 4,
    driverId: 2,
    vehicleId: 4,
    plateNumber: '54ج789-11',
    vehicleName: 'ایسوزو NPR',
    driverName: 'علی کریمی',
    odometer: 96450,
    status: 'Repair',
  },
];
export const DriversMock = [
  {
    id: 1,
    driverId: 1,
    fullName: 'احمد احمدی',
    nationalCode: '1234567890',
    phoneNumber: '09121234567',
    licenseNumber: 'DL-1001',
    missionCount: 18,
    status: 'Active',
  },
  {
    id: 2,
    driverId: 2,
    fullName: 'رضا محمدی',
    nationalCode: '2234567890',
    phoneNumber: '09123334444',
    licenseNumber: 'DL-1001',
    missionCount: 22,
    status: 'Active',
  },
  {
    id: 3,
    driverId: 3,
    fullName: 'علی کریمی',
    nationalCode: '3234567890',
    phoneNumber: '09125556666',
    licenseNumber: 'DL-1001',
    missionCount: 14,
    status: 'Inactive',
  },
  {
    id: 4,
    fullName: 'احمد احمدی',
    nationalCode: '1234567890',
    phoneNumber: '09121234567',
    licenseNumber: 'DL-1001',
    missionCount: 15,
    status: 'Active',
  },

  {
    id: 5,
    fullName: 'رضا محمدی',
    nationalCode: '2234567890',
    phoneNumber: '09121234568',
    licenseNumber: 'DL-1002',
    missionCount: 8,
    status: 'Mission',
  },

  {
    id: 6,
    fullName: 'مهدی کریمی',
    nationalCode: '3234567890',
    phoneNumber: '09121234569',
    licenseNumber: 'DL-1003',
    missionCount: 3,
    status: 'Inactive',
  },

  {
    id: 7,
    fullName: 'علی رضایی',
    nationalCode: '4234567890',
    phoneNumber: '09121234570',
    licenseNumber: 'DL-1004',
    missionCount: 11,
    status: 'Repair',
  },
];
export const FuelRecordMock = [
  {
    id: 1,
    driverId: 1,
    vehicleId: 1,
    fuelDate: '2026-01-18',
    vehicleName: 'ولوو FH500',
    driverName: 'احمدی',
    fuelAmount: 320,
    totalCost: 10800,
    odometerKM: 1450,
    unitCost: 1000,

    stationName: 'جایگاه آزادی',
  },
  {
    id: 2,
    driverId: 2,
    vehicleId: 3,
    fuelDate: '2026-09-18',
    vehicleName: 'اسکانیا R450',
    driverName: 'محمدی',
    fuelAmount: 285,
    totalCost: 9640,
    odometerKM: 1850,
    unitCost: 3000,

    stationName: 'جایگاه بعثت',
  },
  {
    id: 3,
    driverId: 1,
    vehicleId: 3,
    fuelDate: '2026-03-18',
    vehicleName: 'اسکانیا R450',
    driverName: 'محمدی',
    fuelAmount: 285,
    totalCost: 9640,
    odometerKM: 2150,
    unitCost: 5000,

    stationName: 'جایگاه بعثت',
  },
  {
    id: 4,
    driverId: 3,
    vehicleId: 3,
    fuelDate: '2026-12-18',
    vehicleName: 'اسکانیا R450',
    driverName: 'محمدی',
    fuelAmount: 285,
    totalCost: 9640,

    odometerKM: 2650,
    unitCost: 1000,

    stationName: 'جایگاه بعثت',
  },
  {
    id: 5,
    driverId: 2,
    vehicleId: 1,
    fuelDate: '2026-02-18',
    vehicleName: 'اسکانیا R450',
    driverName: 'محمدی',
    fuelAmount: 285,
    totalCost: 9640,
    odometerKM: 1750,
    unitCost: 1000,

    stationName: 'جایگاه بعثت',
  },
  {
    id: 6,
    driverId: 2,
    vehicleId: 3,
    fuelDate: '2026-01-18',
    vehicleName: 'اسکانیا R450',
    driverName: 'محمدی',
    fuelAmount: 285,
    totalCost: 9640,
    odometerKM: 2850,
    unitCost: 1000,
    stationName: 'جایگاه بعثت',
  },
];
export const ExpensesMock = [
  {
    id: 1,
    vehicleId: 1,
    expenseTypeId: 1,
    vendorId: 1,
    expenseDate: '2026-03-17',
    expenseType: 'تعمیرات',
    vehicleName: 'ولوو FH500',
    driverName: 'احمدی',
    amount: 1250,
    status: 'Approved',
  },
  {
    id: 2,
    vehicleId: 1,
    expenseTypeId: 1,
    vendorId: 1,
    expenseDate: '2026-04-17',
    expenseType: 'لاستیک',
    vehicleName: 'اسکانیا R450',
    driverName: 'محمدی',
    amount: 4200,
    status: 'Pending',
  },
  {
    id: 3,
    vehicleId: 2,
    expenseTypeId: 1,
    vendorId: 1,
    expenseDate: '2026-07-17',
    expenseType: 'روغن موتور',
    vehicleName: 'ایسوزو NPR',
    driverName: 'کریمی',
    amount: 580,
    status: 'Rejected',
  },
];
export const MissionMock = [
  {
    id: 1,
    vehicleId: 2,
    driverId: 1,
    missionId: 1,
    missionNumber: 'M-1001',
    vehicleName: 'ولوو FH500',
    driverName: 'احمد احمدی',
    origin: 'تهران',
    destination: 'اصفهان',
    missionDate: '2026-05-18',
    status: 'Running',
  },
  {
    id: 2,
    vehicleId: 2,
    driverId: 2,
    missionId: 1,
    missionNumber: 'M-1002',
    vehicleName: 'اسکانیا R450',
    driverName: 'رضا محمدی',
    origin: 'تبریز',
    destination: 'تهران',
    missionDate: '2026-04-18',
    status: 'Completed',
  },
  {
    id: 3,
    vehicleId: 3,
    driverId: 1,
    missionId: 1,
    missionNumber: 'M-1003',
    vehicleName: 'ایسوزو NPR',
    driverName: 'علی کریمی',
    origin: 'مشهد',
    destination: 'یزد',
    missionDate: '2026-12-17',
    status: 'Cancelled',
  },
  {
    id: 4,
    vehicleId: 2,
    driverId: 1,
    missionId: 1,
    missionNumber: 'M-1003',
    vehicleName: 'ایسوزو NPR',
    driverName: 'علی کریمی',
    origin: 'مشهد',
    destination: 'یزد',
    missionDate: '2026-04-17',
    status: 'Cancelled',
  },
  {
    id: 5,
    vehicleId: 3,
    driverId: 1,
    missionId: 1,
    missionNumber: 'M-1003',
    vehicleName: 'ایسوزو NPR',
    driverName: 'علی کریمی',
    origin: 'مشهد',
    destination: 'یزد',
    missionDate: '2026-01-17',
    status: 'Cancelled',
  },
  {
    id: 6,
    vehicleId: 3,
    driverId: 1,
    missionId: 1,
    missionNumber: 'M-1003',
    vehicleName: 'ایسوزو NPR',
    driverName: 'علی کریمی',
    origin: 'مشهد',
    destination: 'یزد',
    missionDate: '2026-02-17',
    status: 'Cancelled',
  },
  {
    id: 7,
    vehicleId: 3,
    driverId: 1,
    missionId: 2,
    missionNumber: 'M-1003',
    vehicleName: 'ایسوزو NPR',
    driverName: 'علی کریمی',
    origin: 'مشهد',
    destination: 'یزد',
    missionDate: '2026-09-17',
    status: 'Cancelled',
  },
  {
    id: 8,
    vehicleId: 3,
    driverId: 1,
    missionId: 3,
    missionNumber: 'M-1003',
    vehicleName: 'ایسوزو NPR',
    driverName: 'علی کریمی',
    origin: 'مشهد',
    destination: 'یزد',
    missionDate: '2026-08-17',
    status: 'Cancelled',
  },
  {
    id: 9,
    vehicleId: 3,
    driverId: 1,
    missionId: 3,
    missionNumber: 'M-1003',
    vehicleName: 'ایسوزو NPR',
    driverName: 'علی کریمی',
    origin: 'مشهد',
    destination: 'یزد',
    missionDate: '2026-07-17',
    status: 'Running',
  },
  {
    id: 10,
    vehicleId: 3,
    driverId: 1,
    missionId: 2,
    missionNumber: 'M-1003',
    vehicleName: 'ایسوزو NPR',
    driverName: 'علی کریمی',
    origin: 'مشهد',
    destination: 'یزد',
    missionDate: '2026-06-17',
    status: 'Cancelled',
  },
  {
    id: 11,
    vehicleId: 3,
    driverId: 1,
    missionId: 3,
    missionNumber: 'M-1003',
    vehicleName: 'ایسوزو NPR',
    driverName: 'علی کریمی',
    origin: 'مشهد',
    destination: 'یزد',
    missionDate: '2026-08-17',
    status: 'Running',
  },
  {
    id: 12,
    vehicleId: 3,
    driverId: 1,
    missionId: 3,
    missionNumber: 'M-1003',
    vehicleName: 'ایسوزو NPR',
    driverName: 'علی کریمی',
    origin: 'مشهد',
    destination: 'یزد',
    missionDate: '2026-07-17',
    status: 'Cancelled',
  },
  {
    id: 13,
    vehicleId: 3,
    driverId: 1,
    missionId: 2,
    missionNumber: 'M-1003',
    vehicleName: 'ایسوزو NPR',
    driverName: 'علی کریمی',
    origin: 'مشهد',
    destination: 'یزد',
    missionDate: '2026-06-17',
    status: 'Running',
  },
];
export const InsurancesMock = [
  {
    id: 1,
    vehicleId: 1,
    vehicleName: 'ولوو FH500',
    insuranceType: 'بیمه شخص ثالث',
    insuranceCompany: 'بیمه ایران',
    policyNumber: 'IR-145632',
    expireDate: '2026-05-12',
    startDate: '2026-04-01',
    amount: 19500000,
    remainDays: 5,
    status: 'Critical',
  },
  {
    id: 2,
    vehicleId: 2,
    vehicleName: 'اسکانیا R450',
    insuranceCompany: 'آسیا',
    insuranceType: 'بیمه شخص ثالث',
    policyNumber: 'AS-245781',
    expireDate: '2026-04-22',
    startDate: '2026-04-01',
    amount: 19500000,
    remainDays: 5,
    status: 'Critical',
  },
  {
    id: 3,
    vehicleId: 3,
    vehicleName: 'ایسوزو NPR',
    insuranceCompany: 'البرز',
    insuranceType: 'بیمه شخص ثالث',
    policyNumber: 'AL-852147',
    expireDate: '2026-09-18',
    startDate: '2026-04-01',
    amount: 19500000,
    remainDays: 145,
    status: 'Active',
  },
  {
    id: 4,
    vehicleId: 1,
    vehicleName: 'ایسوزو NPR',

    insuranceType: 'بیمه شخص ثالث',
    insuranceCompany: 'ایران',
    startDate: '2026-01-01',
    expireDate: '2026-08-20',
    amount: 18000000,
    remainDays: 25,
    status: 'Warning',
  },
  {
    id: 5,
    vehicleId: 2,
    vehicleName: 'ایسوزو NPR',

    insuranceType: 'بیمه بدنه',
    insuranceCompany: 'آسیا',
    startDate: '2026-02-15',
    expireDate: '2026-07-30',
    amount: 25000000,
    remainDays: 25,
    status: 'Critical',
  },
  {
    id: 6,
    vehicleId: 3,
    vehicleName: 'ولوو FH500',

    insuranceType: 'بیمه شخص ثالث',
    insuranceCompany: 'البرز',
    startDate: '2026-03-01',
    expireDate: '2026-07-25',
    amount: 21000000,
    remainDays: 25,
    status: 'Warning',
  },
  {
    id: 7,
    vehicleId: 4,
    vehicleName: 'ایسوزو NPR',

    insuranceType: 'بیمه بدنه',
    insuranceCompany: 'دانا',
    startDate: '2026-01-15',
    expireDate: '2026-09-18',
    amount: 23000000,
    remainDays: 25,
    status: 'Critical',
  },
  {
    id: 8,
    vehicleId: 3,
    vehicleName: 'ولوو FH500',

    insuranceType: 'بیمه شخص ثالث',
    insuranceCompany: 'کوثر',
    expireDate: '2026-07-22',
    startDate: '2026-04-01',
    amount: 19500000,
    remainDays: 25,
    status: 'Warning',
  },
];
export const ServiceReminderMock = [
  {
    id: 1,
    vehicleId: 1,
    vehicleName: 'ولوو FH500',
    serviceType: 'تعویض روغن',
    currentKm: 248500,
    serviceKm: 250000,
    remainKm: 1500,
    status: 'Warning',
  },
  {
    id: 2,
    vehicleId: 3,
    vehicleName: 'اسکانیا R450',
    serviceType: 'بازدید ترمز',
    currentKm: 179800,
    serviceKm: 180000,
    remainKm: 200,
    status: 'Critical',
  },
  {
    id: 3,
    vehicleId: 2,
    vehicleName: 'ایسوزو NPR',
    serviceType: 'تعویض فیلتر',
    currentKm: 95000,
    serviceKm: 10,
    remainKm: 5000,
    status: 'Active',
  },
];
export const VehicleServicesMock = [
  {
    id: 1,
    vehicleId: 1,
    vehicleName: 'ولوو FH500',

    serviceType: 'تعویض روغن',

    serviceDate: '2026-04-15',

    odometerKm: 250000,

    nextServiceKm: 260000,

    amount: 12000000,

    workshop: 'تعمیرگاه مرکزی',

    description: 'تعویض روغن موتور و فیلترها',

    status: 'ServiceCompleted',
  },

  {
    id: 2,
    vehicleId: 1,
    vehicleName: 'ولوو FH500',

    serviceType: 'تعویض لاستیک',

    serviceDate: '2026-02-10',

    odometerKm: 235000,

    nextServiceKm: 285000,

    amount: 85000000,

    workshop: 'لاستیک فروشی البرز',

    description: 'تعویض دو حلقه لاستیک جلو',

    status: 'ServiceCompleted',
  },

  {
    id: 3,
    vehicleId: 2,
    vehicleName: 'اسکانیا R450',

    serviceType: 'سرویس دوره‌ای',

    serviceDate: '2026-05-01',

    odometerKm: 180000,

    nextServiceKm: 190000,

    amount: 18000000,

    workshop: 'تعمیرگاه مرکزی',

    description: 'بازدید کامل موتور و گیربکس',

    status: 'ServiceCompleted',
  },

  {
    id: 4,
    vehicleId: 3,
    vehicleName: 'بنز Actros',

    serviceType: 'تعمیر موتور',

    serviceDate: '2026-03-20',

    odometerKm: 320000,

    nextServiceKm: 340000,

    amount: 240000000,

    workshop: 'تعمیرگاه تخصصی بنز',

    description: 'تعویض واشر سرسیلندر و تعمیر موتور',

    status: 'ServiceCompleted',
  },

  {
    id: 5,
    vehicleId: 4,
    vehicleName: 'مان TGX',

    serviceType: 'تعویض لنت ترمز',

    serviceDate: '2026-04-05',

    odometerKm: 145000,

    nextServiceKm: 165000,

    amount: 15000000,

    workshop: 'نمایندگی مان',

    description: 'تعویض لنت‌های جلو و عقب',

    status: 'ServiceCompleted',
  },

  {
    id: 6,
    vehicleId: 5,
    vehicleName: 'ولوو FMX',

    serviceType: 'تنظیم جلوبندی',

    serviceDate: '2026-01-28',

    odometerKm: 98000,

    nextServiceKm: 118000,

    amount: 7000000,

    workshop: 'جلوبندی آزادی',

    description: 'تنظیم کامل جلوبندی و فرمان',

    status: 'ServiceCompleted',
  },

  {
    id: 7,
    vehicleId: 6,
    vehicleName: 'ایسوزو NPR',

    serviceType: 'تعویض باتری',

    serviceDate: '2026-06-01',

    odometerKm: 87000,

    nextServiceKm: null,

    amount: 9000000,

    workshop: 'برق خودرو تهران',

    description: 'نصب باتری جدید 100 آمپر',

    status: 'ServiceCompleted',
  },

  {
    id: 8,
    vehicleId: 3,
    vehicleName: 'داف XF',

    serviceType: 'تعمیر سیستم خنک‌کننده',

    serviceDate: '2026-05-15',

    odometerKm: 275000,

    nextServiceKm: 295000,

    amount: 32000000,

    workshop: 'تعمیرگاه تخصصی داف',

    description: 'تعویض رادیاتور و شیلنگ‌ها',

    status: 'ServiceCompleted',
  },
];
export const AlertsMock = [
  {
    id: 1,
    vehicleId: 1,

    driverId: 2,

    missionId: 1,
    severity: 'error',
    title: 'Vehicle Insurance',
    description: 'Insurance has expired.',
  },

  {
    id: 2,
    vehicleId: 1,

    driverId: 2,

    missionId: 1,
    severity: 'هشدار',
    title: 'Vehicle Service',
    description: '3 vehicles need service.',
  },

  {
    id: 3,
    vehicleId: 2,

    driverId: 2,

    missionId: 2,

    severity: 'warning',
    title: 'Expenses',
    description: '5 expenses are waiting approval.',
  },

  {
    id: 4,
    vehicleId: 3,

    driverId: 2,

    missionId: 3,
    severity: 'info',
    title: 'Mission',
    description: '12 missions registered today.',
  },
];
export const financialByVehicle = [
  {
    vehicleId: 1,
    vehicleName: 'ولوو FH500',

    fuelCost: 12500,
    expenseCost: 3400,

    totalCost: 15900,

    missionCount: 18,
  },

  {
    vehicleId: 2,
    vehicleName: 'اسکانیا R450',

    fuelCost: 9800,
    expenseCost: 2100,

    totalCost: 11900,

    missionCount: 11,
  },
  {
    vehicleId: 3,
    vehicleName: 'اسکانیا D450',

    fuelCost: 1800,
    expenseCost: 1100,

    totalCost: 10900,

    missionCount: 11,
  },
  {
    vehicleId: 4,
    vehicleName: 'اسکانیا R350',

    fuelCost: 9200,
    expenseCost: 3100,

    totalCost: 13900,

    missionCount: 11,
  },
];
export const ExpenseTypeMock = [
  {
    id: 1,
    title: 'سوخت',
  },
  {
    id: 2,
    title: 'بیمه',
  },
  {
    id: 3,
    title: 'تعمیرات',
  },
  {
    id: 4,
    title: ' لاستیک',
  },
  {
    id: 5,
    title: 'مالیات',
  },
  {
    id: 6,
    title: 'معاینه فنی',
  },
  {
    id: 7,
    title: 'روغن موتور',
  },
];
