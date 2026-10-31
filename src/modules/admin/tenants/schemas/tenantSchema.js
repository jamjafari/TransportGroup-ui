import { required, minLength, maxLength } from '@/validation';

export const tenantSchema = {
  name: [required('نام سازمان الزامی است')],
  nameEn: [maxLength(100)], // اختیاری؛ همان سقف ستون دیتابیس
  slug: [
    required('Slug الزامی است'),
    minLength(3, 'Slug باید حداقل ۳ کاراکتر باشد'),
  ],
};

export default tenantSchema;
