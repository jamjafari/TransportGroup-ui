import React, { memo } from 'react';

import { Controller, useFormContext } from 'react-hook-form';

import { TextField } from '@mui/material';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import {
  AppDateFieldPropTypes,
  AppDateFieldDefaultProps,
} from './AppDateField.types';

const AppDateField = ({ field }) => {
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
        <DatePicker
          value={rhfField.value}
          onChange={rhfField.onChange}
          disabled={field.state.disabled}
          {...field.props}
          slotProps={{
            textField: {
              label: field.ui.label,
              placeholder: field.ui.placeholder,
              helperText: fieldState.error?.message ?? field.ui.helperText,
              error: !!fieldState.error,
              InputProps: {
                readOnly: field.state.readOnly,
              },
            },
          }}
        />
      )}
    />
  );
};

AppDateField.propTypes = AppDateFieldPropTypes;

AppDateField.defaultProps = AppDateFieldDefaultProps;

export default memo(AppDateField);
