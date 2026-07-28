import React from 'react';

import { Stack } from '@mui/material';

import { AppLoader } from '@/components';

import useFinancialByVehicle from './hooks/useFinancialByVehicle';
import {
  DashboardGrid,
  DashboardColumn,
  DashboardSection,
  DashboardCard,
} from '@/components';

import FBVReportSummary from './FBVReportSummary';
import ReportLayout from '../../components/ReportLayout';
import FBVReportKPI from './FBVReportKPI';
import FBVFuelVsExpenseChart from './FBVFuelVsExpenseChart';
import FBVVehicleCostChart from './FBVVehicleCostChart';
import FBVExpenseTypeChart from './FBVExpenseTypeChart';
import FBVReportTable from './FBVReportTable';
import FinancialTransactionsTable from './FinancialTransactionsTable';

const FBVReportPage = () => {
  const { data, loading, error } = useFinancialByVehicle();

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
    <ReportLayout title="گزارش  مالی بر اساس خودرو" subtitle="گزارش کامل  مالی">
      {/* Summary */}
      <FBVReportSummary summary={data?.summary} />

      {/* KPI */}
      <FBVReportKPI kpi={data.kpi} />

      {/* Charts */}
      <DashboardSection>
        <DashboardGrid>
          <DashboardColumn xs={12} md={12} lg={3}>
            <FBVFuelVsExpenseChart data={data?.charts?.fuelVsExpense} />
          </DashboardColumn>

          <DashboardColumn xs={12} md={12} lg={3}>
            <FBVVehicleCostChart data={data?.charts?.vehicles} />
          </DashboardColumn>

          <DashboardColumn xs={12} md={12} lg={3}>
            <FBVExpenseTypeChart data={data?.charts?.expenseTypes} />
          </DashboardColumn>
        </DashboardGrid>
      </DashboardSection>
      <DashboardCard
        title="هزینه‌های سرویس و سوخت"
        subtitle="  مقایسه هزینه سرویس ها به سوخت هر خودرو"
      >
        <FBVReportTable rows={data.financialByVehicle} loading={loading} />
      </DashboardCard>
      <DashboardCard
        title="   تراکنش ها"
        subtitle="   هزینه  خودروهای موجود در نقلیه"
      >
        <FinancialTransactionsTable rows={data.table} loading={loading} />
      </DashboardCard>
    </ReportLayout>
  );
};

export default FBVReportPage;
