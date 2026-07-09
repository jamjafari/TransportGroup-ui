import React from 'react';

import DashboardPermission from './DashboardPermission';

const PermissionWrapper = ({
  permission,

  children,
}) => (
  <DashboardPermission permission={permission}>{children}</DashboardPermission>
);

export default PermissionWrapper;
