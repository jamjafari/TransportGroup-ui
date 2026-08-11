import React, { memo } from 'react';
import Grid from '@mui/material/Grid';

const AppFormGrid = ({ children, spacing = 2, ...props }) => {
  return (
    <Grid container spacing={spacing} direction="row-reverse" {...props}>
      {children}
    </Grid>
  );
};

export default memo(AppFormGrid);
