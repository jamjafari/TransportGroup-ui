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
      { id: 'activities', title: 'گزارش فعالیت‌ها' },
    ],
  },

  {
    id: 'financial',
    title: 'مالی',
    icon: '💰',
    items: [
      { id: 'expenses', title: 'گزارش هزینه‌ها' },
      { id: 'fuel-cost', title: 'گزارش سوخت' },
      { id: 'vehicle-cost', title: 'هزینه هر خودرو' },
    ],
  },

  {
    id: 'fuel',
    title: 'سوخت',
    icon: '⛽',
    items: [
      { id: 'fuel-monthly', title: 'مصرف ماهانه' },
      { id: 'fuel-vehicle', title: 'مصرف هر خودرو' },
      { id: 'fuel-average', title: 'میانگین مصرف' },
    ],
  },

  {
    id: 'insurance',
    title: 'بیمه و سرویس',
    icon: '🛡️',
    items: [
      { id: 'insurance-expire', title: 'بیمه‌های منقضی' },
      { id: 'services', title: 'سرویس‌های عقب افتاده' },
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
