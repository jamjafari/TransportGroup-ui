import React from 'react';

import { DashboardSection, DashboardGrid, DashboardColumn } from '@/components';

import { AppAlertItem } from '@/components/common/alerts';

import useDashboardAlerts from '@/pages/dashboard/hooks/useDashboardAlerts';

const DashboardAlerts = () => {
  const widget = useDashboardAlerts();

  return (
    <DashboardSection title={widget.title}>
      <DashboardGrid>
        {widget.rows.map((item) => (
          <DashboardColumn key={item.id} md={6} xl={3}>
            <AppAlertItem
              severity={item.severity}
              title={item.title}
              description={item.description}
            />
          </DashboardColumn>
        ))}
      </DashboardGrid>
    </DashboardSection>
  );
};

export default DashboardAlerts;
