import i18n from '@/i18n';

// ✅ نام سازمان به زبان فعال: در انگلیسی nameEn (اگر وارد شده باشد)، وگرنه همان name.
// همه‌ی جاهایی که نام سازمان را نمایش می‌دهند (سرصفحه، خروجی PDF، دیالوگ‌ها) از این تابع استفاده کنند.
export const getTenantDisplayName = (tenant) => {
  if (!tenant) return '';
  const english = i18n.language === 'en' && tenant.nameEn?.trim();
  return english || tenant.name || '';
};
