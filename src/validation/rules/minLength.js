const minLength = (min, message) => (value) => {
  if (!value) return null;

  return value.length >= min
    ? null
    : message || { message: 'حداقل {{min}} کاراکتر', params: { min } };
};
export default minLength;
