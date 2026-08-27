import React, { memo } from 'react';

import { DashboardGrid, DashboardColumn, KpiCard } from '@/components';

const ActivityReportSummary = ({ summary = {} }) => {
  const items = [
    {
      title: 'کل فعالیت‌ها',
      value: summary.total ?? 0,
      color: 'primary',
      icon: 'report',
    },
    {
      title: 'ایجاد',
      value: summary.createCount ?? 0,
      color: 'success',
      icon: 'check',
    },
    {
      title: 'ویرایش',
      value: summary.updateCount ?? 0,
      color: 'warning',
      icon: 'service',
    },
    {
      title: 'حذف',
      value: summary.deleteCount ?? 0,
      color: 'error',
      icon: 'expired',
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
          />
        </DashboardColumn>
      ))}
    </DashboardGrid>
  );
};

export default memo(ActivityReportSummary);
