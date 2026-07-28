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
        <MissionReportSearchForm />

        <DriverReportSummary />

        <DriverReportTable />
      </ReportLayout>
    </DashboardSearchProvider>
  );
};

export default DriverReportPage;
