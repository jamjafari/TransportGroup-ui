import React from 'react';

import ReportLayout from '../../components/ReportLayout';
import { DashboardSection } from '@/components';
import DashboardSearchShortForm from '@/pages/dashboard/components/DashboardSearch/DashboardSearchShortForm';
import DashboardSearchProvider from '@/pages/dashboard/context/DashboardSearchProvider';

import VehicleRequestReportSummary from './VehicleRequestReportSummary';
import VehicleRequestReportTable from './VehicleRequestReportTable';

// ✅ هم‌ساختار گزارش مأموریت: خلاصه، جستجوی بازه‌ی زمانی (روی تاریخ رفت)، جدول
const VehicleRequestReportPage = () => {
  return (
    <DashboardSearchProvider>
      <ReportLayout
        title="گزارش درخواست‌های خودرو"
        subtitle="درخواست‌های خودروی کاربران و پاسخ مدیر نقلیه"
      >
        <DashboardSection title="خلاصه">
          <VehicleRequestReportSummary />
        </DashboardSection>
        <DashboardSection title="جستجو بر اساس بازه زمانی">
          <DashboardSearchShortForm />
        </DashboardSection>
        <DashboardSection title="جداول">
          <VehicleRequestReportTable />
        </DashboardSection>
      </ReportLayout>
    </DashboardSearchProvider>
  );
};

export default VehicleRequestReportPage;
