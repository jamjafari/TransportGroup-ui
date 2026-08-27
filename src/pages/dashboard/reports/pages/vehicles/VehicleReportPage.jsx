import React from 'react';

import ReportLayout from '../../components/ReportLayout';
import { DashboardSection } from '@/components';
import VehicleReportSummary from './VehicleReportSummary';
import VehicleReportTable from './VehicleReportTable';
import DashboardSearchProvider from '@/pages/dashboard/context/DashboardSearchProvider';

const VehicleReportPage = () => {
  return (
    <DashboardSearchProvider>
      <ReportLayout title="گزارش خودروها" subtitle="گزارش کامل خودروها">
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

export default VehicleReportPage;
