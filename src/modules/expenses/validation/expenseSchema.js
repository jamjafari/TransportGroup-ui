import { required, minLength, nonNegative } from '@/validation';

export const expenseSchema = {
  vehicleId: [required(' نام خودرو الزامی است')],

  expenseTypeId: [required('نوع هزینه الزامی  ')],

  amount: [
    required('مقدار هزینه  الزامی است'),
    minLength(0, ' مقدار معتبر نیست'),
    nonNegative('مقدار هزینه نمی‌تواند منفی باشد'),
  ],

  expenseDate: [required('تاریخ   هزینه الزامی است')],
};

export default expenseSchema;
