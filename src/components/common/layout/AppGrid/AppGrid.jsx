import React, { memo } from 'react';

import { Grid } from '@mui/material';

import { AppGridPropTypes, AppGridDefaultProps } from './AppGrid.types';

const AppGrid = ({
  children,
  container,
  spacing,
  columns,
  alignItems,
  justifyContent,
}) => {
  if (container) {
    return (
      <Grid
        container
        spacing={spacing}
        columns={columns}
        alignItems={alignItems}
        justifyContent={justifyContent}
      >
        {children}
      </Grid>
    );
  }

  return <Grid item>{children}</Grid>;
};

AppGrid.propTypes = AppGridPropTypes;

AppGrid.defaultProps = AppGridDefaultProps;

export default memo(AppGrid);
