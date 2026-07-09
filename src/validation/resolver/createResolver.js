import { validateSchema } from './validateSchema';

export const createResolver = (schema) => async (values) => {
  const validationErrors = validateSchema(values, schema);

  const errors = {};

  Object.entries(validationErrors).forEach(([field, message]) => {
    errors[field] = {
      type: 'validation',

      message,
    };
  });

  return {
    values: Object.keys(errors).length ? {} : values,

    errors,
  };
};

export default createResolver;
