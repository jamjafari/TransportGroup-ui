export const maxLength = (max, message) => (value) => {
  if (!value) return null;

  return value.length <= max ? null : message || `Max length is ${max}`;
};
