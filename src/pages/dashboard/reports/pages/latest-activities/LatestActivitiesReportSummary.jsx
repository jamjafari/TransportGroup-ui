import React, { memo } from 'react';

import { DashboardGrid, DashboardColumn, KpiCard } from '@/components';

import useLatestActivitiesSummary from './hooks/useLatestActivitiesSummary';

const LatestActivitiesReportSummary = () => {
  const { data = {} } = useLatestActivitiesSummary();

  const summaryItems = [
    {
      title: 'کل فعالیت‌ها',
      value: Number(data.total ?? 0).toLocaleString('en-US'),
      color: 'primary',
      icon: 'report',
    },

    {
      title: 'فعالیت‌های مأموریت',
      value: Number(data.mission ?? 0).toLocaleString('en-US'),
      color: 'info',
      icon: 'report',
    },

    {
      title: 'فعالیت‌های سوخت',
      value: Number(data.fuel ?? 0).toLocaleString('en-US'),
      color: 'warning',
      icon: 'fuel',
    },

    {
      title: 'فعالیت‌های هزینه',
      value: Number(data.expense ?? 0).toLocaleString('en-US'),
      color: 'secondary',
      icon: 'money',
    },

    {
      title: 'فعالیت‌های بیمه',
      value: Number(data.insurance ?? 0).toLocaleString('en-US'),
      color: 'success',
      icon: 'insurance',
    },

    {
      title: 'فعالیت‌های سرویس',
      value: Number(data.service ?? 0).toLocaleString('en-US'),
      color: 'error',
      icon: 'service',
    },
  ];

  return (
    <DashboardGrid>
      {summaryItems.map((item) => (
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

export default memo(LatestActivitiesReportSummary);
