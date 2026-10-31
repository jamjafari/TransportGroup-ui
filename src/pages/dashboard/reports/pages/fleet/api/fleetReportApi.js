import { apiClient } from '@/services';
import { getCurrentLocale } from '@/i18n';

// ✅ تقویم فعال ارسال می‌شود تا نمودار ماهانه مثل داشبورد شمسی یا میلادی گروه‌بندی شود
export const getFleetReport = async (filter = {}) => {
  return await apiClient.post('/reports/fleet', {
    ...filter,
    calendar: getCurrentLocale().calendar,
  });
};
