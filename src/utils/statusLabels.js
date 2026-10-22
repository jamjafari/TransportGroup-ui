import i18n from '@/i18n';

// ✅ تنها جایی که برچسب‌های وضعیت تعریف می‌شوند.
// قبلاً StatusChip.jsx همین ۲۸ کلید را دوباره با متن‌های کمی متفاوت تکرار می‌کرد
// (مثلاً 'مشروط ' و ' معوق' با فاصله‌ی اضافه)؛ اکنون StatusChip فقط رنگ و آیکن
// نگه می‌دارد و برچسب را از همین‌جا می‌گیرد — یعنی ترجمه هم فقط یک‌بار لازم است.
export const statusLabels = {
  TankFull: 'باک پر',
  TankNotFull: 'باک پر نیست',
  Approved: 'تایید شده',
  Pending: 'در انتظار تایید',
  Planned: 'برنامه‌ریزی‌شده',
  Rejected: 'رد شده',
  Conditional: 'مشروط',
  Active: 'فعال',
  Inactive: 'غیرفعال',
  Running: 'در حال انجام',
  Completed: 'تکمیل شده',
  Mission: 'در مأموریت',
  Repair: 'در تعمیرگاه',
  Canceled: 'لغو شده',
  Cancelled: 'لغو شده',
  Warning: 'هشدار',
  Critical: 'هشدار آخر',
  Expired: 'منقضی شده',
  Required: 'نیازمند سرویس',
  Overdue: 'معوق',
  ServiceCompleted: 'انجام شده',
  Success: 'تایید شده',
  warning: 'هشدار',
  error: 'هشدار جدی',
  primary: 'در عملیات',
  InRepair: 'در حال تعمیر',
  Sold: 'فروخته‌شده',
  ExpiringSoon: 'نزدیک به انقضا',
};

// برای کد قدیمی که مستقیماً به متن فارسی نیاز دارد (مثلاً خروجی PDF/Excel)
export const getStatusLabel = (status) => statusLabels[status] ?? status;

// نسخه‌ی ترجمه‌شده — همانی که در UI باید نمایش داده شود
export const getTranslatedStatusLabel = (status) => {
  const label = statusLabels[status] ?? status;
  return i18n.t(label);
};
