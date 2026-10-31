const phone =
  (message = 'شماره تماس معتبر نیست') =>
  (value) => {
    if (!value) return null;

    const regex = /^09\d{9}$/;

    return regex.test(value) ? null : message;
  };
export default phone;
