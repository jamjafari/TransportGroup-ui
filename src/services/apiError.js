import i18n from '@/i18n';

// ✅ خطای یکسان برای پاسخ ناموفق apiClient.
// message همان پیام اول است (برای جاهایی که فقط err.message را نشان می‌دهند)؛
// errors همه‌ی پیام‌ها و fieldErrors پیام هر فیلد را نگه می‌دارد (برای FormSaveError).
// پیام‌های سرور از قبل به زبان صفحه‌اند؛ پیام پیش‌فرض (fallback) فارسیِ صدازننده اینجا ترجمه می‌شود.
const toApiError = (response, fallbackMessage) => {
  const errors = response?.errors?.filter(Boolean) ?? [];
  const fallback = fallbackMessage ? i18n.t(fallbackMessage) : fallbackMessage;

  const error = new Error(errors[0] || fallback);

  error.errors = errors.length ? errors : [fallback];
  error.fieldErrors = response?.extra?.fieldErrors ?? {};

  return error;
};

export default toApiError;
