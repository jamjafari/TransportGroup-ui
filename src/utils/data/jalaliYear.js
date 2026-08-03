// src/utils/date/jalaliYear.js

import DateObject from 'react-date-object';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import gregorian from 'react-date-object/calendars/gregorian';
import gregorian_en from 'react-date-object/locales/gregorian_en';

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
