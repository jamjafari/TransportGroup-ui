import React, { memo } from 'react';

import { TextField } from '@mui/material';

import {
  AppTimePickerPropTypes,
  AppTimePickerDefaultProps,
} from './AppTimePicker.types';

const AppTimePicker = ({
  name,
  label,
  value,
  onChange,
  helperText,
  error,
  disabled,
  required,
  fullWidth,
  size,
  ...rest
}) => {
  return (
    <TextField
      name={name}

      label={label}

      type="time"

      value={value}

      onChange={onChange}

      helperText={helperText}

      error={error}

      disabled={disabled}

      required={required}

      fullWidth={fullWidth}

      size={size}

      InputLabelProps={{
        shrink: true,
      }}

      inputProps={{
        step: 300,
      }}

      {...rest}
    />
  );
};

AppTimePicker.propTypes = AppTimePickerPropTypes;

AppTimePicker.defaultProps = AppTimePickerDefaultProps;

export default memo(AppTimePicker);
