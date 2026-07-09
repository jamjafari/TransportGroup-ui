import React from 'react';

import { Box, Button } from '@mui/material';

const BuilderToolbar = ({ onAddChart, onAddTable, onAddStat, onSave }) => {
  return (
    <Box display="flex" gap={2} p={2}>
      <Button onClick={onAddChart}>Add Chart</Button>

      <Button onClick={onAddTable}>Add Table</Button>

      <Button onClick={onAddStat}>Add Stat</Button>

      <Button variant="contained" onClick={onSave}>
        Save Dashboard
      </Button>
    </Box>
  );
};

export default BuilderToolbar;
