import { required } from '@/validation';

export const inspectionSchema = {
  vehicleId: [required('انتخاب خودرو الزامی است')],
  inspectionDate: [required('تاریخ انجام معاینه الزامی است')],
  expiryDate: [required('تاریخ انقضا الزامی است')],
  result: [required('نتیجه معاینه را انتخاب کنید')],
};

export default inspectionSchema;
