import * as PersianCalendarNs from 'react-date-object/calendars/persian';
import * as PersianFaNs from 'react-date-object/locales/persian_fa';
import * as GregorianCalendarNs from 'react-date-object/calendars/gregorian';
import * as GregorianEnNs from 'react-date-object/locales/gregorian_en';

import { persianMonthNames } from '../persianMonthNames';

// react-date-object منتشرشده به‌صورت CJS است و بسته به باندلر، default یک لایه
// تودرتو می‌شود. همان الگوی دفاعی که AppJalaliDatePicker از قبل استفاده می‌کرد.
const unwrap = (module) => module?.default?.default ?? module?.default ?? module;

const persian = unwrap(PersianCalendarNs);
const persian_fa = unwrap(PersianFaNs);
const gregorian = unwrap(GregorianCalendarNs);
const gregorian_en = unwrap(GregorianEnNs);

// ✅ تقویم فعال برنامه، در سطح ماژول.
//
// چرا در سطح ماژول و نه در Context: formatJalaliDate یک تابع ساده است که از
// حدود ۴۴ جا داخل callback های renderCell صدا زده می‌شود، نه از داخل کامپوننت.
// تبدیل همه‌ی آن‌ها به hook تغییر بزرگ و بی‌دلیلی بود.
// تغییر زبان صفحه را بازگذاری می‌کند، پس این مقدار در هر بارگذاری یک‌بار تنظیم می‌شود.

const GREGORIAN_MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const CALENDARS = {
  persian: {
    calendar: persian,
    locale: persian_fa,
    monthNames: persianMonthNames,
  },

  gregorian: {
    calendar: gregorian,
    locale: gregorian_en,
    monthNames: GREGORIAN_MONTH_NAMES,
  },
};

let active = {
  ...CALENDARS.persian,
  numberLocale: 'fa-IR',
};

// از main.jsx در زمان بالا آمدن برنامه صدا زده می‌شود
export const setDateLocale = (localeConfig) => {
  const chosen = CALENDARS[localeConfig?.calendar] || CALENDARS.persian;

  active = {
    ...chosen,
    numberLocale: localeConfig?.numberLocale || 'fa-IR',
  };

  return active;
};

export const getDateLocale = () => active;

// تقویم مبدأ همیشه میلادی است، چون مقادیر از سرور ISO میلادی می‌آیند
export const SOURCE_CALENDAR = gregorian;
export const SOURCE_LOCALE = gregorian_en;
