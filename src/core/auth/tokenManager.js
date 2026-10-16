// ✅ Access Token فقط در حافظه نگه‌داری می‌شود (نه localStorage/sessionStorage)،
// تا اسکریپت مخرب (XSS) نتواند آن را از storage بخواند.
// Refresh Token در کوکی HttpOnly است که سرور تنظیم می‌کند و جاوااسکریپت اصلاً به آن دسترسی ندارد.
// بعد از رفرش صفحه، AuthProvider با refreshSession() یک Access Token تازه می‌گیرد.

// کلیدهای نسخه‌ی قبلی — فقط برای انتقال نشست‌های قدیمی و پاک‌سازی
const LEGACY_ACCESS_TOKEN = 'access_token';
const LEGACY_REFRESH_TOKEN = 'refresh_token';

let accessToken = null;

const TokenManager = {
  getToken() {
    return accessToken;
  },

  setToken(token) {
    accessToken = token || null;
  },

  clear() {
    accessToken = null;
    TokenManager.clearLegacy();
  },

  // Refresh Token ذخیره‌شده توسط نسخه‌ی قبلی (اگر کاربر قبل از این تغییر وارد شده باشد)
  getLegacyRefreshToken() {
    return (
      localStorage.getItem(LEGACY_REFRESH_TOKEN) ||
      sessionStorage.getItem(LEGACY_REFRESH_TOKEN)
    );
  },

  clearLegacy() {
    localStorage.removeItem(LEGACY_ACCESS_TOKEN);
    localStorage.removeItem(LEGACY_REFRESH_TOKEN);
    sessionStorage.removeItem(LEGACY_ACCESS_TOKEN);
    sessionStorage.removeItem(LEGACY_REFRESH_TOKEN);
  },
};

export default TokenManager;
