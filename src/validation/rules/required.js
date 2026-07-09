export const required =
  (message = 'Required') =>
  (value) => {
    if (value === undefined || value === null || value === '') {
      return message;
    }

    return null;
  };
