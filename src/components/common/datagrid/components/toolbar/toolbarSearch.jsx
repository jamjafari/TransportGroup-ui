import React from 'react';

import { TextField } from '@mui/material';

const ToolbarSearch = ({ value, onChange, onClear }) => {
  return (
    <TextField
      size="small"
      placeholder="Search..."
      value={value || ''}
      onChange={(e) => onChange(e.target.value)}
      onBlur={(e) => {
        if (!e.target.value) {
          onClear?.();
        }
      }}
    />
  );
};

export default ToolbarSearch;
