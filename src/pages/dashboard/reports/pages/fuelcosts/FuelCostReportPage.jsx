import React from 'react';

import { Stack } from '@mui/material';

import { AppLoader } from '@/components';

import useFuelCostReport from './hooks/useFuelCostReport';
import {
  DashboardGrid,
  DashboardColumn,
  DashboardSection,
  DashboardCard,
} from '@/components';

import FuelCostReportSummary from './FuelCostReportSummary';
import ReportLayout from '../../components/ReportLayout';
// import FinancialReportKPI from './FinancialReportKPI';
import FuelCostShareChart from './FuelCostShareChart';
import FuelEfficiencyChart from './FuelEfficiencyChart';
// import FinancialExpenseChart from './FinancialExpenseChart';
import FuelCostReportTable from './FuelCostReportTable';

const FuelCostReportPage = () => {
  const { data, loading, error } = useFuelCostReport();

  if (loading) {
    return <AppLoader />;
  }

  if (error) {
    return <div>خطا در دریافت اطلاعات گزارش مالی</div>;
  }

  if (!data) {
    return null;
  }

  return (
    <ReportLayout title="گزارش مالی سوخت" subtitle="گزارش کامل مالی سوخت">
      {/* Summary */}
      <DashboardSection title="خلاصه">
        <FuelCostReportSummary summary={data?.summary} />
      </DashboardSection>

      {/* KPI */}
      {/* <FinancialReportKPI kpi={data.kpi} /> */}

      {/* Charts */}
      <DashboardSection>
        <DashboardGrid>
          <DashboardColumn xs={12} md={12} lg={6}>
            <FuelCostShareChart data={data?.charts?.fuelCostShare} />
          </DashboardColumn>

          <DashboardColumn xs={12} md={12} lg={6}>
            <FuelEfficiencyChart data={data?.charts?.fuelEfficiency} />
          </DashboardColumn>

          {/* <DashboardColumn xs={12} md={12} lg={4}>
            <FinancialExpenseChart data={data?.charts?.expenseDistribution} />
          </DashboardColumn> */}
        </DashboardGrid>
      </DashboardSection>
      <DashboardSection title="جداول">
        <DashboardCard
          title="هزینه‌های سوخت"
          subtitle="  تراکنش های سوخت در جایگاههای مختلف و کیلومتر هر خودرو "
        >
          <FuelCostReportTable rows={data.table} loading={loading} />
        </DashboardCard>
      </DashboardSection>
    </ReportLayout>
  );
};

export default FuelCostReportPage;
