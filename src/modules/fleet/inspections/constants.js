export const INSPECTION_RESULT_OPTIONS = [
  { value: 1, label: 'قبول' },
  { value: 2, label: 'رد' },
  { value: 3, label: 'مشروط' },
];

export const inspectionResultChipKey = (result) => {
  switch (result) {
    case 'Passed':
      return 'Success';
    case 'Failed':
      return 'Rejected';
    case 'ConditionalPass':
      return 'Pending';
    default:
      return result;
  }
};
export const attachmentCategoryOptions = [
  { value: 1, label: 'مستندات معاینه فنی' },

  { value: 2, label: 'عکس' },
  { value: 0, label: 'سایر' },
];

export { ATTACHMENT_OWNER_TYPE } from '@/constants/attachmentTypes';
