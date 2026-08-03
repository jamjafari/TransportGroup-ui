import required from '../rules/required';
import email from '../rules/email';
import minLength from '../rules/minLength';

export const loginSchema = {
  email: [required(), email()],

  password: [required(), minLength(6)],
};
