import React from 'react';

import { Stack } from '@mui/material';

import { AppLoader } from '@/components';

import useFinancialReport from './hooks/useFinancialReport';
import { DashboardGrid, DashboardColumn, DashboardSection } from '@/components';

import FinancialReportSummary from './FinancialReportSummary';
import ReportLayout from '../../components/ReportLayout';
import FinancialReportKPI from './FinancialReportKPI';
import FinancialMonthlyChart from './FinancialMonthlyChart';
import FinancialVehicleChart from './FinancialVehicleChart';
import FinancialExpenseChart from './FinancialExpenseChart';
import FinancialReportTable from './FinancialReportTable';

const FinancialReportPage = () => {
  const { data, loading, error } = useFinancialReport();

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
    <ReportLayout title="گزارش  مالی" subtitle="گزارش کامل  مالی">
      {/* Summary */}
      <FinancialReportSummary summary={data?.summary} />

      {/* KPI */}
      <FinancialReportKPI kpi={data.kpi} />

      {/* Charts */}
      <DashboardSection>
        <DashboardGrid>
          <DashboardColumn xs={12} md={12} lg={4}>
            <FinancialMonthlyChart data={data?.charts?.monthlyExpenses} />
          </DashboardColumn>

          <DashboardColumn xs={12} md={12} lg={4}>
            <FinancialVehicleChart data={data?.charts?.vehicleCost} />
          </DashboardColumn>

          <DashboardColumn xs={12} md={12} lg={4}>
            <FinancialExpenseChart data={data?.charts?.expenseDistribution} />
          </DashboardColumn>
        </DashboardGrid>
      </DashboardSection>
      <FinancialReportTable rows={data.table} loading={loading} />
    </ReportLayout>
  );
};

export default FinancialReportPage;
