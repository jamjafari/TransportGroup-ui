const getOptionTitle = (id, options = []) => {
  const item = options.find((x) => x.id === id);

  return item?.title ?? '';
};

const getDateRangeTitle = (dateRange) => {
  if (!dateRange) return '';

  const { from, to } = dateRange;

  return `${from} - ${to}`;
};

export const buildDashboardSearchSummary = (
  filters,
  {
    vehicleOptions = [],
    driverOptions = [],
    missionOptions = [],

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

  if (filters.dateRange) {
    summary.push({
      label: 'بازه زمانی',
      value: getDateRangeTitle(filters.dateRange),
    });
  }

  return summary;
};
