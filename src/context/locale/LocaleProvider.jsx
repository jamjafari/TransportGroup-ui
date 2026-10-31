import { useMemo, useCallback } from 'react';

import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import LocaleContext from './LocaleContext';

import i18n, { applyDocumentLocale, getCurrentLocale } from '@/i18n';
import { LOCALES, SUPPORTED_LOCALES } from '@/i18n/config';
import LocaleStorage from '@/i18n/localeStorage';

import rtlCache from '@/theme/rtlCache';
import ltrCache from '@/theme/ltrCache';
import { createAppTheme } from '@/theme/theme';

// ✅ زبان، جهت صفحه، تقویم و فونت را با هم تنظیم می‌کند.
//
// چرا تغییر زبان صفحه را بازگذاری می‌کند:
//   ۱) کش Emotion باید بین muirtl و muiltr عوض شود،
//   ۲) تقویم و قالب اعداد در سطح ماژول نگه‌داری می‌شوند،
//   ۳) پیام‌های اعتبارسنجی و عنوان‌های پیش‌فرض نمودارها در زمان import ساخته می‌شوند
//      و نمی‌توانند Context را بخوانند.
// بازگذاری همه‌ی این‌ها را یک‌جا و بدون حالت نیمه‌تغییریافته درست می‌کند.
// نشست کاربر از بین نمی‌رود، چون Access Token با کوکی Refresh بازسازی می‌شود.
const LocaleProvider = ({ children }) => {
  const locale = getCurrentLocale();

  const isRtl = locale.dir === 'rtl';

  const setLocale = useCallback(
    (code) => {
      if (!SUPPORTED_LOCALES.includes(code) || code === locale.code) {
        return;
      }

      LocaleStorage.save(code);
      window.location.reload();
    },
    [locale.code],
  );

  const theme = useMemo(
    () =>
      createAppTheme({
        direction: locale.dir,
        fontFamily: locale.fontFamily,
        localeCode: locale.code,
      }),
    [locale.dir, locale.fontFamily, locale.code],
  );

  const value = useMemo(
    () => ({
      locale, // { code, label, dir, calendar, numberLocale, fontFamily }
      isRtl,
      dir: locale.dir,
      setLocale,
      locales: LOCALES,
    }),
    [locale, isRtl, setLocale],
  );

  return (
    <LocaleContext.Provider value={value}>
      <CacheProvider value={isRtl ? rtlCache : ltrCache}>
        <ThemeProvider
          theme={theme}
          defaultMode="system"
          noSsr
          disableTransitionOnChange
        >
          <CssBaseline />
          {children}
        </ThemeProvider>
      </CacheProvider>
    </LocaleContext.Provider>
  );
};

export { applyDocumentLocale, i18n };

export default LocaleProvider;
