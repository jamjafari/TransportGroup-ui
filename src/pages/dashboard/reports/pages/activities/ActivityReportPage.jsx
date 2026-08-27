import React from 'react';

import { AppLoader, DashboardSection } from '@/components';

import DashboardSearchProvider from '@/pages/dashboard/context/DashboardSearchProvider';
import DashboardSearchShortForm from '@/pages/dashboard/components/DashboardSearch/DashboardSearchShortForm';

import useActivityReport from './hooks/useActivityReport';

import ActivityReportSummary from './ActivityReportSummary';
import ActivityReportTable from './ActivityReportTable';
import ReportLayout from '../../components/ReportLayout';

const ActivityReportContent = () => {
  const { data, loading, error } = useActivityReport();

  return (
    <ReportLayout
      title="گزارش فعالیت‌ها"
      subtitle="تاریخچه‌ی ایجاد، ویرایش و حذف رکوردها"
    >
      <DashboardSection title="جستجو">
        <DashboardSearchShortForm />
      </DashboardSection>

      {loading && <AppLoader />}

      {!loading && error && <div>خطا در دریافت اطلاعات گزارش فعالیت‌ها</div>}

      {!loading && !error && data && (
        <>
          <DashboardSection title="خلاصه">
            <ActivityReportSummary summary={data.summary} />
          </DashboardSection>

          <DashboardSection title="جداول">
            <ActivityReportTable rows={data.table} loading={loading} />
          </DashboardSection>
        </>
      )}
    </ReportLayout>
  );
};

const ActivityReportPage = () => {
  return (
    <DashboardSearchProvider>
      <ActivityReportContent />
    </DashboardSearchProvider>
  );
};

export default ActivityReportPage;
