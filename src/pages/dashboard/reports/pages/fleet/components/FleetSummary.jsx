import React, { memo } from 'react';

import { DashboardGrid, DashboardColumn, KpiCard } from '@/components';

const FleetSummary = ({ summary = {} }) => {
  const total = summary.totalVehicles ?? 0;
  const pct = (value) => (total ? (value / total) * 100 : 0);

  const items = [
    { title: 'کل خودروها', value: total, color: 'primary', icon: 'vehicle' },
    {
      title: 'فعال',
      value: summary.active ?? 0,
      color: 'success',
      icon: 'check',
      percent: pct(summary.active ?? 0),
    },
    {
      title: 'در تعمیر',
      value: summary.inRepair ?? 0,
      color: 'warning',
      icon: 'service',
      percent: pct(summary.inRepair ?? 0),
    },
    {
      title: 'غیرفعال',
      value: summary.inactive ?? 0,
      color: 'secondary',
      icon: 'expired',
      percent: pct(summary.inactive ?? 0),
    },
  ];

  return (
    <DashboardGrid>
      {items.map((item) => (
        <DashboardColumn key={item.title} xs={12} md={6} lg={3}>
          <KpiCard
            title={item.title}
            value={Number(item.value).toLocaleString('fa-IR')}
            color={item.color}
            icon={item.icon}
            percent={item.percent}
          />
        </DashboardColumn>
      ))}
    </DashboardGrid>
  );
};

export default memo(FleetSummary);
