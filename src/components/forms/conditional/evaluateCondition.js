export const evaluateCondition = (condition, values) => {
  if (!condition) return true;

  const { field, operator, value } = condition;

  const fieldValue = values?.[field];

  switch (operator) {
    case 'eq':
      return fieldValue === value;

    case 'neq':
      return fieldValue !== value;

    case 'gt':
      return fieldValue > value;

    case 'lt':
      return fieldValue < value;

    case 'in':
      return Array.isArray(value) && value.includes(fieldValue);

    case 'exists':
      return !!fieldValue;

    default:
      return true;
  }
};
