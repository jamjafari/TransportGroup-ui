export const getDriverStatus = (isActive) => {
  return {
    text: isActive ? 'فعال' : 'غیرفعال',

    color: isActive ? 'success' : 'default',
  };
};
