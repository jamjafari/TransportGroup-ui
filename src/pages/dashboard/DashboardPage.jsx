import React, { memo } from 'react';

import {
  DashboardLayout,
  DashboardSkeleton,
  DashboardError,
} from '@/components/dashboard';

import { DashboardHeader } from './components/DashboardHeader';
import { DashboardStatistics } from './components/DashboardStatistics';
import { DashboardCharts } from './components/DashboardCharts';
import { DashboardTables } from './components/DashboardTables';

import useDashboardPage from './hooks/useDashboardPage';

const DashboardPage = () => {
  const { loading, error, refresh } = useDashboardPage();

  if (loading) {
    return <DashboardSkeleton />;
  }

  if (error) {
    return <DashboardError onRetry={refresh} />;
  }

  return (
    <DashboardLayout>
      <DashboardHeader loading={loading} onRefresh={refresh} />

      <DashboardStatistics />

      <DashboardCharts />

      <DashboardTables />
    </DashboardLayout>
  );
};

export default memo(DashboardPage);
