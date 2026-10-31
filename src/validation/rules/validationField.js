import translateMessage from './translateMessage';

const validateField = (
  value,

  rules = [],
) => {
  for (const rule of rules) {
    const error = rule(value);

    if (error) {
      return translateMessage(error);
    }
  }

  return null;
};
export default validateField;
