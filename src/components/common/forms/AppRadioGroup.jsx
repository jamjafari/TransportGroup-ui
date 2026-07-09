import React, { memo } from 'react';

import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormHelperText,
} from '@mui/material';

import {
  AppRadioGroupPropTypes,
  AppRadioGroupDefaultProps,
} from './AppRadioGroup.types';

const AppRadioGroup = ({
  name,
  label,
  value,
  options,
  onChange,
  row,
  error,
  helperText,
  disabled,
  color,
  size,
}) => {
  return (
    <FormControl
      error={error}

      disabled={disabled}
    >
      {label && <FormLabel>{label}</FormLabel>}

      <RadioGroup
        name={name}

        value={value}

        onChange={onChange}

        row={row}
      >
        {options.map((option) => (
          <FormControlLabel
            key={option.value}

            value={option.value}

            control={
              <Radio
                color={color}

                size={size}
              />
            }

            label={option.label}

            disabled={option.disabled}
          />
        ))}
      </RadioGroup>

      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

AppRadioGroup.propTypes = AppRadioGroupPropTypes;

AppRadioGroup.defaultProps = AppRadioGroupDefaultProps;

export default memo(AppRadioGroup);
