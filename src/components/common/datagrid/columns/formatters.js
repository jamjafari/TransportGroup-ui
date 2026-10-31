import i18n from '@/i18n';
import { formatNumber, formatDate } from '@/utils';

// ✅ عدد و تاریخ با زبان فعال (نه زبان مرورگر)؛ بله/خیر هم ترجمه می‌شود
export const formatValue = (value, type) => {
  if (value === null || value === undefined) {
    return '-';
  }

  switch (type) {
    case 'number':
      return formatNumber(value);

    case 'date':
      return formatDate(value);

    case 'boolean':
      return value ? i18n.t('بله') : i18n.t('خیر');

    default:
      return value;
  }
};
