import React, { memo } from 'react';

import { DashboardGrid, DashboardColumn, KpiCard } from '@/components';

import useVehicleSummary from './hooks/useVehicleSummary';

const VehicleReportSummary = () => {
  const { data = {} } = useVehicleSummary();
  const total = data.total ?? 0;

  const pct = (value) => (total ? (value / total) * 100 : 0);

  const summaryItems = [
    {
      title: 'کل خودروها',
      value: Number(total).toLocaleString('en-US'),
      color: 'primary',
      icon: 'vehicle',
      subtitle: 'ثبت‌شده در سیستم',
    },
    {
      title: 'فعال',
      value: Number(data.active ?? 0).toLocaleString('en-US'),
      color: 'success',
      icon: 'check',
      percent: pct(data.active ?? 0),
    },
    {
      title: 'در حال تعمیر',
      value: Number(data.inRepair ?? 0).toLocaleString('en-US'),
      color: 'warning',
      icon: 'service',
      percent: pct(data.inRepair ?? 0),
    },
    {
      title: 'غیرفعال',
      value: Number(data.inactive ?? 0).toLocaleString('en-US'),
      color: 'secondary',
      icon: 'expired',
      percent: pct(data.inactive ?? 0),
    },
    {
      title: 'فروخته‌شده',
      value: Number(data.sold ?? 0).toLocaleString('en-US'),
      color: 'error',
      icon: 'warning',
      percent: pct(data.sold ?? 0),
    },
  ];

  return (
    <DashboardGrid>
      {summaryItems.map((item) => (
        <DashboardColumn key={item.title} xs={12} md={6} lg={2.4}>
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

export default memo(VehicleReportSummary);
