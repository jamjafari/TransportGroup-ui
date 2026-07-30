import React, { memo } from 'react';

import { DashboardGrid, DashboardColumn, KpiCard } from '@/components';

import useMissionSummary from './hooks/useMissionSummary';

const MissionReportSummary = () => {
  const { data = {} } = useMissionSummary();

  const summaryItems = [
    {
      title: 'کل مأموریت‌ها',

      value: Number(data.total ?? 0).toLocaleString('en-US'),

      color: 'primary',

      icon: 'report',
    },

    {
      title: 'انجام شده',

      value: Number(data.Completed ?? 0).toLocaleString('en-US'),

      color: 'success',

      icon: 'check',
    },

    {
      title: 'در حال انجام',

      value: Number(data.Running ?? 0).toLocaleString('en-US'),

      color: 'info',

      icon: 'vehicle',
    },

    {
      title: 'لغو شده',

      value: Number(data.cancelled ?? 0).toLocaleString('en-US'),

      color: 'error',

      icon: 'expired',
    },
  ];

  return (
    <DashboardGrid>
      {summaryItems.map((item) => (
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

export default memo(MissionReportSummary);
