import React from 'react';

import { DashboardCard, PieChart } from '@/components';

const ServiceStatusChart = ({ labels, series }) => {
  // console.log('data chart:', data);
  return (
    <DashboardCard title="وضعیت سرویس‌ها" subtitle="وضعیت فعلی سرویس خودروها">
      <PieChart labels={labels} series={series} legend tooltip />
    </DashboardCard>
  );
};

export default ServiceStatusChart;
