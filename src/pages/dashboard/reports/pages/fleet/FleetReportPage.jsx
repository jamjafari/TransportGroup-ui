import React from 'react';

import { Stack } from '@mui/material';

import { AppLoader } from '@/components';

import useFleetReport from './hooks/useFleetReport';
import { DashboardGrid, DashboardColumn, DashboardSection } from '@/components';

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

  if (loading) {
    return <AppLoader />;
  }

  if (error) {
    return <div>خطا در دریافت اطلاعات گزارش ناوگان</div>;
  }

  if (!data) {
    return null;
  }

  return (
    <ReportLayout title="گزارش  ناوگاه" subtitle="گزارش کامل  ناوگان">
      {/* Summary */}
      <DashboardSection title="خلاصه">
        <FleetSummary summary={data?.summary} />
      </DashboardSection>

      {/* KPI */}
      <DashboardSection title="شاخص‌ها">
        <FleetKPI kpi={data.kpi} />
      </DashboardSection>

      {/* Financial */}
      <DashboardSection title="">
        <FleetFinancial financial={data?.financial} />
      </DashboardSection>

      {/* Alerts */}
      <DashboardSection title="هشدارها">
        <FleetAlerts alerts={data?.alerts} />
      </DashboardSection>

      {/* Charts */}
      <DashboardSection>
        <DashboardGrid>
          <DashboardColumn xs={12} md={12} lg={4}>
            <FleetStatusChart data={data?.charts?.status} />
          </DashboardColumn>

          <DashboardColumn xs={12} md={12} lg={4}>
            <FleetFuelChart data={data?.charts?.fuel} />
          </DashboardColumn>

          <DashboardColumn xs={12} md={12} lg={4}>
            <FleetExpenseChart data={data?.charts?.expense} />
          </DashboardColumn>
        </DashboardGrid>
      </DashboardSection>
    </ReportLayout>
  );
};

export default FleetReportPage;
