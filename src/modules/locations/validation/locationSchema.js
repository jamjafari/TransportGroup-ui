import { required, minLength, maxLength } from '@/validation';

export const locationSchema = {
  name: [required('نام مکان الزامی است')],

  code: [required(' کد مکان الزامی است')],
};

export default locationSchema;
