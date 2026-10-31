const number =
  (message = 'باید یک عدد باشد') =>
  (value) => {
    if (value === undefined || value === null) return null;

    return isNaN(Number(value)) ? message : null;
  };
export default number;
