// ✅ تعریف زبان‌های برنامه و هر چیزی که به زبان وابسته است.
// برای افزودن یا تغییر یک زبان، فقط همین فایل را ویرایش کنید.
//
// هر زبان چهار چیز را هم‌زمان تعیین می‌کند:
//   dir      → جهت صفحه (و در نتیجه کش Emotion و theme.direction)
//   calendar → تقویم (شمسی یا میلادی) برای نمایش و انتخاب تاریخ
//   number   → قالب اعداد (ارقام فارسی یا لاتین)
//   font     → خانواده‌ی فونت

export const LOCALES = {
  fa: {
    code: 'fa',
    label: 'فارسی',
    dir: 'rtl',
    calendar: 'persian',
    numberLocale: 'fa-IR',
    fontFamily: "'B Mitra', Vazirmatn, Tahoma, sans-serif",
  },

  en: {
    code: 'en',
    label: 'English',
    dir: 'ltr',
    calendar: 'gregorian',
    numberLocale: 'en-US',
    fontFamily:
      'system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif',
  },
};

export const DEFAULT_LOCALE = 'fa';

export const SUPPORTED_LOCALES = Object.keys(LOCALES);

export const getLocaleConfig = (code) => LOCALES[code] || LOCALES[DEFAULT_LOCALE];
