import React from 'react';

import ReportLayout from '../../components/ReportLayout';
import { DashboardSection } from '@/components';
import DashboardSearchShortForm from '@/pages/dashboard/components/DashboardSearch/DashboardSearchShortForm';
import DateRangeFinancialSummary from './DateRangeFinancialSummary';
import DateRangeFinancialTable from './DateRangeFinancialTable';
import DashboardSearchProvider from '@/pages/dashboard/context/DashboardSearchProvider';

const DateRangeFinancialReportPage = () => {
  return (
    <DashboardSearchProvider>
      <ReportLayout title="گزارش خودروها" subtitle="گزارش کامل خودروها">
        <DashboardSection title="خلاصه">
          <DateRangeFinancialSummary />
        </DashboardSection>
        <DashboardSection title="جستجو بر اساس بازه زمانی">
          <DashboardSearchShortForm />
        </DashboardSection>
        <DashboardSection title="جداول">
          <DateRangeFinancialTable />
        </DashboardSection>
      </ReportLayout>
    </DashboardSearchProvider>
  );
};

export default DateRangeFinancialReportPage;
