export const validateField = (
  value,

  rules = [],
) => {
  for (const rule of rules) {
    const error = rule(value);

    if (error) {
      return error;
    }
  }

  return null;
};
