import { apiClient } from '@/services';
import { getCurrentLocale } from '@/i18n';

// ✅ تقویم فعال ارسال می‌شود تا نمودار ماهانه مثل داشبورد شمسی یا میلادی گروه‌بندی شود
export const getServiceReport = async (filter = {}) => {
  return await apiClient.post('/reports/service', {
    ...filter,
    calendar: getCurrentLocale().calendar,
  });
};
