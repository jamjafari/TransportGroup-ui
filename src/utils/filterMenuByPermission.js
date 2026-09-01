export const filterMenuByPermission = (items, can) => {
  return items
    .filter((item) => {
      if (!item.permission) {
        return true;
      }

      return can(item.permission);
    })
    .map((item) => {
      if (!item.children) {
        return item;
      }

      const children = filterMenuByPermission(item.children, can);

      if (children.length === 0) {
        return null;
      }

      return {
        ...item,
        children,
      };
    })
    .filter(Boolean);
};
