import React from 'react';

import { DashboardCard, BarChart } from '@/components';

const InsuranceExpireChart = ({ categories, series }) => {
  return (
    <DashboardCard
      title="انقضای بیمه در ماه‌ها"
      subtitle="تعداد بیمه‌های پایان‌یافته در هر ماه"
    >
      <BarChart categories={categories} series={series} tooltip legend />
    </DashboardCard>
  );
};

export default InsuranceExpireChart;
