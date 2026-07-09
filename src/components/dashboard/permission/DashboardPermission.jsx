import React, { memo } from 'react';

import usePermission from '../../../hooks/usePermission';

import {
  DashboardPermissionPropTypes,
  DashboardPermissionDefaultProps,
} from './DashboardPermission.types';

const DashboardPermission = ({ permission, children, fallback }) => {
  const hasPermission = usePermission(permission);

  if (!hasPermission) {
    return fallback;
  }

  return children;
};

DashboardPermission.propTypes = DashboardPermissionPropTypes;

DashboardPermission.defaultProps = DashboardPermissionDefaultProps;

export default memo(DashboardPermission);
