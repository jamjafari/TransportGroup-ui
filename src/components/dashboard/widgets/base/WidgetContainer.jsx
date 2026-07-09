import React from 'react';

import { Paper, Box, Typography } from '@mui/material';

const WidgetContainer = ({ title, children }) => {
  return (
    <Paper
      sx={{
        p: 2,
        borderRadius: 3,
        height: '100%',
      }}
    >
      {title && (
        <Typography variant="subtitle1" mb={1}>
          {title}
        </Typography>
      )}

      <Box>{children}</Box>
    </Paper>
  );
};

export default WidgetContainer;
