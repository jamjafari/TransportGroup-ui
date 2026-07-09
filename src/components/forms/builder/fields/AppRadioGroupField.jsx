import React, { memo } from 'react';

import { Controller, useFormContext } from 'react-hook-form';

import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';

import {
  AppRadioGroupFieldPropTypes,
  AppRadioGroupFieldDefaultProps,
} from './AppRadioGroupField.types';

const AppRadioGroupField = ({ field }) => {
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
        <FormControl error={!!fieldState.error} disabled={field.state.disabled}>
          <FormLabel>{field.ui.label}</FormLabel>

          <RadioGroup {...rhfField} {...field.props}>
            {(field.options ?? []).map((option) => (
              <FormControlLabel
                key={option.value}
                value={option.value}
                control={<Radio />}
                label={option.label}
              />
            ))}
          </RadioGroup>

          <FormHelperText>
            {fieldState.error?.message ?? field.ui.helperText}
          </FormHelperText>
        </FormControl>
      )}
    />
  );
};

AppRadioGroupField.propTypes = AppRadioGroupFieldPropTypes;

AppRadioGroupField.defaultProps = AppRadioGroupFieldDefaultProps;

export default memo(AppRadioGroupField);
