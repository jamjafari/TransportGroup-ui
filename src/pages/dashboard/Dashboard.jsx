import React from 'react';

import { Box, Container } from '@mui/material';

import {
  DashboardHeader,
  DashboardKpiCards,
  DashboardCharts,
  DashboardTrips,
  DashboardAlerts,
  DashboardTimeline,
} from './components';

import { useDashboard } from './hooks/useDashboard';

const Dashboard = () => {
  const {
    loading,

    statistics,

    charts,

    trips,

    alerts,

    activities,
  } = useDashboard();

  return (
    <Container maxWidth="xl">
      <Box display="flex" flexDirection="column" gap={3} py={3}>
        <DashboardHeader />

        <DashboardKpiCards
          loading={loading}

          data={statistics}
        />

        <DashboardCharts
          loading={loading}

          data={charts}
        />

        <DashboardTrips
          loading={loading}

          data={trips}
        />

        <DashboardAlerts
          loading={loading}

          data={alerts}
        />

        <DashboardTimeline
          loading={loading}

          data={activities}
        />
      </Box>
    </Container>
  );
};

export default Dashboard;
