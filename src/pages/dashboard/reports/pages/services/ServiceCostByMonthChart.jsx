import React from 'react';

import { DashboardCard, LineChart } from '@/components';

const ServiceCostByMonthChart = ({ categories, series }) => {
  return (
    <DashboardCard
      title="هزینه سرویس ماهانه"
      subtitle="روند هزینه سرویس در طول سال"
    >
      <LineChart categories={categories} series={series} tooltip legend />
    </DashboardCard>
  );
};

export default ServiceCostByMonthChart;
