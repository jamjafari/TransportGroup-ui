import { required } from '@/components/validation/rules/required';
import { phone } from '@/components/validation/rules/phone';

export const driverSchema = {
  id: 'driver',

  title: 'Driver',

  submitLabel: 'Save',

  fields: [
    {
      name: 'name',

      type: 'text',

      ui: {
        label: 'Driver Name',

        placeholder: '',

        helperText: '',
      },

      state: {
        defaultValue: '',

        disabled: false,

        hidden: false,

        readOnly: false,
      },

      rules: [required()],
    },

    {
      name: 'phone',

      type: 'text',

      ui: {
        label: 'Phone',

        placeholder: '',

        helperText: '',
      },

      state: {
        defaultValue: '',

        disabled: false,

        hidden: false,

        readOnly: false,
      },

      rules: [required(), phone()],
    },
  ],
};
