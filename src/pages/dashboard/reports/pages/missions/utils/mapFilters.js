// src/pages/dashboard/reports/pages/missions/utils/mapFilters.js
export const mapToMissionReportFilter = (appliedFilters = {}) => ({
  vehicleId: appliedFilters.vehicleId || null,
  driverId: appliedFilters.driverId || null,
  dateFrom: appliedFilters.dateRange?.from || null,
  dateTo: appliedFilters.dateRange?.to || null,
});
