import { apiClient } from '@/services';
import { getCurrentLocale } from '@/i18n';

// ✅ تقویم فعال ارسال می‌شود تا نمودار ماهانه مثل داشبورد شمسی یا میلادی گروه‌بندی شود
export const getFinancialReport = async (filter = {}) => {
  return await apiClient.post('/reports/financial', {
    ...filter,
    calendar: getCurrentLocale().calendar,
  });
};
