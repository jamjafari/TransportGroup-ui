import React, { memo } from 'react';

import { DashboardGrid, DashboardColumn, KpiCard } from '@/components';

const FBVReportKPI = ({ kpi = {} }) => {
  const items = [
    {
      title: 'میانگین هزینه برای هر خودرو',

      value: Number(kpi.averageCostPerVehicle ?? 0).toLocaleString(),

      color: 'primary',

      icon: 'vehicle',
    },

    {
      title: 'میانگین هزینه در هر مأموریت',

      value: Number(kpi.averageCostPerMission ?? 0).toLocaleString(),

      color: 'info',

      icon: 'report',
    },

    {
      title: 'پرهزینه‌ترین خودرو',

      value: kpi.mostExpensiveVehicle ?? '-',

      color: 'warning',

      icon: 'vehicle',
    },

    {
      title: 'هزینه پرهزینه‌ترین خودرو',

      value: Number(kpi.mostExpensiveVehicleCost ?? 0).toLocaleString(),

      color: 'error',

      icon: 'money',
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

export default memo(FBVReportKPI);
