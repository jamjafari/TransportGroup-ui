import { required } from '@/validation';

export const missionSchema = {
  vehicleId: [required('نام خودرو الزامی است')],

  startDate: [required('تاریخ شروع  الزامی است')],

  originLocationId: [required(' نام مبدا الزامی است')],

  destinationLocationId: [required(' نام مقصد الزامی است')],
};

export default missionSchema;
