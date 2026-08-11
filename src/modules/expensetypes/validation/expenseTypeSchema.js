import { required, minLength, maxLength } from '@/validation';

export const expenseTypeSchema = {
  code: [required('  کد انحصاری الزامی است')],

  title: [required('  عنوان هزینه الزامی است')],
};

export default expenseTypeSchema;
