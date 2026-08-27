import React, { memo } from 'react';

import { DashboardGrid, DashboardColumn, KpiCard } from '@/components';

import useDriverSummary from './hooks/useDriverSummary';

const DriverReportSummary = () => {
  const { data = {} } = useDriverSummary();

  const summaryItems = [
    {
      title: 'کل رانندگان',
      value: Number(data.total ?? 0).toLocaleString('en-US'),
      color: 'primary',
      icon: 'vehicle',
      subtitle: 'ثبت‌شده در سیستم',
    },
    {
      title: 'فعال',
      value: Number(data.active ?? 0).toLocaleString('en-US'),
      color: 'success',
      icon: 'check',
      percent: data.total ? (data.active / data.total) * 100 : 0,
    },
    {
      title: 'غیرفعال',
      value: Number(data.inactive ?? 0).toLocaleString('en-US'),
      color: 'secondary',
      icon: 'expired',
      percent: data.total ? (data.inactive / data.total) * 100 : 0,
    },
  ];
  return (
    <DashboardGrid>
      {summaryItems.map((item) => (
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

export default memo(DriverReportSummary);
