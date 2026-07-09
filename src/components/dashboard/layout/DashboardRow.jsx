import React, { memo } from 'react';

import { Grid } from '@mui/material';

import DashboardSpacing from './DashboardSpacing';

import {
  DashboardRowPropTypes,
  DashboardRowDefaultProps,
} from './DashboardRow.types';

const DashboardRow = ({
  children,

  spacing,
}) => {
  return (
    <Grid
      container

      spacing={spacing ?? DashboardSpacing.row}
    >
      {children}
    </Grid>
  );
};

DashboardRow.propTypes = DashboardRowPropTypes;

DashboardRow.defaultProps = DashboardRowDefaultProps;

export default memo(DashboardRow);
