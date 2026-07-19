import React, { memo } from 'react';

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  CircularProgress,
  Box,
} from '@mui/material';

import { AppSelectPropTypes, AppSelectDefaultProps } from './AppSelect.types';

const AppSelect = ({
  label,
  value,
  items,
  loading,
  required,
  disabled,
  fullWidth,
  onChange,
}) => {
  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <FormControl
        sx={{
          width: '100%',
        }}

        required={required}
        disabled={disabled || loading}
      >
        <InputLabel>{label}</InputLabel>

        <Select
          value={value ?? ''}
          label={label}
          onChange={(event) => onChange(event.target.value)}
        >
          {loading ? (
            <MenuItem disabled>
              <CircularProgress size={18} />
            </MenuItem>
          ) : (
            items.map((item) => (
              <MenuItem key={item.id} value={item.id}>
                {item.title}
              </MenuItem>
            ))
          )}
        </Select>
      </FormControl>
    </Box>
  );
};

AppSelect.propTypes = AppSelectPropTypes;

AppSelect.defaultProps = AppSelectDefaultProps;

export default memo(AppSelect);
