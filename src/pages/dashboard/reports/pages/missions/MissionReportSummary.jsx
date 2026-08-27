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
      subtitle: 'در بازه‌ی انتخاب‌شده',
    },
    {
      title: 'انجام شده',
      value: Number(data.completed ?? 0).toLocaleString('en-US'),
      color: 'success',
      icon: 'check',
      percent: data.total ? (data.completed / data.total) * 100 : 0,
    },
    {
      title: 'در حال انجام',
      value: Number(data.running ?? 0).toLocaleString('en-US'),
      color: 'info',
      icon: 'vehicle',
      percent: data.total ? (data.running / data.total) * 100 : 0,
    },
    {
      title: 'لغو شده',
      value: Number(data.cancelled ?? 0).toLocaleString('en-US'),
      color: 'error',
      icon: 'expired',
      percent: data.total ? (data.cancelled / data.total) * 100 : 0,
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
            subtitle={item.subtitle}
            percent={item.percent}
          />
        </DashboardColumn>
      ))}
    </DashboardGrid>
  );
};

export default memo(MissionReportSummary);
