import { required, minLength, maxLength } from '@/validation';

export const fuelCardSchema = {
  cardNumber: [required(' شماره کارت الزامی است')],

  vehicleId: [required(' پلاک خودرو الزامی است')],
};

export default fuelCardSchema;
