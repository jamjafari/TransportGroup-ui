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
        <VehicleReportSearchForm />

        <VehicleReportSummary />

        <VehicleReportTable />
      </ReportLayout>
    </DashboardSearchProvider>
  );
};

export default MissionReportPage;
