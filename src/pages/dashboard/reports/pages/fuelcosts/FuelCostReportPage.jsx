import React from 'react';

import { AppLoader } from '@/components';

import useFuelCostReport from './hooks/useFuelCostReport';
import {
  DashboardGrid,
  DashboardColumn,
  DashboardSection,
  DashboardCard,
} from '@/components';

import DashboardSearchShortForm from '@/pages/dashboard/components/DashboardSearch/DashboardSearchShortForm';

import FuelCostReportSummary from './FuelCostReportSummary';
import ReportLayout from '../../components/ReportLayout';
import FuelCostShareChart from './FuelCostShareChart';
import FuelEfficiencyChart from './FuelEfficiencyChart';
import FuelCostReportTable from './FuelCostReportTable';

const FuelCostReportPage = () => {
  const { data, loading, error } = useFuelCostReport();

  return (
    <ReportLayout title="گزارش مالی سوخت" subtitle="گزارش کامل مالی سوخت">
      <DashboardSection title="جستجو">
        <DashboardSearchShortForm />
      </DashboardSection>

      {loading && <AppLoader />}

      {!loading && error && <div>خطا در دریافت اطلاعات گزارش مالی</div>}

      {!loading && !error && data && (
        <>
          <DashboardSection title="خلاصه">
            <FuelCostReportSummary summary={data?.summary} />
          </DashboardSection>

          <DashboardSection>
            <DashboardGrid>
              <DashboardColumn xs={12} md={12} lg={6}>
                <FuelCostShareChart
                  data={{
                    labels: data?.charts?.fuelCostShareLabels ?? [],
                    series: data?.charts?.fuelCostShareSeries ?? [],
                  }}
                />
              </DashboardColumn>

              <DashboardColumn xs={12} md={12} lg={6}>
                <FuelEfficiencyChart
                  data={{
                    categories: data?.charts?.fuelEfficiencyCategories ?? [],
                    series: [
                      {
                        name: 'کیلومتر به ازای هر لیتر',
                        data: data?.charts?.fuelEfficiencySeries ?? [],
                      },
                    ],
                  }}
                />
              </DashboardColumn>
            </DashboardGrid>
          </DashboardSection>

          <DashboardSection title="جداول">
            <DashboardCard
              title="هزینه‌های سوخت"
              subtitle="تراکنش‌های سوخت در جایگاه‌های مختلف و کیلومتر هر خودرو"
            >
              <FuelCostReportTable rows={data.table} loading={loading} />
            </DashboardCard>
          </DashboardSection>
        </>
      )}
    </ReportLayout>
  );
};

export default FuelCostReportPage;
