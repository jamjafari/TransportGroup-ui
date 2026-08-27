/**
 * مقادیر رشته‌ی خالی ('') فیلدهای عددیِ مشخص‌شده در یک آبجکت را به null تبدیل می‌کند
 * و بقیه‌ی فیلدهای عددی معتبر را به Number تبدیل می‌کند — برای جلوگیری از خطای
 * "JSON value could not be converted to Nullable<int/decimal>" در بک‌اند.NET.
 *
 * @param {Object} values - آبجکت values فرم
 * @param {string[]} fields - اسم فیلدهایی که باید sanitize بشن
 * @returns {Object} یک کپی از values با فیلدهای مشخص‌شده sanitize‌شده
 *
 * مثال:
 * sanitizeNumericFields(values, ['odometerKm', 'estimatedDamageCost'])
 * // { ...values, odometerKm: values.odometerKm === '' ? null : Number(values.odometerKm), ... }
 */
export const sanitizeNumericFields = (values, fields = []) => {
  const result = { ...values };

  fields.forEach((field) => {
    const value = result[field];

    if (value === '' || value === null || value === undefined) {
      result[field] = null;
      return;
    }

    const num = Number(value);
    result[field] = Number.isNaN(num) ? null : num;
  });

  return result;
};

export default sanitizeNumericFields;
