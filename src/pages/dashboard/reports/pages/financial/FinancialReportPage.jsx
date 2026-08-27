import React from 'react';

import {
  AppLoader,
  DashboardGrid,
  DashboardColumn,
  DashboardSection,
} from '@/components';

import useFinancialReport from './hooks/useFinancialReport';

import DashboardSearchShortForm from '@/pages/dashboard/components/DashboardSearch/DashboardSearchShortForm';

import FinancialReportSummary from './FinancialReportSummary';
import ReportLayout from '../../components/ReportLayout';
import FinancialReportKPI from './FinancialReportKPI';
import FinancialMonthlyChart from './FinancialMonthlyChart';
import FinancialVehicleChart from './FinancialVehicleChart';
import FinancialExpenseChart from './FinancialExpenseChart';
import FinancialReportTable from './FinancialReportTable';

const FinancialReportPage = () => {
  const { data, loading, error } = useFinancialReport();

  return (
    <ReportLayout title="گزارش مالی" subtitle="گزارش کامل مالی">
      <DashboardSection title="جستجو">
        <DashboardSearchShortForm />
      </DashboardSection>

      {loading && <AppLoader />}

      {!loading && error && <div>خطا در دریافت اطلاعات گزارش مالی</div>}

      {!loading && !error && data && (
        <>
          <DashboardSection title="خلاصه">
            <FinancialReportSummary summary={data?.summary} />
          </DashboardSection>

          <DashboardSection title="شاخص‌ها">
            <FinancialReportKPI kpi={data.kpi} />
          </DashboardSection>

          <DashboardSection>
            <DashboardGrid>
              <DashboardColumn xs={12} md={12} lg={4}>
                <FinancialMonthlyChart data={data?.charts?.monthlyExpenses} />
              </DashboardColumn>

              <DashboardColumn xs={12} md={12} lg={4}>
                <FinancialVehicleChart data={data?.charts?.vehicleCost} />
              </DashboardColumn>

              <DashboardColumn xs={12} md={12} lg={4}>
                <FinancialExpenseChart
                  data={data?.charts?.expenseDistribution}
                />
              </DashboardColumn>
            </DashboardGrid>
          </DashboardSection>

          <DashboardSection title="جداول">
            <FinancialReportTable rows={data.table} loading={loading} />
          </DashboardSection>
        </>
      )}
    </ReportLayout>
  );
};

export default FinancialReportPage;
