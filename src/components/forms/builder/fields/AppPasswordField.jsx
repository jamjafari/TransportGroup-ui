import React, { memo, useState } from 'react';

import { Controller, useFormContext } from 'react-hook-form';

import { TextField, IconButton, InputAdornment } from '@mui/material';

import { Visibility, VisibilityOff } from '@mui/icons-material';

import {
  AppPasswordFieldPropTypes,
  AppPasswordFieldDefaultProps,
} from './AppPasswordField.types';

const AppPasswordField = ({ field }) => {
  const { control } = useFormContext();

  const [showPassword, setShowPassword] = useState(false);

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
          type={showPassword ? 'text' : 'password'}
          label={field.ui.label}
          placeholder={field.ui.placeholder}
          helperText={fieldState.error?.message ?? field.ui.helperText}
          error={!!fieldState.error}
          disabled={field.state.disabled}
          InputProps={{
            readOnly: field.state.readOnly,
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          {...field.props}
        />
      )}
    />
  );
};

AppPasswordField.propTypes = AppPasswordFieldPropTypes;

AppPasswordField.defaultProps = AppPasswordFieldDefaultProps;

export default memo(AppPasswordField);
