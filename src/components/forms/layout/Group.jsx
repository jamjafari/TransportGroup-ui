import React, { memo } from 'react';

import { Paper, Grid, Typography } from '@mui/material';

import LayoutEngine from './LayoutEngine';

const Group = ({ node }) => {
  return (
    <Paper
      variant="outlined"
      sx={{
        p: 3,
        mb: 3,
      }}
    >
      {node.title && (
        <Typography
          variant="subtitle1"
          sx={{
            mb: 2,
            fontWeight: 600,
          }}
        >
          {node.title}
        </Typography>
      )}

      <Grid container spacing={node.spacing ?? 2}>
        {node.children?.map((child, index) => (
          <Grid
            key={child.id ?? child.name ?? index}
            size={child.ui?.grid ?? 12}
          >
            <LayoutEngine node={child} />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default memo(Group);
