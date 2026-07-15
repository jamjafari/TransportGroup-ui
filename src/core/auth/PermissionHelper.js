export const hasPermission = (user, permission) => {
  if (!user) {
    return false;
  }

  const permissions = user.Permission || [];

  return permissions.includes(permission);
};

export const hasAnyPermission = (user, permissions = []) => {
  if (!user) {
    return false;
  }

  const current = user.Permission || [];

  return permissions.some((item) => current.includes(item));
};

export const hasAllPermissions = (user, permissions = []) => {
  if (!user) {
    return false;
  }

  const current = user.Permission || [];

  return permissions.every((item) => current.includes(item));
};
