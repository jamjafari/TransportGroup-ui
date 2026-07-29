import React, { memo } from 'react';

import { DashboardGrid, DashboardColumn, KpiCard } from '@/components';

const InsuranceReportSummary = ({ summary = {} }) => {
  const items = [
    {
      title: 'کل بیمه‌ها',

      value: Number(summary.totalInsurances ?? 0).toLocaleString('en-US'),

      color: 'primary',

      icon: 'insurance',
    },

    {
      title: 'کل هزینه بیمه',

      value: Number(summary.totalInsuranceCost ?? 0).toLocaleString('en-US'),

      color: 'warning',

      icon: 'money',
    },

    {
      title: 'میانگین هزینه',

      value: Number(summary.averageInsuranceCost ?? 0).toLocaleString('en-US'),

      color: 'info',

      icon: 'report',
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

export default memo(InsuranceReportSummary);
