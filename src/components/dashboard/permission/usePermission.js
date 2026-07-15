import { useMemo } from 'react';

// بعداً از Context یا Redux جایگزین می‌شود
const userPermissions = [
  'Dashboard.View',
  'Dashboard.Statistics',
  'Dashboard.Charts',
  'Dashboard.Tables',
  'Dashboard.LatestActivities',
  'Vehicle.View',
  'Driver.View',
  'Mission.View',
];

const usePermission = (permission) => {
  return useMemo(() => {
    if (!permission) return true;

    if (Array.isArray(permission)) {
      return permission.every((p) => userPermissions.includes(p));
    }

    return userPermissions.includes(permission);
  }, [permission]);
};

export default usePermission;
