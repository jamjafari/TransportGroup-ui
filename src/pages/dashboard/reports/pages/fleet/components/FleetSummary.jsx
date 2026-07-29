import React, { memo } from 'react';

import { DashboardGrid, DashboardColumn, KpiCard } from '@/components';

const FleetSummary = ({ summary = {} }) => {
  const items = [
    {
      title: 'کل خودروها',

      value: Number(summary.totalVehicles ?? 0).toLocaleString('en-US'),

      color: 'primary',

      icon: 'vehicle',
    },

    {
      title: 'فعال',

      value: Number(summary.active ?? 0).toLocaleString('en-US'),

      color: 'success',

      icon: 'check',
    },

    {
      title: 'در مأموریت',

      value: Number(summary.mission ?? 0).toLocaleString('en-US'),

      color: 'info',

      icon: 'report',
    },

    {
      title: 'تعمیرگاه',

      value: Number(summary.repair ?? 0).toLocaleString('en-US'),

      color: 'warning',

      icon: 'service',
    },
  ];

  return (
    <DashboardGrid>
      {items.map((item) => (
        <DashboardColumn key={item.title} xs={12} md={6} lg={3}>
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

export default memo(FleetSummary);
