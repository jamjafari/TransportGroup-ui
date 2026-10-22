import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from './config';

const STORAGE_KEY = 'app_locale';

// ✅ هم‌سبک با core/auth/AuthStorage.js و datagrid/views/viewStorage.js
const LocaleStorage = {
  load() {
    try {
      const value = localStorage.getItem(STORAGE_KEY);
      return SUPPORTED_LOCALES.includes(value) ? value : null;
    } catch {
      // حالت مرور ناشناس یا مسدودبودن storage
      return null;
    }
  },

  save(locale) {
    try {
      localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      // ذخیره نشدن زبان نباید جلوی تغییر زبان را بگیرد
    }
  },

  // اولین بازدید: از زبان مرورگر پیروی می‌کنیم، وگرنه فارسی
  resolveInitial() {
    const saved = LocaleStorage.load();
    if (saved) {
      return saved;
    }

    const browser = (navigator?.language || '').toLowerCase();
    const match = SUPPORTED_LOCALES.find((code) => browser.startsWith(code));

    return match || DEFAULT_LOCALE;
  },
};

export default LocaleStorage;
