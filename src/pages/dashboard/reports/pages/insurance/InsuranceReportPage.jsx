import React from 'react';

import { AppLoader, DashboardSection } from '@/components';

import DashboardSearchShortForm from '@/pages/dashboard/components/DashboardSearch/DashboardSearchShortForm';

import useInsuranceReport from './hooks/useInsuranceReport';

import InsuranceReportSummary from './InsuranceReportSummary';
import InsuranceReportTable from './InsuranceReportTable';
import ReportLayout from '../../components/ReportLayout';

const InsuranceReportPage = () => {
  const { data, loading, error } = useInsuranceReport();

  return (
    <ReportLayout title="گزارش بیمه" subtitle="وضعیت بیمه‌نامه‌های ناوگان">
      <DashboardSection title="جستجو">
        <DashboardSearchShortForm />
      </DashboardSection>

      {loading && <AppLoader />}

      {!loading && error && <div>خطا در دریافت اطلاعات گزارش بیمه</div>}

      {!loading && !error && data && (
        <>
          <DashboardSection title="خلاصه">
            <InsuranceReportSummary summary={data.summary} />
          </DashboardSection>

          <DashboardSection title="جداول">
            <InsuranceReportTable rows={data.table} loading={loading} />
          </DashboardSection>
        </>
      )}
    </ReportLayout>
  );
};

export default InsuranceReportPage;
