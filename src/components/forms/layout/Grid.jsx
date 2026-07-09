import React from 'react';

import { Box } from '@mui/material';

const Grid = ({ children, columns = 12, spacing = 2 }) => {
  return (
    <Box
      display="grid"
      gridTemplateColumns={`repeat(${columns}, 1fr)`}
      gap={spacing}
    >
      {children}
    </Box>
  );
};

export default Grid;
