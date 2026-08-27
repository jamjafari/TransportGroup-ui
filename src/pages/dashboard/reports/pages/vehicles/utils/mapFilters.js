export const mapToVehicleReportFilter = (appliedFilters = {}) => ({
  plateNumber: appliedFilters.plateNumber || null,
  brand: appliedFilters.brand || null,
  model: appliedFilters.model || null,
  fuelType: appliedFilters.fuelTypeId || null,
  status: appliedFilters.status || null,
});
