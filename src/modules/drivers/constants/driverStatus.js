export const attachmentCategoryOptions = [
  { value: 1, label: 'گواهی نامه' },
  { value: 2, label: ' کارت ملی' },
  { value: 3, label: 'کارت پرسنلی ' },
  { value: 4, label: 'شناسنامه ' },
  { value: 5, label: 'عکس' },
  { value: 0, label: 'سایر' },
];
export { ATTACHMENT_OWNER_TYPE } from '@/constants/attachmentTypes';

export const driverStatusChipKey = (isActive) =>
  isActive ? 'Active' : 'Inactive';

export const getDriverStatusLabel = (isActive) =>
  isActive ? 'فعال' : 'غیرفعال';
