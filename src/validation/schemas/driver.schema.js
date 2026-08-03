import required from '../rules/required';
import phone from '../rules/phone';

export const driverSchema = {
  name: [required()],

  phone: [required(), phone()],
};
