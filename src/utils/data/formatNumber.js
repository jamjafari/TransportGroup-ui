import { getDateLocale } from './dateLocale';

// ✅ قالب‌بندی عدد وابسته به زبان.
//
// قبلاً این کار سه‌شکلی انجام می‌شد: toLocaleString('fa-IR') در حدود ۱۰ جا،
// toLocaleString('en-US') در حدود ۲۵ جا، و toLocaleString() بدون locale در بقیه.
// نتیجه این بود که ارقام فارسی و لاتین در یک داشبورد کنار هم دیده می‌شدند.
// این تابع همه را به زبان فعال گره می‌زند.

export const formatNumber = (value, options) => {
  if (value === null || value === undefined || value === '') {
    return '—';
  }

  const number = Number(value);

  if (Number.isNaN(number)) {
    return '—';
  }

  return number.toLocaleString(getDateLocale().numberLocale, options);
};

export const formatCurrency = (value) =>
  formatNumber(value, { maximumFractionDigits: 0 });
