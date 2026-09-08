import { formatJalaliDate } from '@/utils';

const getOptionTitle = (id, options = []) => {
  const item = options.find((x) => x.id === id);

  return item?.title ?? '';
};

const getDateRangeTitle = (dateRange) => {
  if (!dateRange) return '';

  const { from, to } = dateRange;

  // هیچ بازه‌ای انتخاب نشده
  if (!from && !to) {
    return '';
  }

  const fromTitle = from ? formatJalaliDate(from) : '';
  const toTitle = to ? formatJalaliDate(to) : '';

  // هر دو تاریخ وجود دارند
  if (fromTitle && toTitle) {
    return `${fromTitle} تا ${toTitle}`;
  }

  // فقط تاریخ شروع
  if (fromTitle) {
    return `از ${fromTitle}`;
  }

  // فقط تاریخ پایان
  if (toTitle) {
    return `تا ${toTitle}`;
  }

  return '';
};

const statusColorLabels = {
  success: 'سبز',
  warning: 'زرد',
  error: 'قرمز',
  primary: 'آبی',
};

export const buildDashboardSearchSummary = (
  filters,
  {
    vehicleOptions = [],
    driverOptions = [],
    missionOptions = [],
    statusColorOptions = [],

    fuelTypes = [],
    expenseTypes = [],

    insuranceStatusOptions = [],
    serviceStatusOptions = [],
  },
) => {
  const summary = [];

  if (filters.vehicleId) {
    summary.push({
      label: 'خودرو',
      value: getOptionTitle(filters.vehicleId, vehicleOptions),
    });
  }

  if (filters.statusColor) {
    summary.push({
      label: 'وضعیت',
      value:
        statusColorLabels[filters.statusColor] ??
        getOptionTitle(filters.statusColor, statusColorOptions),
    });
  }

  if (filters.driverId) {
    summary.push({
      label: 'راننده',
      value: getOptionTitle(filters.driverId, driverOptions),
    });
  }

  if (filters.missionId) {
    summary.push({
      label: 'ماموریت',
      value: getOptionTitle(filters.missionId, missionOptions),
    });
  }

  if (filters.fuelTypeId) {
    summary.push({
      label: 'نوع سوخت',
      value: getOptionTitle(filters.fuelTypeId, fuelTypes),
    });
  }

  if (filters.expenseTypeId) {
    summary.push({
      label: 'نوع هزینه',
      value: getOptionTitle(filters.expenseTypeId, expenseTypes),
    });
  }

  if (filters.insuranceStatus) {
    summary.push({
      label: 'وضعیت بیمه',
      value: getOptionTitle(filters.insuranceStatus, insuranceStatusOptions),
    });
  }

  if (filters.serviceStatus) {
    summary.push({
      label: 'وضعیت سرویس',
      value: getOptionTitle(filters.serviceStatus, serviceStatusOptions),
    });
  }

  const dateRangeTitle = getDateRangeTitle(filters.dateRange);

  if (dateRangeTitle) {
    summary.push({
      label: 'بازه زمانی',
      value: dateRangeTitle,
    });
  }

  return summary;
};
