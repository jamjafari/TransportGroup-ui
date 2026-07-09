import React, { memo } from 'react';

import { Controller, useFormContext } from 'react-hook-form';

import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

import {
  AppDateTimeFieldPropTypes,
  AppDateTimeFieldDefaultProps,
} from './AppDateTimeField.types';

const AppDateTimeField = ({ field }) => {
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
        <DateTimePicker
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

AppDateTimeField.propTypes = AppDateTimeFieldPropTypes;

AppDateTimeField.defaultProps = AppDateTimeFieldDefaultProps;

export default memo(AppDateTimeField);
