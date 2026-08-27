import { required, number, nonNegative } from '@/validation';

export const serviceSchema = {
  vehicleId: [required('نام خودرو الزامی است')],

  serviceDate: [required('تاریخ سرویس  الزامی است')],

  serviceTypeId: [required('  نوع سرویس الزامی است')],

  odometerKM: [
    required(' کیلومتر خودرو الزامی است'),
    number('کیلومتر باید عدد باشد'),
    nonNegative('کیلومتر نمی‌تواند منفی باشد'),
  ],
};

export default serviceSchema;
