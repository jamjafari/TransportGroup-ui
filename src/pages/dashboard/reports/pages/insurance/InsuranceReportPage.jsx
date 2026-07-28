import React from 'react';

import { AppLoader } from '@/components';

import {
  DashboardGrid,
  DashboardColumn,
  DashboardSection,
  DashboardCard,
} from '@/components';

import ReportLayout from '../../components/ReportLayout';

import useInsuranceReport from './hooks/useInsuranceReport';

import InsuranceReportSummary from './InsuranceReportSummary';
// import InsuranceReportKPI from './InsuranceReportKPI';

// import InsuranceStatusChart from './InsuranceStatusChart';
// import InsuranceCompanyChart from './InsuranceCompanyChart';
// import InsuranceExpireChart from './InsuranceExpireChart';

// import InsuranceReportTable from './InsuranceReportTable';

const InsuranceReportPage = () => {
  const { data, loading, error } = useInsuranceReport();

  if (loading) {
    return <AppLoader />;
  }

  if (error) {
    return <div>خطا در دریافت اطلاعات بیمه</div>;
  }

  if (!data) {
    return null;
  }
  console.log('data insurance:', data);
  return (
    <ReportLayout title="گزارش بیمه" subtitle="گزارش بیمه‌های ناوگان">
      {/* Summary */}
      <InsuranceReportSummary summary={data.summary} />

      {/* KPI */}
      {/* <InsuranceReportKPI kpi={data.kpi} /> */}

      {/* Charts */}
      {/* <DashboardSection>
        <DashboardGrid>
          <DashboardColumn xs={12} md={6} lg={4}>
            <InsuranceStatusChart
              labels={data.charts.insuranceStatus.labels}
              series={data.charts.insuranceStatus.series}
            />
          </DashboardColumn>

          <DashboardColumn xs={12} md={6} lg={4}>
            <InsuranceCompanyChart
              categories={data.charts.insuranceCompany.categories}
              series={data.charts.insuranceCompany.series}
            />
          </DashboardColumn>

          <DashboardColumn xs={12} md={12} lg={4}>
            <InsuranceExpireChart
              categories={data.charts.insuranceExpireByMonth.categories}
              series={data.charts.insuranceExpireByMonth.series}
            />
          </DashboardColumn>
        </DashboardGrid>
      </DashboardSection> */}

      {/* Table */}
      {/* <DashboardCard
        title="فهرست بیمه‌ها"
        subtitle="وضعیت تمامی بیمه‌های ناوگان"
      >
        <InsuranceReportTable rows={data.table} loading={loading} />
      </DashboardCard> */}
    </ReportLayout>
  );
};

export default InsuranceReportPage;
