import React, { memo } from 'react';

import DashboardRefreshProvider from './context/DashboardRefreshProvider';
import DashboardSearchProvider from './context/DashboardSearchProvider';

import DashboardContent from './DashboardContent';

const DashboardPage = () => {
  return (
    <DashboardSearchProvider>
      <DashboardRefreshProvider>
        <DashboardContent />
      </DashboardRefreshProvider>
    </DashboardSearchProvider>
  );
};
export default memo(DashboardPage);
