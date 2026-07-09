import React, { memo } from 'react';

import { Controller, useFormContext } from 'react-hook-form';

import TextField from '@mui/material/TextField';

import {
  AppTextFieldPropTypes,
  AppTextFieldDefaultProps,
} from './AppTextField.types';

const AppTextField = ({ field }) => {
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

AppTextField.propTypes = AppTextFieldPropTypes;

AppTextField.defaultProps = AppTextFieldDefaultProps;

export default memo(AppTextField);
