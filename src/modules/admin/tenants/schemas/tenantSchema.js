import { required, minLength } from '@/validation';

export const tenantSchema = {
  name: [required('نام سازمان الزامی است')],
  slug: [
    required('Slug الزامی است'),
    minLength(3, 'Slug باید حداقل ۳ کاراکتر باشد'),
  ],
};

export default tenantSchema;
