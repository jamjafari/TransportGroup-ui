// هم‌شکل گزارش مأموریت؛ بازه‌ی تاریخ در سرور روی «تاریخ رفت» اعمال می‌شود
export const mapToVehicleRequestReportFilter = (appliedFilters = {}) => ({
  vehicleId: appliedFilters.vehicleId || null,
  driverId: appliedFilters.driverId || null,
  dateFrom: appliedFilters.dateRange?.from || null,
  dateTo: appliedFilters.dateRange?.to || null,
});
