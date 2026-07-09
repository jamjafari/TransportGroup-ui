import React, { memo } from 'react';

import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  CircularProgress,
  Box,
} from '@mui/material';

import { AppSelectPropTypes } from './AppSelect.types';

const AppSelect = ({
  label,

  value,

  onChange,

  options = [],

  fullWidth = true,

  disabled = false,

  error = false,

  helperText = '',

  loading = false,

  required = false,

  multiple = false,

  size = 'medium',
}) => {
  return (
    <FormControl
      fullWidth={fullWidth}

      error={error}

      size={size}
    >
      <InputLabel>{label}</InputLabel>

      <Select
        label={label}

        value={value}

        onChange={onChange}

        disabled={disabled || loading}

        multiple={multiple}
      >
        {loading ? (
          <MenuItem>
            <Box
              display="flex"

              alignItems="center"

              gap={2}
            >
              <CircularProgress size={18} />
              Loading...
            </Box>
          </MenuItem>
        ) : (
          options.map((item) => (
            <MenuItem
              key={item.value}

              value={item.value}
            >
              {item.label}
            </MenuItem>
          ))
        )}
      </Select>

      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};

AppSelect.propTypes = AppSelectPropTypes;

export default memo(AppSelect);
