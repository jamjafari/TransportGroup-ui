import React, { memo } from 'react';

import { Controller, useFormContext } from 'react-hook-form';

import { TextField, MenuItem } from '@mui/material';

import {
  AppSelectFieldPropTypes,
  AppSelectFieldDefaultProps,
} from './AppSelectField.types';

const AppSelectField = ({ field }) => {
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
          select
          label={field.ui.label}
          placeholder={field.ui.placeholder}
          helperText={fieldState.error?.message ?? field.ui.helperText}
          error={!!fieldState.error}
          disabled={field.state.disabled}
          InputProps={{
            readOnly: field.state.readOnly,
          }}
          {...field.props}
        >
          {(field.options ?? []).map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      )}
    />
  );
};

AppSelectField.propTypes = AppSelectFieldPropTypes;

AppSelectField.defaultProps = AppSelectFieldDefaultProps;

export default memo(AppSelectField);
