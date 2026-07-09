import React, { memo } from 'react';

import { PermissionGatePropTypes } from './PermissionGate.types';

import { hasPermission } from '../../../utils/authHelper';

const PermissionGate = ({
  permission,

  fallback = null,

  children,
}) => {
  if (!permission) {
    return children;
  }

  const permissions = Array.isArray(permission) ? permission : [permission];

  const allowed = permissions.some(hasPermission);

  if (!allowed) {
    return fallback;
  }

  return children;
};

PermissionGate.propTypes = PermissionGatePropTypes;

export default memo(PermissionGate);
