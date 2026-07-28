import React from 'react';

import { DashboardCard, BarChart } from '@/components';

const FuelEfficiencyChart = ({
  data = {
    categories: [],
    series: [],
  },
}) => {
  return (
    <DashboardCard
      title="بهره‌وری سوخت خودروها"
      subtitle="کیلومتر به ازای هر لیتر"
    >
      <BarChart categories={data.categories} series={data.series} />
    </DashboardCard>
  );
};

export default FuelEfficiencyChart;
