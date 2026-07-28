import React from 'react';

import ReportLayout from '../../components/ReportLayout';

import MissionReportSearchForm from '../missions/MissionReportSearchForm';
import LatestActivitiesReportSummary from './LatestActivitiesReportSummary';
import LatestActivitiesReportTable from './LatestActivitiesReportTable';
import DashboardSearchProvider from '@/pages/dashboard/context/DashboardSearchProvider';

const LatestActivitiesReportPage = () => {
  return (
    <DashboardSearchProvider>
      <ReportLayout
        title="گزارش  آخرین فعالیت ها"
        subtitle="گزارش کامل آخرین فعالیت ها "
      >
        <MissionReportSearchForm />

        <LatestActivitiesReportSummary />

        <LatestActivitiesReportTable />
      </ReportLayout>
    </DashboardSearchProvider>
  );
};

export default LatestActivitiesReportPage;
