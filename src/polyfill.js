// این فایل باید به‌عنوان اولین import در main.jsx اضافه شود
// تا قبل از اجرای هر کد دیگری (از جمله کتابخانه‌های خارجی مثل چارت‌ها)، این polyfill آماده باشد.

if (typeof Object.hasOwn !== 'function') {
  Object.defineProperty(Object, 'hasOwn', {
    value: function (obj, prop) {
      if (obj === null || obj === undefined) {
        throw new TypeError('Cannot convert undefined or null to object');
      }
      return Object.prototype.hasOwnProperty.call(Object(obj), prop);
    },
    configurable: true,
    enumerable: false,
    writable: true,
  });
}
