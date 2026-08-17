import { required, minLength } from '@/validation';

// نکته: چون رمز عبور فقط موقع ساخت الزامیه (نه ویرایش)، این rule رو شرطی صدا می‌زنیم
const requiredOnCreate = (message) => (value, allValues) => {
  if (allValues?.id) return null; // یعنی حالت ویرایش — رمز اختیاریه
  return value ? null : message;
};

export const userSchema = {
  userName: [required('نام کاربری الزامی است')],
  fullName: [required('نام و نام‌خانوادگی الزامی است')],
  password: [
    requiredOnCreate('رمز عبور الزامی است'),
    minLength(6, 'رمز عبور باید حداقل ۶ کاراکتر باشد'),
  ],
  roleIds: [
    (value) =>
      value && value.length > 0 ? null : 'حداقل یک نقش را انتخاب کنید',
  ],
};

export default userSchema;
