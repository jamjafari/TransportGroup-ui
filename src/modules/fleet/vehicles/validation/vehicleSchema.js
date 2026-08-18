import { required, number, minLength } from '@/validation';
import { jalaliYearToGregorian } from '@/utils';

const productionYearRange = (message) => (value) => {
  if (value === undefined || value === null || value === '') return null;

  const gregorianYear = jalaliYearToGregorian(value);

  return gregorianYear >= 1950 && gregorianYear <= 2027 ? null : message;
};

const nonNegative = (message) => (value) => {
  if (value === undefined || value === null || value === '') return null;

  return Number(value) >= 0 ? null : message;
};
const plateFormat = (message) => (value) => {
  if (!value) return null;
  const isValid = /^\d{2}[^\d]+\d{3}-\d{2}$/.test(value);
  return isValid ? null : message;
};

export const vehicleSchema = {
  plateNumber: [
    required('شماره پلاک الزامی است'),
    plateFormat('فرمت پلاک کامل نیست'),
  ],
  brand: [required('برند الزامی است')],
  model: [required('مدل الزامی است')],
  chassisNumber: [
    required('شماره شاسی الزامی است'),
    minLength(5, 'شماره شاسی معتبر نیست'),
  ],
  engineNumber: [required('شماره موتور الزامی است')],
  productionYear: [
    required('سال ساخت الزامی است'),
    number('سال ساخت باید عدد باشد'),
    productionYearRange('سال ساخت معتبر نیست'),
  ],
  fuelType: [required('نوع سوخت را انتخاب کنید')],
  status: [required('وضعیت خودرو را انتخاب کنید')],
  purchaseDate: [required('تاریخ خرید الزامی است')],
  currentKM: [
    required('کارکرد فعلی الزامی است'),
    number('کارکرد باید عدد باشد'),
    nonNegative('کارکرد نمی‌تواند منفی باشد'),
  ],
};

export default vehicleSchema;
