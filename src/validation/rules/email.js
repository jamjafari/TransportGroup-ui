const email =
  (message = 'Invalid email') =>
  (value) => {
    if (!value) return null;

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(value) ? null : message;
  };
export default email;
