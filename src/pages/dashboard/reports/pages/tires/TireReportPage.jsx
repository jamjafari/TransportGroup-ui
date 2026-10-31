import React from 'react';

import ReportLayout from '../../components/ReportLayout';
import { DashboardSection } from '@/components';
import DashboardSearchShortForm from '@/pages/dashboard/components/DashboardSearch/DashboardSearchShortForm';
import DashboardSearchProvider from '@/pages/dashboard/context/DashboardSearchProvider';

import TireReportSummary from './TireReportSummary';
import TireReportTable from './TireReportTable';

// ✅ هم‌ساختار گزارش خودرو: خلاصه، جستجو (خودرو)، جدول تایرها با تخصیص فعلی و تاریخچه
const TireReportPage = () => {
  return (
    <DashboardSearchProvider>
      <ReportLayout
        title="گزارش تایرها"
        subtitle="مشخصات، تخصیص به خودروها و وضعیت تایرها"
      >
        <DashboardSection title="خلاصه">
          <TireReportSummary />
        </DashboardSection>
        <DashboardSection title="جستجو">
          <DashboardSearchShortForm />
        </DashboardSection>
        <DashboardSection title="جداول">
          <TireReportTable />
        </DashboardSection>
      </ReportLayout>
    </DashboardSearchProvider>
  );
};

export default TireReportPage;
