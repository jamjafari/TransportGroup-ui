import React, { memo } from 'react';

import { DashboardGrid, DashboardColumn, KpiCard } from '@/components';

const FleetFinancial = ({
  financial = {
    totalFuel: 0,

    totalExpense: 0,

    costPerVehicle: 0,
  },
}) => {
  const items = [
    {
      title: 'هزینه سوخت',

      value: Number(financial.totalFuel ?? 0).toLocaleString('en-US'),

      color: 'warning',

      icon: 'fuel',
    },

    {
      title: 'هزینه‌های جاری',

      value: Number(financial.totalExpense ?? 0).toLocaleString('en-US'),

      color: 'info',

      icon: 'money',
    },

    {
      title: 'هزینه هر خودرو',

      value: Number(financial.costPerVehicle ?? 0).toLocaleString('en-US'),

      color: 'primary',

      icon: 'vehicle',
    },
  ];

  return (
    <DashboardGrid>
      {items.map((item) => (
        <DashboardColumn key={item.title} xs={12} md={4}>
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

export default memo(FleetFinancial);
