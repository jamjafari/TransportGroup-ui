import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import LocaleStorage from './localeStorage';
import { DEFAULT_LOCALE, getLocaleConfig } from './config';

// ✅ راهبرد «کلیدِ طبیعی»: خودِ متن فارسی، کلید ترجمه است.
//
//   t('داشبورد')  →  انگلیسی: 'Dashboard'   |   فارسی: 'داشبورد'
//
// چرا این مهم است: اگر کلیدی در en.json نباشد، i18next خودِ کلید را برمی‌گرداند؛
// یعنی متن فارسی. پس فارسی هیچ‌وقت خراب نمی‌شود و برای فارسی هیچ فایل ترجمه‌ای لازم نیست.
// ترجمه‌ی تدریجی هم همین‌طور ممکن می‌شود: هر کلیدی که هنوز ترجمه نشده، فارسی می‌ماند.
//
// نکته: keySeparator و nsSeparator باید خاموش باشند، چون متن فارسی خودش
// نقطه و دونقطه دارد و i18next آن‌ها را جداکننده‌ی کلید می‌فهمد.

const initialLocale = LocaleStorage.resolveInitial();

i18next.use(initReactI18next).init({
  lng: initialLocale,
  fallbackLng: false, // کلید پیدا نشد ⇒ خودِ کلید (متن فارسی) برگردانده شود

  resources: {
    en: { translation: en },
    // fa عمداً خالی است — متن فارسی همان کلید است
  },

  keySeparator: false,
  nsSeparator: false,

  returnEmptyString: false, // ترجمه‌ی خالی ⇒ به فارسی برگرد

  interpolation: {
    escapeValue: false, // React خودش escape می‌کند
  },

  // در توسعه، کلیدهای ترجمه‌نشده را در کنسول نشان نده (هزاران کلید فارسی داریم)
  saveMissing: false,
  debug: false,
});

// ✅ قبل از اولین رندر React اجرا می‌شود تا صفحه بدون پرش با جهت و زبان درست بالا بیاید.
export const applyDocumentLocale = (code = i18next.language) => {
  const config = getLocaleConfig(code);

  document.documentElement.lang = config.code;
  document.documentElement.dir = config.dir;

  return config;
};

export const getCurrentLocale = () =>
  getLocaleConfig(i18next.language || DEFAULT_LOCALE);

export default i18next;
