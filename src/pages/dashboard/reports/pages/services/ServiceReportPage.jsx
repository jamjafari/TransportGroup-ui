import React from 'react';

import {
  AppLoader,
  DashboardGrid,
  DashboardColumn,
  DashboardSection,
  DashboardCard,
} from '@/components';

import DashboardSearchShortForm from '@/pages/dashboard/components/DashboardSearch/DashboardSearchShortForm';

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

  return (
    <ReportLayout title="گزارش سرویس" subtitle="گزارش سرویس‌های ناوگان">
      <DashboardSection title="جستجو">
        <DashboardSearchShortForm />
      </DashboardSection>

      {loading && <AppLoader />}

      {!loading && error && <div>خطا در دریافت اطلاعات سرویس</div>}

      {!loading && !error && data && (
        <>
          <DashboardSection title="خلاصه">
            <ServiceReportSummary summary={data?.summary} />
          </DashboardSection>

          <DashboardSection title="شاخص‌ها">
            <ServiceReportKPI kpi={data?.kpi} />
          </DashboardSection>

          <DashboardSection title="نمودارها">
            <DashboardGrid>
              <DashboardColumn xs={12} md={6} lg={4}>
                <ServiceStatusChart
                  labels={data?.charts?.statusLabels}
                  series={data?.charts?.statusSeries}
                />
              </DashboardColumn>

              <DashboardColumn xs={12} md={6} lg={4}>
                <ServiceTypeCostChart
                  categories={data?.charts?.typeCategories}
                  series={[
                    { name: 'هزینه', data: data?.charts?.typeSeries ?? [] },
                  ]}
                />
              </DashboardColumn>

              <DashboardColumn xs={12} md={12} lg={4}>
                <ServiceCostByMonthChart
                  categories={data?.charts?.monthlyCategories}
                  series={[
                    {
                      name: 'هزینه سرویس',
                      data: data?.charts?.monthlySeries ?? [],
                    },
                  ]}
                />
              </DashboardColumn>
            </DashboardGrid>
          </DashboardSection>

          <DashboardSection title="جداول">
            <DashboardCard
              title="فهرست سرویس‌ها"
              subtitle="وضعیت تمامی سرویس‌های ناوگان"
            >
              <ServiceReportTable rows={data?.table} loading={loading} />
            </DashboardCard>
          </DashboardSection>
        </>
      )}
    </ReportLayout>
  );
};

export default ServiceReportPage;
