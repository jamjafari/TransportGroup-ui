import React from 'react';

import { Box, Button } from '@mui/material';

const ToolbarActions = ({ selectedCount, onClearSelection, onExport }) => {
  return (
    <Box display="flex" gap={1}>
      <Button
        size="small"
        disabled={selectedCount === 0}
        onClick={onClearSelection}
      >
        Clear Selection
      </Button>

      <Button size="small" variant="outlined" onClick={onExport}>
        Export
      </Button>
    </Box>
  );
};

export default ToolbarActions;
