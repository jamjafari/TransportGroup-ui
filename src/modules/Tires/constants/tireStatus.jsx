export const getTireStatusLabel = (isActive) => (isActive ? 'فعال' : 'غیرفعال');
// اضافه به constants.js موجود

export const tireStatusChipKey = (isActive) =>
  isActive ? 'Active' : 'Inactive';

export const TIRE_POSITION = {
  FRONT: 1,
  BACK: 2,
  FRONT_RIGHT: 3,
  FRONT_LEFT: 4,
  BACK_RIGHT: 5,
  BACK_LEFT: 6,
};

export const tirePositionOptions = [
  { value: TIRE_POSITION.FRONT_LEFT, label: 'جلو چپ' },
  { value: TIRE_POSITION.FRONT_RIGHT, label: 'جلو راست' },
  { value: TIRE_POSITION.BACK_LEFT, label: 'عقب چپ' },
  { value: TIRE_POSITION.BACK_RIGHT, label: 'عقب راست' },
  { value: TIRE_POSITION.FRONT, label: 'جلو (عمومی)' },
  { value: TIRE_POSITION.BACK, label: 'عقب (عمومی)' },
];
