const minLength = (min, message) => (value) => {
  if (!value) return null;

  return value.length >= min ? null : message || `Min length is ${min}`;
};
export default minLength;
