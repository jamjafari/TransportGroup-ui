import { validateField } from '../rules/validateField';

export const validateSchema = (
  values,

  schema,
) => {
  const errors = {};

  Object.entries(schema).forEach(([fieldName, rules]) => {
    const error = validateField(
      values[fieldName],

      rules,
    );

    if (error) {
      errors[fieldName] = error;
    }
  });

  return errors;
};
