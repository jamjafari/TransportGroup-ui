import React, { memo } from 'react';

import { Controller, useFormContext } from 'react-hook-form';

import TextField from '@mui/material/TextField';

import {
  AppTextareaFieldPropTypes,
  AppTextareaFieldDefaultProps,
} from './AppTextareaField.types';

const AppTextareaField = ({ field }) => {
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
          multiline
          minRows={field.props?.minRows ?? 3}
          maxRows={field.props?.maxRows}
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

AppTextareaField.propTypes = AppTextareaFieldPropTypes;

AppTextareaField.defaultProps = AppTextareaFieldDefaultProps;

export default memo(AppTextareaField);
