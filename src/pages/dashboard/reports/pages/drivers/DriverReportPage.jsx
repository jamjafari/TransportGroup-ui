import React from 'react';

import MissionReportSearchForm from '../missions/MissionReportSearchForm';
import DriverReportSummary from './DriverReportSummary';
import DriverReportTable from './DriverReportTable';
import ReportLayout from '../../components/ReportLayout';
import DashboardSearchProvider from '@/pages/dashboard/context/DashboardSearchProvider';

const DriverReportPage = () => {
  return (
    <DashboardSearchProvider>
      <ReportLayout title="گزارش راننده ها" subtitle="گزارش کامل راننده ها">
        <DashboardSection title="خلاصه">
          <DriverReportSummary />
        </DashboardSection>

        <DashboardSection title="جداول">
          <DriverReportTable />
        </DashboardSection>
      </ReportLayout>
    </DashboardSearchProvider>
  );
};

export default DriverReportPage;
