// src/utils/date/jalaliYear.js — نسخه‌ی کامل با تابع جدید

import DateObject from 'react-date-object';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import gregorian from 'react-date-object/calendars/gregorian';
import gregorian_en from 'react-date-object/locales/gregorian_en';
import { persianMonthNames } from '../persianMonthNames';
/**
 * تبدیل سال شمسی (مثلاً 1401) به سال میلادی معادل.
 * مبنا: اول فروردین همون سال شمسی (تخمین استاندارد برای فیلدهایی که فقط «سال» دارن، نه تاریخ کامل).
 */
export const jalaliYearToGregorian = (jalaliYear) => {
  if (jalaliYear === null || jalaliYear === undefined || jalaliYear === '') {
    return null;
  }

  const date = new DateObject({
    calendar: persian,
    locale: persian_fa,
    year: Number(jalaliYear),
    month: 1,
    day: 1,
  });

  return date.convert(gregorian, gregorian_en).year;
};

/**
 * تبدیل سال میلادی به سال شمسی معادل (برای نمایش مقدار موجود موقع ادیت).
 */
export const gregorianYearToJalali = (gregorianYear) => {
  if (
    gregorianYear === null ||
    gregorianYear === undefined ||
    gregorianYear === ''
  ) {
    return null;
  }

  const date = new DateObject({
    calendar: gregorian,
    locale: gregorian_en,
    year: Number(gregorianYear),
    month: 1,
    day: 1,
  });

  return date.convert(persian, persian_fa).year;
};

/**
 * تبدیل یک تاریخ کامل میلادی (Date یا رشته‌ی ISO) به رشته‌ی شمسی خوانا (YYYY/MM/DD).
 * برای نمایش تاریخ‌هایی مثل purchaseDate تو جدول‌ها و بخش‌های فقط-نمایشی.
 */
export const formatJalaliDate = (value) => {
  if (!value) return '—';

  const date = new DateObject({
    date: new Date(value),
    calendar: gregorian,
    locale: gregorian_en,
  }).convert(persian, persian_fa);

  return date.format('YYYY/MM/DD');
};
export const getJalaliYearMonth = (value = new Date()) => {
  if (!value) return null;

  const date = new DateObject({
    date: new Date(value),
    calendar: gregorian,
    locale: gregorian_en,
  }).convert(persian, persian_fa);

  return {
    year: Number(date.year),
    month: Number(date.month),
  };
};

export const getRollingJalaliMonths = (count = 12) => {
  const { year: currentYear, month: currentMonth } = getJalaliYearMonth();

  return Array.from({ length: count }, (_, index) => {
    const absoluteMonth = currentYear * 12 + (currentMonth - 1) - index;

    const year = Math.floor(absoluteMonth / 12);
    const month = (absoluteMonth % 12) + 1;

    return {
      year,
      month,
      monthName: persianMonthNames[month - 1],
      fuelAmount: 0,
      missionCount: 0,
      distanceKm: 0,
      amount: 0,
    };
  });
};
