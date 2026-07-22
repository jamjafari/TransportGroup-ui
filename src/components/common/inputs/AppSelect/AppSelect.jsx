import React, { memo } from 'react';
import { StatusChip } from '@/components';
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
  renderAsStatus = false,
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
          renderValue={(selected) => {
            if (!renderAsStatus) {
              const item = items.find((x) => x.id === selected);

              return item?.title ?? '';
            }

            return <StatusChip status={selected} />;
          }}
        >
          {loading ? (
            <MenuItem disabled>
              <CircularProgress size={18} />
            </MenuItem>
          ) : (
            items.map((item) => (
              <MenuItem key={item.id} value={item.id}>
                {renderAsStatus ? <StatusChip status={item.id} /> : item.title}
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
