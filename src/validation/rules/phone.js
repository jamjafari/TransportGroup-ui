export const phone =
  (message = 'Invalid phone number') =>
  (value) => {
    if (!value) return null;

    const regex = /^09\d{9}$/;

    return regex.test(value) ? null : message;
  };
