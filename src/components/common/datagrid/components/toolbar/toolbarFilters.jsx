import React from 'react';

import { Box, MenuItem, Select } from '@mui/material';

const ToolbarFilters = ({ filters, columns, onChange }) => {
  return (
    <Box display="flex" gap={2}>
      {columns
        .filter((c) => c.filterable)
        .map((col) => (
          <Select
            key={col.field}
            size="small"
            displayEmpty
            value={filters.find((f) => f.field === col.field)?.value || ''}
            onChange={(e) => onChange(col.field, e.target.value)}
          >
            <MenuItem value="">All {col.headerName}</MenuItem>

            <MenuItem value="true">True</MenuItem>

            <MenuItem value="false">False</MenuItem>
          </Select>
        ))}
    </Box>
  );
};

export default ToolbarFilters;
