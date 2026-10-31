import { tokenManager } from '@/core/auth';
import i18n from '@/i18n';

const requestInterceptor = (config) => {
  const token = tokenManager.getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  // ✅ زبان فعال برای سرور، تا پیام‌های اعتبارسنجی هم‌زبان با صفحه برگردند
  config.headers['Accept-Language'] = i18n.language;

  return config;
};

const requestErrorInterceptor = (error) => {
  return Promise.reject(error);
};

export { requestInterceptor, requestErrorInterceptor };
