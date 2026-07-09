import React, { memo } from 'react';

import { Controller, useFormContext } from 'react-hook-form';

import {
  Checkbox,
  FormControlLabel,
  FormHelperText,
  FormControl,
} from '@mui/material';

import {
  AppCheckboxFieldPropTypes,
  AppCheckboxFieldDefaultProps,
} from './AppCheckboxField.types';

const AppCheckboxField = ({ field }) => {
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
            control={
              <Checkbox
                checked={!!rhfField.value}
                onChange={(e) => rhfField.onChange(e.target.checked)}
                disabled={field.state.disabled}
                {...field.props}
              />
            }
            label={field.ui.label}
          />

          <FormHelperText>
            {fieldState.error?.message ?? field.ui.helperText}
          </FormHelperText>
        </FormControl>
      )}
    />
  );
};

AppCheckboxField.propTypes = AppCheckboxFieldPropTypes;

AppCheckboxField.defaultProps = AppCheckboxFieldDefaultProps;

export default memo(AppCheckboxField);
