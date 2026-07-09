export const validate = (schema, values) => {
  const errors = {};

  Object.keys(schema).forEach((field) => {
    const rules = schema[field];

    const value = values?.[field];

    for (let rule of rules) {
      const error = rule(value, values);

      if (error) {
        errors[field] = error;

        break;
      }
    }
  });

  return errors;
};

export const hasErrors = (errors) => {
  return Object.keys(errors).length > 0;
};
