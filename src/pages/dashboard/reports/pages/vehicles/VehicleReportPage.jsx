import React from 'react';

import ReportLayout from '../../components/ReportLayout';

import VehicleReportSearchForm from './VehicleReportSearchForm';
import VehicleReportSummary from './VehicleReportSummary';
import VehicleReportTable from './VehicleReportTable';
import DashboardSearchProvider from '@/pages/dashboard/context/DashboardSearchProvider';

const MissionReportPage = () => {
  return (
    <DashboardSearchProvider>
      <ReportLayout title="گزارش خودروها" subtitle="گزارش کامل خودروها">
        <DashboardSection title="جستجو بر اساس بازه زمانی">
          <VehicleReportSearchForm />
        </DashboardSection>

        <DashboardSection title="خلاصه">
          <VehicleReportSummary />
        </DashboardSection>

        <DashboardSection title="جداول">
          <VehicleReportTable />
        </DashboardSection>
      </ReportLayout>
    </DashboardSearchProvider>
  );
};

export default MissionReportPage;
