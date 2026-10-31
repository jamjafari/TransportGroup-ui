// ✅ تبدیل مقدارهای دستیار ⇄ مقدارهای قابل‌ویرایش فرم ⇄ متنی که به‌عنوان بازخورد برمی‌گردد.
//
// مقدار دستیار بر حسب نوع فیلد:
//   date: { iso, jalali, calendar }   plate: { twoDigits, letter, threeDigits, region }
//   amount: { amount, unit }          year: { year, calendar, gregorian }   count: number
//   بقیه: رشته (enum: مقدار گزینه)
//
// مقدار فرم: date ← Date (نیمه‌شب UTC، مثل AppJalaliDatePicker)، بقیه ← رشته.

import { plateToString } from '../constants/sections';

const UNIT_WORD = { rial: 'ریال', toman: 'تومان' };

export const isoToDate = (iso) => (iso ? new Date(`${iso}T00:00:00Z`) : null);

export const dateToIso = (date) => (date instanceof Date && !Number.isNaN(date) ? date.toISOString().slice(0, 10) : null);

export const fromAssistant = (kind, value) => {
  if (value == null) return kind === 'date' ? null : '';
  switch (kind) {
    case 'date':
      return isoToDate(value.iso);
    case 'plate':
      return plateToString(value);
    case 'amount':
      return String(value.amount ?? '');
    case 'year':
      return String(value.year ?? '');
    default:
      return String(value);
  }
};

const ASCII_DIGITS = (text) =>
  String(text)
    .replace(/[۰-۹]/g, (d) => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))
    .replace(/[٠-٩]/g, (d) => '٠١٢٣٤٥٦٧٨٩'.indexOf(d));

// مقدار فرم ← متنی که دستیار (و پیش از آن parse_value) می‌فهمد؛ خالی ⇐ null
export const toFeedback = (kind, editorValue, unit) => {
  if (kind === 'date') return dateToIso(editorValue);
  const text = ASCII_DIGITS(editorValue ?? '').trim();
  if (!text) return null;
  if (kind === 'amount') {
    const digits = text.replace(/[^\d]/g, '');
    return digits ? `${digits}${unit && UNIT_WORD[unit] ? ` ${UNIT_WORD[unit]}` : ''}` : null;
  }
  return text;
};

// مقدارهای فرم برای پیدا کردن رکورد پیشنهادی (پلاک، کد ملی، شماره فاکتور، …)
export const matchValues = (values) =>
  Object.fromEntries(Object.entries(values).map(([key, v]) => [key, v instanceof Date ? v : ASCII_DIGITS(v ?? '')]));

export const sameEditorValue = (a, b) =>
  a instanceof Date || b instanceof Date ? dateToIso(a) === dateToIso(b) : String(a ?? '') === String(b ?? '');

// تاریخ‌های خودِ پیوست (برای گزارش اسناد رو به انقضا)
const ISSUE_KEYS = ['issueDate', 'startDate', 'inspectionDate', 'invoiceDate'];
export const attachmentDates = (values) => ({
  issueDate: ISSUE_KEYS.map((k) => values[k]).find((v) => v instanceof Date) ?? null,
  expiryDate: values.expiryDate instanceof Date ? values.expiryDate : null,
});
