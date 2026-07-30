import React, { memo } from 'react';

import { DashboardGrid, DashboardColumn, KpiCard } from '@/components';

const ServiceReportKPI = ({ kpi = {} }) => {
  const items = [
    {
      title: 'پرهزینه‌ترین خودرو',

      value: kpi.mostExpensiveVehicle ?? '-',

      color: 'error',

      icon: 'vehicle',
    },

    {
      title: 'هزینه پرهزینه‌ترین خودرو',

      value: Number(kpi.mostExpensiveCost ?? 0).toLocaleString('en-US'),

      color: 'warning',

      icon: 'money',
    },

    {
      title: 'میانگین هزینه هر خودرو',

      value: Number(kpi.averageCostPerVehicle ?? 0).toLocaleString('en-US'),

      color: 'primary',

      icon: 'report',
    },

    {
      title: 'میانگین هزینه هر سرویس',

      value: Number(kpi.averageCostPerService ?? 0).toLocaleString('en-US'),

      color: 'info',

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

export default memo(ServiceReportKPI);
