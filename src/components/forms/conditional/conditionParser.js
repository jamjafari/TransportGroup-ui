export const parseCondition = (condition) => {
  if (!condition) return null;

  if (typeof condition === 'string') {
    try {
      return JSON.parse(condition);
    } catch (e) {
      return null;
    }
  }

  return condition;
};
