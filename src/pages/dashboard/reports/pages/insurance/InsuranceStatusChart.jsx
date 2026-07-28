import React from 'react';

import { DashboardCard, PieChart } from '@/components';

const InsuranceStatusChart = ({ labels, series }) => {
  return (
    <DashboardCard title="وضعیت بیمه‌ها" subtitle="فعال، هشدار، بحرانی و منقضی">
      <PieChart labels={labels} series={series} legend tooltip />
    </DashboardCard>
  );
};

export default InsuranceStatusChart;
