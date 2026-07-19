import React, { memo } from 'react';
import { useState } from 'react';

import {
  DashboardLayout,
  DashboardSkeleton,
  DashboardError,
} from '@/components/dashboard';

import useDashboardRefresh from './hooks/useDashboardRefresh';

import useDashboardPage from './hooks/useDashboardPage';

import { DashboardHeader } from './components/DashboardHeader';
import { DashboardStatistics } from './components/DashboardStatistics';
import { DashboardCharts } from './components/DashboardCharts';
import { DashboardTables } from './components/DashboardTables';
import { DashboardAlerts } from './components/DashboardAlerts';
import DashboardSearchDialog from './components/DashboardSearch/DashboardSearchDialog';

const DashboardContent = () => {
  const { refreshDashboard, refreshing, lastRefreshTime } =
    useDashboardRefresh();

  const { loading, error, refresh } = useDashboardPage();
  const [searchOpen, setSearchOpen] = useState(false);

  const handleSearchOpen = () => {
    setSearchOpen(true);
  };

  const handleSearchClose = () => {
    setSearchOpen(false);
  };
  // console.log('content:', lastRefreshTime);
  if (loading) {
    return <DashboardSkeleton />;
  }

  if (error) {
    return <DashboardError onRetry={refresh} />;
  }

  const handleExport = () => {
    console.log('Dashboard Export');
  };
  return (
    <DashboardLayout>
      <DashboardHeader
        loading={refreshing}
        lastUpdate={lastRefreshTime}
        onRefresh={refreshDashboard}
        onFilter={handleSearchOpen}
        onExport={handleExport}
      />
      <DashboardStatistics />

      <DashboardAlerts />

      <DashboardCharts />

      <DashboardTables />
      <DashboardSearchDialog open={searchOpen} onClose={handleSearchClose} />
    </DashboardLayout>
  );
};
export default memo(DashboardContent);
