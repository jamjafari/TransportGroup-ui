import React, { memo } from 'react';

import { Grid } from '@mui/material';

import DashboardSpacing from './DashboardSpacing';

import {
  DashboardGridPropTypes,
  DashboardGridDefaultProps,
} from './DashboardGrid.types';

const DashboardGrid = ({ children }) => {
  return (
    <Grid
      container

      spacing={DashboardSpacing.column}
    >
      {children}
    </Grid>
  );
};

DashboardGrid.propTypes = DashboardGridPropTypes;

DashboardGrid.defaultProps = DashboardGridDefaultProps;

export default memo(DashboardGrid);
