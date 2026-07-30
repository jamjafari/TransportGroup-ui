import React from 'react';

import { DashboardCard, BarChart } from '@/components';

const ServiceTypeCostChart = ({ categories, series }) => {
  return (
    <DashboardCard
      title="هزینه بر اساس نوع سرویس"
      subtitle="مقایسه هزینه انواع سرویس"
    >
      <BarChart categories={categories} series={series} tooltip legend />
    </DashboardCard>
  );
};

export default ServiceTypeCostChart;
