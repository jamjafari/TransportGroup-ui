const required =
  (message = 'این فیلد الزامی است') =>
  (value) => {
    if (value === undefined || value === null || value === '') {
      return message;
    }

    return null;
  };
export default required;
