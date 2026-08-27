import { required, minLength, maxLength } from '@/validation';

export const tireSchema = {
  model: [required('مدل تایر الزامی است')],

  brand: [required('نام برند الزامی است')],

  size: [
    required('سایز تایر  الزامی است'),
    minLength(1, 'سایز تایر  معتبر نیست'),
  ],

  // purchasePrice: [required('هزینه خرید   الزامی است')],
};

export default tireSchema;
