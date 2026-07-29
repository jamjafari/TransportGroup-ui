import React from 'react';

import ReportLayout from '../../components/ReportLayout';

import MissionReportSearchForm from './MissionReportSearchForm';
import MissionReportSummary from './MissionReportSummary';
import MissionReportTable from './MissionReportTable';
import DashboardSearchProvider from '@/pages/dashboard/context/DashboardSearchProvider';

const MissionReportPage = () => {
  return (
    <DashboardSearchProvider>
      <ReportLayout title="گزارش مأموریت‌ها" subtitle="گزارش کامل مأموریت‌ها">
        <DashboardSection title="خلاصه">
          <MissionReportSummary />
        </DashboardSection>
        <DashboardSection title="جستجو بر اساس بازه زمانی">
          <MissionReportSearchForm />
        </DashboardSection>
        <DashboardSection title="جداول">
          <MissionReportTable />
        </DashboardSection>
      </ReportLayout>
    </DashboardSearchProvider>
  );
};

export default MissionReportPage;
