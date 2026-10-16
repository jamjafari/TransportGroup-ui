// src/constants/attachmentTypes.js

export const ATTACHMENT_OWNER_TYPE = {
  VEHICLE: 1,
  DERIVER: 2,
  EXPENSE: 3,
  VEHICLE_SERVICE: 4,
  FUEL_CARD: 5,
  FUEL_RECORD: 6,
  TIRE: 7,
  VENDOR: 8,
  ACCIDENT: 9,
  INSURANCE: 10,
  INSPECTION: 11,
  TENANT: 12,
};

// ✅ باید با AttachmentService.AllowedContentTypes در بک‌اند یکی باشد
export const ALLOWED_ATTACHMENT_EXTENSIONS = [
  '.jpg',
  '.jpeg',
  '.png',
  '.gif',
  '.webp',
  '.pdf',
  '.doc',
  '.docx',
  '.xls',
  '.xlsx',
];

export const MAX_ATTACHMENT_SIZE_MB = 10;

// پیام خطا برمی‌گرداند، یا null اگر فایل مجاز باشد
export const validateAttachmentFile = (
  file,
  allowedExtensions = ALLOWED_ATTACHMENT_EXTENSIONS,
) => {
  const name = file?.name?.toLowerCase() ?? '';
  const extension = name.includes('.') ? name.slice(name.lastIndexOf('.')) : '';

  if (!allowedExtensions.includes(extension)) {
    return `نوع فایل مجاز نیست. پسوندهای مجاز: ${allowedExtensions.join(' ')}`;
  }

  if (file.size > MAX_ATTACHMENT_SIZE_MB * 1024 * 1024) {
    return `حجم فایل نباید بیشتر از ${MAX_ATTACHMENT_SIZE_MB} مگابایت باشد.`;
  }

  return null;
};

// export const attachmentCategoryOptions = [
//   { value: 1, label: 'بیمه‌نامه' },
//   { value: 2, label: 'معاینه فنی' },
//   { value: 3, label: 'سند مالکیت' },
//   { value: 4, label: 'گواهینامه' },
//   { value: 5, label: 'عکس' },
//   { value: 0, label: 'سایر' },
// ];
