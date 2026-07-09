import React from 'react';

import { Box } from '@mui/material';

const Row = ({ children, spacing = 2, wrap = true }) => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      gap={spacing}
      flexWrap={wrap ? 'wrap' : 'nowrap'}
    >
      {children}
    </Box>
  );
};

export default Row;
