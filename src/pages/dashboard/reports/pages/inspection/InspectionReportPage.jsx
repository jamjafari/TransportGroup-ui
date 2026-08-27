import React from 'react';

import { AppLoader, DashboardSection } from '@/components';

import DashboardSearchShortForm from '@/pages/dashboard/components/DashboardSearch/DashboardSearchShortForm';

import useInspectionReport from './hooks/useInspectionReport';

import InspectionReportSummary from './InspectionReportSummary';
import InspectionReportTable from './InspectionReportTable';
import ReportLayout from '../../components/ReportLayout';

const InspectionReportPage = () => {
  const { data, loading, error } = useInspectionReport();

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
            <InspectionReportSummary summary={data.summary} />
          </DashboardSection>

          <DashboardSection title="جداول">
            <InspectionReportTable rows={data.table} loading={loading} />
          </DashboardSection>
        </>
      )}
    </ReportLayout>
  );
};

export default InspectionReportPage;
