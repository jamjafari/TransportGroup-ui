import validationField from '../rules/validationField';

const validateSchema = (
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
export default validateSchema;
