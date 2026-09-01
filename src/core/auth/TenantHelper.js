export const getTenantInfo = (user) => {
  if (!user) {
    return null;
  }

  return user.tenant_id ? Number(user.tenant_id) : null;
};

export const isSubscriptionExpired = (user) => {
  const tenant = getTenantInfo(user);

  if (!tenant) {
    return false;
  }

  if (!tenant.isActive) {
    return true;
  }

  if (!tenant.subscriptionExpiresAt) {
    return false;
  }

  return new Date(tenant.subscriptionExpiresAt) < new Date();
};

export const canAddVehicle = (user, currentCount) => {
  const tenant = getTenantInfo(user);

  if (!tenant || tenant.maxVehicles == null) {
    return true;
  }

  return currentCount < tenant.maxVehicles;
};

export const canAddUser = (user, currentCount) => {
  const tenant = getTenantInfo(user);

  if (!tenant || tenant.maxUsers == null) {
    return true;
  }

  return currentCount < tenant.maxUsers;
};
