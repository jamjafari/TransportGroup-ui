import React from 'react';

import ReportLayout from '../../components/ReportLayout';
import { DashboardSection } from '@/components';
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
        <DashboardSection title="خلاصه">
          <LatestActivitiesReportSummary />
        </DashboardSection>
        <DashboardSection title="جستجو بر اساس بازه زمانی">
          <MissionReportSearchForm />
        </DashboardSection>
        <DashboardSection title="جداول">
          <LatestActivitiesReportTable />
        </DashboardSection>
      </ReportLayout>
    </DashboardSearchProvider>
  );
};

export default LatestActivitiesReportPage;
