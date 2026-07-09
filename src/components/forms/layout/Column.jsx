import React from 'react';

import { Box } from '@mui/material';

const Column = ({ children, spacing = 2 }) => {
  return (
    <Box display="flex" flexDirection="column" gap={spacing}>
      {children}
    </Box>
  );
};

export default Column;
