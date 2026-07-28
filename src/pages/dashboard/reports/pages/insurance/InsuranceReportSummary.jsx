import React from 'react';

import { DashboardGrid, DashboardColumn, SummaryCard } from '@/components';

const InsuranceReportSummary = ({ summary }) => {
  return (
    <DashboardGrid>
      <DashboardColumn xs={12} md={6} lg={4}>
        <SummaryCard title="کل بیمه‌ها" value={summary.totalInsurances} />
      </DashboardColumn>

      <DashboardColumn xs={12} md={6} lg={4}>
        <SummaryCard
          title="کل هزینه بیمه"
          value={summary.totalInsuranceCost.toLocaleString()}
        />
      </DashboardColumn>

      <DashboardColumn xs={12} md={6} lg={4}>
        <SummaryCard
          title="میانگین هزینه"
          value={summary.averageInsuranceCost.toLocaleString()}
        />
      </DashboardColumn>
    </DashboardGrid>
  );
};

export default InsuranceReportSummary;
