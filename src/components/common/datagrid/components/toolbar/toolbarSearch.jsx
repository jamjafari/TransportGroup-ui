import React, { memo } from 'react';

import { TextField, InputAdornment, IconButton } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

const ToolbarSearch = ({ value, onChange, onClear }) => {
  return (
    <TextField
      size="small"
      placeholder="جستجو..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      sx={{
        minWidth: 260,
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon fontSize="small" />
          </InputAdornment>
        ),

        endAdornment: value ? (
          <InputAdornment position="end">
            <IconButton size="small" onClick={onClear}>
              <ClearIcon fontSize="small" />
            </IconButton>
          </InputAdornment>
        ) : null,
      }}
    />
  );
};

export default memo(ToolbarSearch);
