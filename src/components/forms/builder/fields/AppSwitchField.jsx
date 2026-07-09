import React, { memo } from 'react';

import { Controller, useFormContext } from 'react-hook-form';

import {
  Switch,
  FormControl,
  FormControlLabel,
  FormHelperText,
} from '@mui/material';

import {
  AppSwitchFieldPropTypes,
  AppSwitchFieldDefaultProps,
} from './AppSwitchField.types';

const AppSwitchField = ({ field }) => {
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
        <FormControl error={!!fieldState.error}>
          <FormControlLabel
            label={field.ui.label}
            control={
              <Switch
                checked={!!rhfField.value}
                onChange={(e) => rhfField.onChange(e.target.checked)}
                disabled={field.state.disabled}
                {...field.props}
              />
            }
          />

          <FormHelperText>
            {fieldState.error?.message ?? field.ui.helperText}
          </FormHelperText>
        </FormControl>
      )}
    />
  );
};

AppSwitchField.propTypes = AppSwitchFieldPropTypes;

AppSwitchField.defaultProps = AppSwitchFieldDefaultProps;

export default memo(AppSwitchField);
