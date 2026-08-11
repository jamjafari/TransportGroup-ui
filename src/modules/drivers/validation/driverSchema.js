import { required, minLength, maxLength } from '@/validation';

export const driverSchema = {
  firstName: [required('نام راننده الزامی است')],

  lastName: [required('نام خانوادگی الزامی است')],

  nationalCode: [
    required('کد ملی الزامی است'),
    minLength(10, 'کد ملی معتبر نیست'),
    maxLength(10, 'کد ملی معتبر نیست'),
  ],

  personnelCode: [
    required('شماره پرسنلی الزامی است'),
    minLength(4, 'شماره پرسنلی معتبر نیست'),
  ],

  licenseNumber: [required('شماره گواهی نامه الزامی است')],

  licenseExpireDate: [required('تاریخ انقضای گواهی نامه الزامی است')],
};

export default driverSchema;
