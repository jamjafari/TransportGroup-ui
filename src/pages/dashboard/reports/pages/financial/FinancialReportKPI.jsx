import React, { memo } from 'react';

import { DashboardGrid, DashboardColumn, KpiCard } from '@/components';

const FinancialReportKPI = ({ kpi = {} }) => {
  const items = [
    {
      title: 'میانگین هزینه برای هر خودرو',

      value: Number(kpi.costPerVehicle ?? 0).toLocaleString('en-US'),

      color: 'primary',

      icon: 'vehicle',
    },

    {
      title: 'میانگین هزینه ماهانه',

      value: Number(kpi.monthlyAverage ?? 0).toLocaleString('en-US'),

      color: 'info',

      icon: 'money',
    },

    {
      title: 'درصد هزینه سوخت به کل هزینه',

      value: `${(kpi.fuelPercent ?? 0).toFixed(2)} %`,

      color: 'warning',

      icon: 'fuel',
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

export default memo(FinancialReportKPI);
