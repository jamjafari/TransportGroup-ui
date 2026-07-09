import React, { memo } from 'react';

import { Grid } from '@mui/material';

import DashboardBreakpoints from './DashboardBreakpoints';

import {
  DashboardColumnPropTypes,
  DashboardColumnDefaultProps,
} from './DashboardColumn.types';

const DashboardColumn = ({
  children,

  xs,

  sm,

  md,

  lg,

  xl,
}) => {
  return (
    <Grid
      item

      xs={xs ?? DashboardBreakpoints.xs}

      sm={sm ?? DashboardBreakpoints.sm}

      md={md ?? DashboardBreakpoints.md}

      lg={lg ?? DashboardBreakpoints.lg}

      xl={xl ?? DashboardBreakpoints.xl}
    >
      {children}
    </Grid>
  );
};

DashboardColumn.propTypes = DashboardColumnPropTypes;

DashboardColumn.defaultProps = DashboardColumnDefaultProps;

export default memo(DashboardColumn);
