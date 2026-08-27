import { required, number } from '@/validation';
import { jalaliYearToGregorian } from '@/utils';

const nonNegative = (message) => (value) => {
  if (value === undefined || value === null || value === '') return null;

  return Number(value) >= 0 ? null : message;
};

export const insuranceSchema = {
  vehicleId: [required('شماره پلاک الزامی است')],
  vendorId: [required('نام بیمه گذار الزامی است')],
  premiumAmount: [
    required('مقدار حق بیمه الزامی است'),
    nonNegative('مقدار هزینه نمی‌تواند منفی باشد'),
  ],
  coverageAmount: [
    required('مقدار سقف تعهد بیمه الزامی است'),
    nonNegative('مقدار هزینه نمی‌تواند منفی باشد'),
  ],

  startDate: [required('تاریخ شروع الزامی است')],
  endDate: [required('تاریخ پایان الزامی است')],
  insuranceType: [required('نوع بیمه  الزامی است')],
  status: [required('وضعیت بیمه  الزامی است')],
};

export default insuranceSchema;
