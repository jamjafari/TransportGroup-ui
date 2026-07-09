import React, { memo } from 'react';

import { Grid } from '@mui/material';

import {
  AppChartCard,
  ChartLoading,
  ChartEmpty,
  LineChart,
  BarChart,
  DonutChart,
} from '@/components';

import {
  DashboardChartsPropTypes,
  DashboardChartsDefaultProps,
} from './DashboardCharts.types';

const DashboardCharts = ({
  loading,

  data,
}) => {
  const {
    fleetTrend,

    tripStatistics,

    vehicleStatus,
  } = data;

  return (
    <Grid container spacing={3}>
      <Grid
        size={{
          xs: 12,

          lg: 6,
        }}
      >
        <AppChartCard title="Fleet Trend">
          {loading ? (
            <ChartLoading />
          ) : fleetTrend?.series?.length ? (
            <LineChart
              series={fleetTrend.series}

              categories={fleetTrend.categories}

              height={320}
            />
          ) : (
            <ChartEmpty />
          )}
        </AppChartCard>
      </Grid>

      <Grid
        size={{
          xs: 12,

          lg: 3,
        }}
      >
        <AppChartCard title="Trip Statistics">
          {loading ? (
            <ChartLoading />
          ) : tripStatistics?.series?.length ? (
            <BarChart
              series={tripStatistics.series}

              categories={tripStatistics.categories}

              height={320}
            />
          ) : (
            <ChartEmpty />
          )}
        </AppChartCard>
      </Grid>

      <Grid
        size={{
          xs: 12,

          lg: 3,
        }}
      >
        <AppChartCard title="Vehicle Status">
          {loading ? (
            <ChartLoading />
          ) : vehicleStatus?.series?.length ? (
            <DonutChart
              series={vehicleStatus.series}

              labels={vehicleStatus.labels}

              height={320}
            />
          ) : (
            <ChartEmpty />
          )}
        </AppChartCard>
      </Grid>
    </Grid>
  );
};

DashboardCharts.propTypes = DashboardChartsPropTypes;

DashboardCharts.defaultProps = DashboardChartsDefaultProps;

export default memo(DashboardCharts);
