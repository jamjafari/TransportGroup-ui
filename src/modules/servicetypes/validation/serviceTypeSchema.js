import { required, nonNegative } from '@/validation';

export const serviceTypeSchema = {
  code: [required(' کد سرویس الزامی است')],

  title: [required(' عنوان سرویس الزامی است')],

  serviceIntervalKM: [nonNegative(' کیلومتر سرویس مثبت نیست')],
  serviceIntervalDays: [nonNegative('  سرویس روزانه مثبت نیست')],
};

export default serviceTypeSchema;
