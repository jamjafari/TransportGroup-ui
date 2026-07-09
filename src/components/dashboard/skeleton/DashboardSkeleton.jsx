import React, { memo } from 'react';

import { Grid, Stack } from '@mui/material';

import StatSkeleton from './StatSkeleton';

import ChartSkeleton from './ChartSkeleton';

import TableSkeleton from './TableSkeleton';

import {
  DashboardSkeletonPropTypes,
  DashboardSkeletonDefaultProps,
} from './DashboardSkeleton.types';

const DashboardSkeleton = ({
  statCount,

  chartCount,

  tableCount,
}) => {
  return (
    <Stack spacing={3}>
      {/* ========================= */}
      {/* Statistics */}
      {/* ========================= */}

      <Grid container spacing={2}>
        {[...Array(statCount)].map((_, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <StatSkeleton />
          </Grid>
        ))}
      </Grid>

      {/* ========================= */}
      {/* Charts */}
      {/* ========================= */}

      <Grid container spacing={2}>
        {[...Array(chartCount)].map((_, index) => (
          <Grid item xs={12} md={6} key={index}>
            <ChartSkeleton />
          </Grid>
        ))}
      </Grid>

      {/* ========================= */}
      {/* Tables */}
      {/* ========================= */}

      <Grid container spacing={2}>
        {[...Array(tableCount)].map((_, index) => (
          <Grid item xs={12} key={index}>
            <TableSkeleton />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

DashboardSkeleton.propTypes = DashboardSkeletonPropTypes;

DashboardSkeleton.defaultProps = DashboardSkeletonDefaultProps;

export default memo(DashboardSkeleton);
