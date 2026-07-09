import React, { memo } from 'react';

import { Controller, useFormContext } from 'react-hook-form';

import { Autocomplete, TextField } from '@mui/material';

import {
  AppAutocompleteFieldPropTypes,
  AppAutocompleteFieldDefaultProps,
} from './AppAutocompleteField.types';

const AppAutocompleteField = ({ field }) => {
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
        <Autocomplete
          options={field.options ?? []}
          getOptionLabel={(option) => option.label ?? ''}
          isOptionEqualToValue={(option, value) =>
            option.value === value?.value
          }
          value={field.options?.find((o) => o.value === rhfField.value) ?? null}
          onChange={(_, option) => rhfField.onChange(option?.value ?? null)}
          disabled={field.state.disabled}
          {...field.props}
          renderInput={(params) => (
            <TextField
              {...params}
              label={field.ui.label}
              placeholder={field.ui.placeholder}
              helperText={fieldState.error?.message ?? field.ui.helperText}
              error={!!fieldState.error}
            />
          )}
        />
      )}
    />
  );
};

AppAutocompleteField.propTypes = AppAutocompleteFieldPropTypes;

AppAutocompleteField.defaultProps = AppAutocompleteFieldDefaultProps;

export default memo(AppAutocompleteField);
