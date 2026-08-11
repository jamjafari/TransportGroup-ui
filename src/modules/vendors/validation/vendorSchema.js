import { required, number, minLength, phone, email } from '@/validation';

export const vendorSchema = {
  vendorName: [required(' نام تامین کننده الزامی است')],
  mobileNumber: [
    required('شماره موبایل الزامی است'),
    phone('شماره موبایل صحیح نیست'),
  ],
  phoneNumber: [phone('شماره تلفن صحیح نیست')],

  email: [email('ایمیل صحیح نیست')],
};

export default vendorSchema;
