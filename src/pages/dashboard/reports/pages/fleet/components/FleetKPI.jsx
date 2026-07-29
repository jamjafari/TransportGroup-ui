import React, { memo } from 'react';

import { DashboardGrid, DashboardColumn, KpiCard } from '@/components';

const FleetKPI = ({ kpi = {} }) => {
  const items = [
    {
      title: 'ضریب بهره‌وری',

      value: `${(kpi.utilization ?? 0).toFixed(2)}%`,

      color: 'success',

      icon: 'report',
    },

    {
      title: 'آماده به کار',

      value: `${(kpi.availability ?? 0).toFixed(2)}%`,

      color: 'primary',

      icon: 'check',
    },

    {
      title: 'میانگین مصرف',

      value: `${(kpi.averageFuel ?? 0).toFixed(2)} L`,

      color: 'warning',

      icon: 'fuel',
    },

    {
      title: 'میانگین کارکرد',

      value: `${Number(kpi.averageKm ?? 0).toLocaleString('en-US')} Km`,

      color: 'info',

      icon: 'vehicle',
    },

    {
      title: 'هزینه در هر 1000 کیلومتر',

      value: Number(kpi.costPerKm ?? 0).toLocaleString('en-US'),

      color: 'error',

      icon: 'money',
    },
  ];

  return (
    <DashboardGrid>
      {items.map((item) => (
        <DashboardColumn key={item.title} xs={12} md={6} lg={4}>
          <KpiCard
            title={item.title}
            value={item.value}
            color={item.color}
            icon={item.icon}
          />
        </DashboardColumn>
      ))}
    </DashboardGrid>
  );
};

export default memo(FleetKPI);
