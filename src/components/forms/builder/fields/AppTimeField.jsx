import React, { memo } from 'react';

import { Controller, useFormContext } from 'react-hook-form';

import { TimePicker } from '@mui/x-date-pickers/TimePicker';

import {
  AppTimeFieldPropTypes,
  AppTimeFieldDefaultProps,
} from './AppTimeField.types';

const AppTimeField = ({ field }) => {
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
        <TimePicker
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

AppTimeField.propTypes = AppTimeFieldPropTypes;

AppTimeField.defaultProps = AppTimeFieldDefaultProps;

export default memo(AppTimeField);
