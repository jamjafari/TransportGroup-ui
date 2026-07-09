export const number =
  (message = 'Must be a number') =>
  (value) => {
    if (value === undefined || value === null) return null;

    return isNaN(Number(value)) ? message : null;
  };
