import React from 'react';

import { Grid } from '@mui/material';

import AppMiniStat from './AppMiniStat';
import {
  AppStatGroupPropTypes,
  AppStatGroupDefaultProps,
} from './AppStat.types';

const AppStatGroup = ({
  items = [],

  columns = 4,

  spacing = 2,
}) => {
  const getGridSize = () => {
    switch (columns) {
      case 1:
        return 12;

      case 2:
        return 6;

      case 3:
        return 4;

      case 4:
        return 3;

      case 6:
        return 2;

      default:
        return 3;
    }
  };

  const gridSize = getGridSize();

  return (
    <Grid container spacing={spacing}>
      {items.map((item) => (
        <Grid item xs={12} sm={6} md={gridSize} key={item.id}>
          <AppMiniStat {...item} />
        </Grid>
      ))}
    </Grid>
  );
};
AppStatGroup.propTypes = AppStatGroupPropTypes;

AppStatGroup.defaultProps = AppStatGroupDefaultProps;

export default React.memo(AppStatGroup);
