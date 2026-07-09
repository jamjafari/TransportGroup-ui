import React, { memo } from 'react';

import { Controller, useFormContext } from 'react-hook-form';

import TextField from '@mui/material/TextField';

import {
  AppNumberFieldPropTypes,
  AppNumberFieldDefaultProps,
} from './AppNumberField.types';

const AppNumberField = ({ field }) => {
  const { control } = useFormContext();

  if (field.state.hidden) {
    return null;
  }

  return (
    <Controller
      name={field.name}
      control={control}
      defaultValue={field.state.defaultValue}
      render={({ field: rhfField, fieldState }) => (
        <TextField
          {...rhfField}
          type="number"
          label={field.ui.label}
          placeholder={field.ui.placeholder}
          helperText={fieldState.error?.message ?? field.ui.helperText}
          error={!!fieldState.error}
          disabled={field.state.disabled}
          InputProps={{
            readOnly: field.state.readOnly,
          }}
          {...field.props}
        />
      )}
    />
  );
};

AppNumberField.propTypes = AppNumberFieldPropTypes;

AppNumberField.defaultProps = AppNumberFieldDefaultProps;

export default memo(AppNumberField);
