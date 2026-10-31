// ✅ سیاست رمز قوی — باید با PasswordRules.StrongPassword در بک‌اند یکی باشد:
// حداقل ۸ کاراکتر، و دست‌کم یک حرف، یک عدد و یک علامت (هر نویسه‌ای جز حرف، رقم و فاصله).
// هر قانون جدا تعریف شده تا صفحه‌ی تغییر رمز بتواند فهرست شرط‌ها را زنده نشان دهد.
export const STRONG_PASSWORD_MIN_LENGTH = 8;

export const STRONG_PASSWORD_RULES = [
  {
    key: 'length',
    label: 'حداقل ۸ کاراکتر',
    test: (value) => (value ?? '').length >= STRONG_PASSWORD_MIN_LENGTH,
  },
  {
    key: 'letter',
    label: 'دست‌کم یک حرف',
    test: (value) => /\p{L}/u.test(value ?? ''),
  },
  {
    key: 'digit',
    label: 'دست‌کم یک عدد',
    test: (value) => /\p{Nd}/u.test(value ?? ''),
  },
  {
    key: 'symbol',
    label: 'دست‌کم یک علامت (مثل ! @ # $ %)',
    test: (value) => /[^\p{L}\p{Nd}\s]/u.test(value ?? ''),
  },
];

export const isStrongPassword = (value) =>
  STRONG_PASSWORD_RULES.every((rule) => rule.test(value));
