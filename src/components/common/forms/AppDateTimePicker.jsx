import React, { memo } from 'react';

import { TextField } from '@mui/material';

import {
  AppDateTimePickerPropTypes,
  AppDateTimePickerDefaultProps,
} from './AppDateTimePicker.types';

const AppDateTimePicker = ({
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

      type="datetime-local"

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

      {...rest}
    />
  );
};

AppDateTimePicker.propTypes = AppDateTimePickerPropTypes;

AppDateTimePicker.defaultProps = AppDateTimePickerDefaultProps;

export default memo(AppDateTimePicker);
