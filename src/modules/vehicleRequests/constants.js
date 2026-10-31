import { getDateLocale } from '@/utils';

// مقدار عددی VehicleRequestStatus در بک‌اند → کلید statusLabels / StatusChip
export const REQUEST_STATUS = {
  1: 'Pending',
  2: 'Approved',
  3: 'Rejected',
  4: 'Cancelled',
};

export const REQUEST_STATUS_FILTERS = [
  { value: '', label: 'همه' },
  { value: 1, label: 'در انتظار تایید' },
  { value: 2, label: 'تایید شده' },
  { value: 3, label: 'رد شده' },
  { value: 4, label: 'لغو شده' },
];

// "08:30" (از input زمان) → "08:30:00" که System.Text.Json آن را TimeSpan می‌خواند
export const toApiTime = (value) => (value ? `${value.slice(0, 5)}:00` : null);

// "08:30:00" (TimeSpan از سرور) → «۰۸:۳۰» / "08:30" با ارقام زبان فعال
export const formatTime = (value) => {
  if (!value) return '';
  const [hours, minutes] = value.split(':').map(Number);
  return new Date(2000, 0, 1, hours, minutes).toLocaleTimeString(
    getDateLocale().numberLocale,
    { hour: '2-digit', minute: '2-digit', hour12: false },
  );
};
