import React, { memo } from 'react';

import DashboardColumn from '@/components/dashboard/layout/DashboardColumn';

const DashboardStatisticsItem = ({ children }) => {
  return (
    <DashboardColumn
      xs={12}

      sm={6}

      md={3}

      lg={3}
    >
      {children}
    </DashboardColumn>
  );
};

export default memo(DashboardStatisticsItem);
