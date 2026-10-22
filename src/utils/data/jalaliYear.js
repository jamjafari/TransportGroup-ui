// تبدیل و قالب‌بندی تاریخ، وابسته به تقویم فعال (شمسی یا میلادی).
//
// نام‌های صادرشده عمداً تغییر نکرده‌اند تا حدود ۴۴ محل استفاده‌ی formatJalaliDate
// و سایر توابع دست‌نخورده بمانند. برای کد جدید از formatDate استفاده کنید.

import * as DateObjectNs from 'react-date-object';

import {
  getDateLocale,
  SOURCE_CALENDAR,
  SOURCE_LOCALE,
} from './dateLocale';

// بسته به باندلر، default این بسته‌ی CJS یک لایه تودرتو می‌شود
const DateObject =
  DateObjectNs?.default?.default ?? DateObjectNs?.default ?? DateObjectNs;

/**
 * تبدیل «سال» تقویم فعال به سال میلادی.
 * در حالت انگلیسی تقویم فعال خودش میلادی است، پس تبدیلی لازم نیست.
 * مبنا: اول فروردین همان سال (تخمین استاندارد برای فیلدهایی که فقط «سال» دارند).
 */
export const jalaliYearToGregorian = (year) => {
  if (year === null || year === undefined || year === '') {
    return null;
  }

  const { calendar, locale } = getDateLocale();

  if (calendar === SOURCE_CALENDAR) {
    return Number(year);
  }

  const date = new DateObject({
    calendar,
    locale,
    year: Number(year),
    month: 1,
    day: 1,
  });

  return date.convert(SOURCE_CALENDAR, SOURCE_LOCALE).year;
};

/**
 * تبدیل سال میلادی به سال تقویم فعال (برای نمایش مقدار ذخیره‌شده موقع ویرایش).
 */
export const gregorianYearToJalali = (gregorianYear) => {
  if (
    gregorianYear === null ||
    gregorianYear === undefined ||
    gregorianYear === ''
  ) {
    return null;
  }

  const { calendar, locale } = getDateLocale();

  if (calendar === SOURCE_CALENDAR) {
    return Number(gregorianYear);
  }

  const date = new DateObject({
    calendar: SOURCE_CALENDAR,
    locale: SOURCE_LOCALE,
    year: Number(gregorianYear),
    month: 1,
    day: 1,
  });

  return date.convert(calendar, locale).year;
};

/**
 * قالب‌بندی یک تاریخ میلادی (Date یا رشته‌ی ISO) به رشته‌ی خوانا YYYY/MM/DD
 * در تقویم فعال. ارقام هم از locale می‌آید: فارسی در حالت شمسی، لاتین در حالت میلادی.
 */
export const formatDate = (value) => {
  if (!value) return '—';

  const { calendar, locale } = getDateLocale();

  const date = new DateObject({
    date: new Date(value),
    calendar: SOURCE_CALENDAR,
    locale: SOURCE_LOCALE,
  }).convert(calendar, locale);

  return date.format('YYYY/MM/DD');
};

// نام قدیمی — برای سازگاری با محل‌های استفاده‌ی موجود حفظ شده است
export const formatJalaliDate = formatDate;

export const getYearMonth = (value = new Date()) => {
  if (!value) return null;

  const { calendar, locale } = getDateLocale();

  const date = new DateObject({
    date: new Date(value),
    calendar: SOURCE_CALENDAR,
    locale: SOURCE_LOCALE,
  }).convert(calendar, locale);

  return {
    year: Number(date.year),
    month: Number(date.month),
  };
};

export const getJalaliYearMonth = getYearMonth;

export const getRollingMonths = (count = 12) => {
  const { monthNames } = getDateLocale();

  const { year: currentYear, month: currentMonth } = getYearMonth();

  return Array.from({ length: count }, (_, index) => {
    const absoluteMonth = currentYear * 12 + (currentMonth - 1) - index;

    const year = Math.floor(absoluteMonth / 12);
    const month = (absoluteMonth % 12) + 1;

    return {
      year,
      month,
      monthName: monthNames[month - 1],
      fuelAmount: 0,
      missionCount: 0,
      distanceKm: 0,
      amount: 0,
    };
  });
};

export const getRollingJalaliMonths = getRollingMonths;
