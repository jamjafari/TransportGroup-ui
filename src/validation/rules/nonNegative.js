const nonNegative =
  (message = 'Must be a nonNegative') =>
  (value) => {
    if (!value) return null;

    return value.length >= 0 ? null : message || `number is less then ${0}`;
  };
export default nonNegative;
