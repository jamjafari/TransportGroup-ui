export const formatValue = (value, type) => {
  if (value === null || value === undefined) {
    return '-';
  }

  switch (type) {
    case 'number':
      return new Intl.NumberFormat().format(value);

    case 'date':
      return new Date(value).toLocaleDateString();

    case 'boolean':
      return value ? 'Yes' : 'No';

    default:
      return value;
  }
};
