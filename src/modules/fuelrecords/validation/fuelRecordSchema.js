import { required, number, minLength } from '@/validation';
import { jalaliYearToGregorian } from '@/utils';

const nonNegative = (message) => (value) => {
  if (value === undefined || value === null || value === '') return null;

  return Number(value) >= 0 ? null : message;
};

export const vehicleSchema = {
  vehicleId: [required('شماره پلاک الزامی است')],
  driverId: [required('نام راننده الزامی است')],
  fuelAmount: [
    required('مقدار سوختگیری الزامی است'),
    nonNegative('مقدار هزینه نمی‌تواند منفی باشد'),
  ],
  unitPrice: [
    required(' قیمت واحد الزامی است'),
    minLength(0, ' قیمت واحد معتبر نیست'),
  ],

  fuelType: [required('نوع سوخت را انتخاب کنید')],
  fuelDate: [required('تاریخ سوختگیری الزامی است')],
  odometerKM: [
    required(' کیلومتر خودرو الزامی است'),
    number('کیلومتر باید عدد باشد'),
    nonNegative('کیلومتر نمی‌تواند از کیلومتر خودرو کمتر باشد'),
  ],
};

export default vehicleSchema;
