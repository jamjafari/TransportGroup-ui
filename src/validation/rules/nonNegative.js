// ✅ قبلاً value.length بررسی می‌شد، که برای اعداد منفی هم همیشه رد نمی‌شد
const nonNegative =
  (message = 'نباید منفی باشد') =>
  (value) => {
    if (value === undefined || value === null || value === '') return null;

    return Number(value) >= 0 ? null : message;
  };
export default nonNegative;
