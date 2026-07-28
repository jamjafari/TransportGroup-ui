import React from 'react';

import { DashboardCard, BarChart } from '@/components';

const InsuranceCompanyChart = ({ categories, series }) => {
  return (
    <DashboardCard
      title="هزینه بیمه بر اساس شرکت"
      subtitle="مقایسه شرکت‌های بیمه"
    >
      <BarChart categories={categories} series={series} />
    </DashboardCard>
  );
};

export default InsuranceCompanyChart;
