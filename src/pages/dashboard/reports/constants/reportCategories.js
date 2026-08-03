const reportCategories = [
  {
    id: 'operations',
    title: 'عملیاتی',
    icon: '⚙️',
    items: [
      { id: 'missions', title: 'گزارش ماموریت‌ها' },
      { id: 'drivers', title: 'گزارش رانندگان' },
      { id: 'vehicles', title: 'گزارش خودروها' },
      { id: 'fleet', title: 'گزارش ناوگان' },
      { id: 'latest-activities', title: 'گزارش فعالیت‌ها' },
    ],
  },

  {
    id: 'financial',
    title: 'مالی',
    icon: '💰',
    items: [
      { id: 'financial', title: 'گزارش هزینه‌ها' },
      { id: 'fuelcost', title: 'گزارش سوخت' },
      { id: 'fbv', title: 'هزینه هر خودرو' },
    ],
  },

  {
    id: 'daterange',
    title: 'بازه زمانی',
    icon: '⛽',
    items: [
      { id: 'financial-date', title: 'گزارش هزینه‌ها' },
      { id: 'fuelcost-date', title: 'گزارش سوخت' },
    ],
  },

  {
    id: 'insurance',
    title: 'بیمه و سرویس',
    icon: '🛡️',
    items: [
      { id: 'insurance', title: 'بیمه‌های منقضی' },
      { id: 'service', title: 'سرویس‌های عقب افتاده' },
    ],
  },

  {
    id: 'kpi',
    title: 'KPI',
    icon: '📈',
    items: [
      { id: 'driver-performance', title: 'عملکرد رانندگان' },
      { id: 'vehicle-performance', title: 'عملکرد خودروها' },
      { id: 'fleet-usage', title: 'استفاده از ناوگان' },
    ],
  },
];
export default reportCategories;
