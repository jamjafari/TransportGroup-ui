// isFeatureEnabled (اختیاری): آیتم‌هایی با `feature` فقط وقتی قابلیت برای سازمان روشن است نمایش داده می‌شوند
export const filterMenuByPermission = (items, can, isFeatureEnabled = () => true) => {
  return items
    .filter((item) => {
      if (item.feature && !isFeatureEnabled(item.feature)) {
        return false;
      }

      if (!item.permission) {
        return true;
      }

      return can(item.permission);
    })
    .map((item) => {
      if (!item.children) {
        return item;
      }

      const children = filterMenuByPermission(item.children, can, isFeatureEnabled);

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
