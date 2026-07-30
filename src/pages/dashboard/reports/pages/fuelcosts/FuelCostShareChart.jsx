import React from 'react';

import { DashboardCard, PieChart } from '@/components';

const FuelCostShareChart = ({
  data = {
    labels: [],
    series: [],
  },
}) => {
  return (
    <DashboardCard
      title="سهم هزینه سوخت خودروها"
      subtitle="درصد از کل هزینه سوخت ناوگان"
    >
      <PieChart labels={data.labels} series={data.series} tooltip legend />
    </DashboardCard>
  );
};

export default FuelCostShareChart;
