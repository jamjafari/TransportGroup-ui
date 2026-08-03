import React from 'react';

import ReportLayout from '../../components/ReportLayout';
import { DashboardSection } from '@/components';
import DashboardSearchShortForm from '@/pages/dashboard/components/DashboardSearch/DashboardSearchShortForm';
import DateRangeFuelCostSummary from './DateRangeFuelCostSummary';
import DateRangeFuelCostTable from './DateRangeFuelCostTable';
import DashboardSearchProvider from '@/pages/dashboard/context/DashboardSearchProvider';

const DateRangeFuelCostReportPage = () => {
  return (
    <DashboardSearchProvider>
      <ReportLayout title="گزارش سوخت" subtitle="گزارش کامل سوخت در بازه زمانی">
        {/* <DashboardSection title="خلاصه">
          <DateRangeFuelCostSummary />
        </DashboardSection> */}
        <DashboardSection title="جستجو بر اساس بازه زمانی">
          <DashboardSearchShortForm />
        </DashboardSection>
        <DashboardSection title="جداول">
          <DateRangeFuelCostTable />
        </DashboardSection>
      </ReportLayout>
    </DashboardSearchProvider>
  );
};

export default DateRangeFuelCostReportPage;
