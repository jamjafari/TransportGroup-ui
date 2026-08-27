import React from 'react';

import {
  AppLoader,
  DashboardGrid,
  DashboardColumn,
  DashboardSection,
} from '@/components';

import DashboardSearchShortForm from '@/pages/dashboard/components/DashboardSearch/DashboardSearchShortForm';

import useFleetReport from './hooks/useFleetReport';

import FleetSummary from './components/FleetSummary';
import ReportLayout from '../../components/ReportLayout';
import FleetKPI from './components/FleetKPI';
import FleetFinancial from './components/FleetFinancial';
import FleetAlerts from './components/FleetAlerts';

import FleetStatusChart from './charts/FleetStatusChart';
import FleetFuelChart from './charts/FleetFuelChart';
import FleetExpenseChart from './charts/FleetExpenseChart';

const FleetReportPage = () => {
  const { data, loading, error } = useFleetReport();

  return (
    <ReportLayout title="گزارش ناوگان" subtitle="گزارش کامل ناوگان">
      <DashboardSection title="جستجو">
        <DashboardSearchShortForm />
      </DashboardSection>

      {loading && <AppLoader />}

      {!loading && error && <div>خطا در دریافت اطلاعات گزارش ناوگان</div>}

      {!loading && !error && data && (
        <>
          <DashboardSection title="خلاصه">
            <FleetSummary summary={data?.summary} />
          </DashboardSection>

          <DashboardSection title="شاخص‌ها">
            <FleetKPI kpi={data.kpi} />
          </DashboardSection>

          <DashboardSection title="وضعیت مالی">
            <FleetFinancial financial={data?.financial} />
          </DashboardSection>

          <DashboardSection title="هشدارها">
            <FleetAlerts alerts={data?.alerts} />
          </DashboardSection>

          <DashboardSection>
            <DashboardGrid>
              <DashboardColumn xs={12} md={12} lg={4}>
                <FleetStatusChart
                  data={{
                    labels: data?.charts?.statusLabels ?? [],
                    series: data?.charts?.statusSeries ?? [],
                  }}
                />
              </DashboardColumn>

              <DashboardColumn xs={12} md={12} lg={4}>
                <FleetFuelChart
                  data={{
                    categories: data?.charts?.fuelCategories ?? [],
                    series: data?.charts?.fuelSeries ?? [],
                  }}
                />
              </DashboardColumn>

              <DashboardColumn xs={12} md={12} lg={4}>
                <FleetExpenseChart
                  data={{
                    categories: data?.charts?.expenseCategories ?? [],
                    series: data?.charts?.expenseSeries ?? [],
                  }}
                />
              </DashboardColumn>
            </DashboardGrid>
          </DashboardSection>
        </>
      )}
    </ReportLayout>
  );
};

export default FleetReportPage;
