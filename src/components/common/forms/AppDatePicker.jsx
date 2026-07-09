import React, { memo } from 'react';

import { TextField } from '@mui/material';

import {
  AppDatePickerPropTypes,
  AppDatePickerDefaultProps,
} from './AppDatePicker.types';

const AppDatePicker = ({
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
  inputFormat,
  ...rest
}) => {
  return (
    <TextField
      name={name}

      label={label}

      type="date"

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
        format: inputFormat,
      }}

      {...rest}
    />
  );
};

AppDatePicker.propTypes = AppDatePickerPropTypes;

AppDatePicker.defaultProps = AppDatePickerDefaultProps;

export default memo(AppDatePicker);
