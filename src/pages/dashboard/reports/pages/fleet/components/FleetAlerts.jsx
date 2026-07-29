import React, { memo } from 'react';

import { DashboardGrid, DashboardColumn, AppAlert } from '@/components';

const FleetAlerts = ({
  alerts = {
    expiredInsurance: 0,
    requiredService: 0,
    criticalService: 0,
  },
}) => {
  const items = [
    {
      title: 'بیمه منقضی',
      value: alerts.expiredInsurance,
      severity: 'error',
    },

    {
      title: 'سرویس ضروری',
      value: alerts.requiredService,
      severity: 'warning',
    },

    {
      title: 'سرویس بحرانی',
      value: alerts.criticalService,
      severity: 'error',
    },
  ];

  return (
    <DashboardGrid>
      {items.map((item) => (
        <DashboardColumn key={item.title} xs={12} md={4}>
          <AppAlert
            open={item.value > 0}
            severity={item.severity}
            variant="filled"
            title={item.title}
          >
            تعداد موارد: {item.value}
          </AppAlert>
        </DashboardColumn>
      ))}
    </DashboardGrid>
  );
};

export default memo(FleetAlerts);
