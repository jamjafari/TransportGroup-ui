export const mapToDriverReportFilter = (appliedFilters = {}) => ({
  driverId: appliedFilters.driverId || null,
  isActive:
    appliedFilters.statusColor === 'success'
      ? true
      : appliedFilters.statusColor === 'error'
        ? false
        : null,
});
