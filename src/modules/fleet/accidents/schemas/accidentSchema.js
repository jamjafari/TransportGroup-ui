import { required } from '@/validation';

export const accidentSchema = {
  vehicleId: [required('انتخاب خودرو الزامی است')],
  accidentDate: [required('تاریخ تصادف الزامی است')],
  severity: [required('شدت تصادف را انتخاب کنید')],
};

export default accidentSchema;
