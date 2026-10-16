import axiosClient from './axiosClient';

import { tokenManager } from '@/core/auth';

// ✅ گرفتن Access Token تازه با کوکی HttpOnly.
// چون سرور در هر Refresh توکن را می‌چرخاند، دو درخواست هم‌زمان یکدیگر را باطل می‌کنند؛
// پس همه‌ی فراخواننده‌ها (بارگذاری صفحه و interceptor خطای 401) یک درخواست مشترک را منتظر می‌مانند.
let inFlight = null;

const refreshSession = () => {
  if (!inFlight) {
    // فقط برای انتقال نشست‌های نسخه‌ی قبلی؛ سرور کوکی را تنظیم می‌کند و بعد از آن دیگر لازم نیست
    const legacyRefreshToken = tokenManager.getLegacyRefreshToken();
    const body = legacyRefreshToken ? { refreshToken: legacyRefreshToken } : {};

    inFlight = axiosClient
      .post('/auth/refresh-token', body)
      .then((response) => {
        tokenManager.clearLegacy();
        tokenManager.setToken(response.data.accessToken);
        return response.data;
      })
      .finally(() => {
        inFlight = null;
      });
  }

  return inFlight;
};

export default refreshSession;
