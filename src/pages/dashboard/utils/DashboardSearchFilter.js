const dashboardSearchFilter = (
  data,
  filters = {},
  allowedFilters = [],
  options = {},
) => {
  let result = [...data];

  //-------------------------

  if (allowedFilters.includes('vehicleId')) {
    result = filterByVehicle(result, filters.vehicleId);
  }

  //-------------------------

  if (allowedFilters.includes('driverId')) {
    result = filterByDriver(result, filters.driverId);
  }

  //-------------------------

  if (allowedFilters.includes('missionId')) {
    result = filterByMission(result, filters.missionId);
  }

  //-------------------------

  if (allowedFilters.includes('fuelTypeId')) {
    result = filterByFuelType(result, filters.fuelTypeId);
  }
  //-------------------------
  if (allowedFilters.includes('expenseTypeId')) {
    result = filterByExpenseType(result, filters.expenseTypeId);
  }

  if (allowedFilters.includes('dateRange')) {
    result = filterByDateRange(result, filters.dateRange, options.dateField);
  }
  return result;
};

const filterByVehicle = (data, value) => {
  if (!value) return data;

  return data.filter((item) => item.vehicleId === value);
};

const filterByDriver = (data, value) => {
  if (!value) return data;

  return data.filter((item) => item.driverId === value);
};

const filterByMission = (data, value) => {
  if (!value) return data;

  return data.filter((item) => item.missionId === value);
};

const filterByExpenseType = (data, value) => {
  if (!value) return data;

  return data.filter((item) => item.expenseTypeId === value);
};
const filterByFuelType = (data, value) => {
  if (!value) return data;

  return data.filter((item) => item.fuelTypeId === value);
};
const filterByDateRange = (data, value, fieldName) => {
  if (!value?.from || !value?.to) return data;

  const { from, to } = value;
  const fromDate = new Date(from);
  const toDate = new Date(to);

  return data.filter((item) => {
    const itemDate = new Date(item[fieldName]);
    // console.log('from', from);
    // console.log('to', to);
    // console.log('item', item[fieldName]);
    // console.log('parsed', new Date(item[fieldName]));
    // console.log('item ....', item);
    return itemDate >= fromDate && itemDate <= toDate;
  });
};

export default dashboardSearchFilter;
