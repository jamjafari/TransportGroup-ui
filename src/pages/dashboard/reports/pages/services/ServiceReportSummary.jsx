import React, { memo } from 'react';

import { DashboardGrid, DashboardColumn, KpiCard } from '@/components';

const ServiceReportSummary = ({ summary = {} }) => {
  const items = [
    {
      title: 'کل سرویس‌ها',

      value: Number(summary.totalServices ?? 0).toLocaleString('en-US'),

      color: 'primary',

      icon: 'service',
    },

    {
      title: 'کل هزینه سرویس‌ها',

      value: Number(summary.totalServiceCost ?? 0).toLocaleString('en-US'),

      color: 'warning',

      icon: 'money',
    },

    // {
    //   title: 'میانگین هزینه سرویس',

    //   value: Number(summary.averageServiceCost ?? 0).toLocaleString('en-US'),

    //   color: 'info',

    //   icon: 'report',
    // },

    {
      title: 'سرویس‌های فعال',

      value: Number(summary.activeCount ?? 0).toLocaleString('en-US'),

      color: 'success',

      icon: 'check',
    },

    {
      title: 'سرویس‌های معوق',

      value: Number(summary.overdueCount ?? 0).toLocaleString('en-US'),

      color: 'error',

      icon: 'expired',
    },
  ];

  return (
    <DashboardGrid>
      {items.map((item) => (
        <DashboardColumn key={item.title} xs={12} md={6} lg={2.4}>
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

export default memo(ServiceReportSummary);
