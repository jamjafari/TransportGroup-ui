export const INSURANCE_TYPE = {
  THIRDPARTY: 1,
  BODY: 2,
  CARGO: 3,
};

export const insuranceTypeOptions = [
  { value: INSURANCE_TYPE.THIRDPARTY, label: 'بیمه شخص ثالث' },
  { value: INSURANCE_TYPE.BODY, label: 'بیمه بدنه' },
  { value: INSURANCE_TYPE.CARGO, label: '   بیمه بار' },
];

export const STATUS_TYPE = {
  ACTIVE: 1,
  EXPIRED: 2,
  CANCELED: 3,
  PENDING: 4,
};

export const statusTypeOptions = [
  { value: STATUS_TYPE.ACTIVE, label: '  فعال' },
  { value: STATUS_TYPE.EXPIRED, label: ' منقضی شده' },
  { value: STATUS_TYPE.CANCELED, label: '    کنسل شده' },
  { value: STATUS_TYPE.PENDING, label: '    در حال بررسی' },
];

export { ATTACHMENT_OWNER_TYPE } from '@/constants/attachmentTypes';
