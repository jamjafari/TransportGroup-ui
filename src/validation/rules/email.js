const email =
  (message = 'ایمیل معتبر نیست') =>
  (value) => {
    if (!value) return null;

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(value) ? null : message;
  };
export default email;
