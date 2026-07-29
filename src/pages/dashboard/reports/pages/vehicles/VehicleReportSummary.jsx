import React, { memo } from 'react';

import { DashboardGrid, DashboardColumn, KpiCard } from '@/components';

import useVehicleSummary from './hooks/useVehicleSummary';

const VehicleReportSummary = () => {
  const { data = {} } = useVehicleSummary();

  const summaryItems = [
    {
      title: 'کل خودروها',

      value: Number(data.total ?? 0).toLocaleString('en-US'),

      color: 'primary',

      icon: 'vehicle',
    },

    {
      title: 'فعال',

      value: Number(data.active ?? 0).toLocaleString('en-US'),

      color: 'success',

      icon: 'check',
    },

    {
      title: 'غیرفعال',

      value: Number(data.inactive ?? 0).toLocaleString('en-US'),

      color: 'secondary',

      icon: 'expired',
    },

    {
      title: 'در مأموریت',

      value: Number(data.mission ?? 0).toLocaleString('en-US'),

      color: 'info',

      icon: 'report',
    },

    {
      title: 'در تعمیرگاه',

      value: Number(data.repair ?? 0).toLocaleString('en-US'),

      color: 'warning',

      icon: 'service',
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
          />
        </DashboardColumn>
      ))}
    </DashboardGrid>
  );
};

export default memo(VehicleReportSummary);
