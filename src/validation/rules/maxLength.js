const maxLength = (max, message) => (value) => {
  if (!value) return null;

  return value.length <= max
    ? null
    : message || { message: 'حداکثر {{max}} کاراکتر', params: { max } };
};
export default maxLength;
