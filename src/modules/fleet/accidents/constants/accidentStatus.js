export const ACCIDENT_SEVERITY = {
  MINOR: 1,
  MODERATE: 2,
  SEVERE: 3,
  TOTAL_LOSS: 4,
};

export const accidentSeverityOptions = [
  { value: ACCIDENT_SEVERITY.MINOR, label: 'خفیف' },
  { value: ACCIDENT_SEVERITY.MODERATE, label: 'متوسط' },
  { value: ACCIDENT_SEVERITY.SEVERE, label: 'شدید' },
  { value: ACCIDENT_SEVERITY.TOTAL_LOSS, label: 'خسارت کلی' },
];

export const ACCIDENT_STATUS = {
  REPORTED: 1,
  UNDER_REVIEW: 2,
  RESOLVED: 3,
};

export const accidentStatusOptions = [
  { value: ACCIDENT_STATUS.REPORTED, label: 'گزارش‌شده' },
  { value: ACCIDENT_STATUS.UNDER_REVIEW, label: 'در حال بررسی' },
  { value: ACCIDENT_STATUS.RESOLVED, label: 'بسته‌شده' },
];

export const accidentStatusChipKey = (status) => {
  switch (status) {
    case ACCIDENT_STATUS.REPORTED:
      return 'warning';
    case ACCIDENT_STATUS.UNDER_REVIEW:
      return 'Pending';
    case ACCIDENT_STATUS.RESOLVED:
      return 'success';
    default:
      return status;
  }
};
export const attachmentCategoryOptions = [
  { value: 1, label: 'مستندات تصادف' },

  { value: 2, label: 'عکس' },
  { value: 0, label: 'سایر' },
];

export { ATTACHMENT_OWNER_TYPE } from '@/constants/attachmentTypes';
