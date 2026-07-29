import React from 'react';

import { DashboardGrid, DashboardColumn, KpiCard } from '@/components';

const InsuranceReportKPI = ({ kpi }) => {
  return (
    <DashboardGrid>
      {kpi?.map((item) => (
        <DashboardColumn key={item?.title} xs={12} sm={6} md={3} lg={2.4}>
          <KpiCard
            title={item?.title}
            value={item?.value}
            color={item?.color}
          />
        </DashboardColumn>
      ))}
    </DashboardGrid>
  );
};

export default InsuranceReportKPI;
