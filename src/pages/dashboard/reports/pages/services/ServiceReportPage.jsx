import React from 'react';

import {
  AppLoader,
  DashboardGrid,
  DashboardColumn,
  DashboardSection,
  DashboardCard,
} from '@/components';

import ReportLayout from '../../components/ReportLayout';

import useServiceReport from './hooks/useServiceReport';

import ServiceReportSummary from './ServiceReportSummary';
import ServiceReportKPI from './ServiceReportKPI';

import ServiceStatusChart from './ServiceStatusChart';
import ServiceTypeCostChart from './ServiceTypeCostChart';
import ServiceCostByMonthChart from './ServiceCostByMonthChart';

import ServiceReportTable from './ServiceReportTable';

const ServiceReportPage = () => {
  const { data, loading, error } = useServiceReport();

  if (loading) {
    return <AppLoader />;
  }

  if (error) {
    return <div>خطا در دریافت اطلاعات سرویس</div>;
  }

  if (!data) {
    return null;
  }

  return (
    <ReportLayout title="گزارش سرویس" subtitle="گزارش سرویس‌های ناوگان">
      {/* Summary */}
      <DashboardSection title="خلاصه">
        <ServiceReportSummary summary={data?.summary} />
      </DashboardSection>

      {/* KPI */}
      <DashboardSection title="شاخص‌ها">
        <ServiceReportKPI kpi={data?.kpi} />
      </DashboardSection>

      {/* Charts */}
      <DashboardSection title="نمودارها">
        <DashboardGrid>
          <DashboardColumn xs={12} md={6} lg={4}>
            <ServiceStatusChart
              labels={data?.charts?.serviceStatus?.labels}
              series={data?.charts?.serviceStatus?.series}
            />
          </DashboardColumn>

          <DashboardColumn xs={12} md={6} lg={4}>
            <ServiceTypeCostChart
              categories={data?.charts?.serviceTypeChart?.categories}
              series={data?.charts?.serviceTypeChart?.series}
            />
          </DashboardColumn>

          <DashboardColumn xs={12} md={12} lg={4}>
            <ServiceCostByMonthChart
              categories={data?.charts?.serviceCostByMonth?.categories}
              series={data?.charts?.serviceCostByMonth?.series}
            />
          </DashboardColumn>
        </DashboardGrid>
      </DashboardSection>

      {/* Table */}
      <DashboardSection title="جداول">
        <DashboardCard
          title="فهرست سرویس‌ها"
          subtitle="وضعیت تمامی سرویس‌های ناوگان"
        >
          <ServiceReportTable rows={data?.table} loading={loading} />
        </DashboardCard>
      </DashboardSection>
    </ReportLayout>
  );
};

export default ServiceReportPage;
