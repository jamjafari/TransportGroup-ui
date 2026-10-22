import React, { memo } from 'react';

import {
  FormControlLabel,
  Checkbox,
  FormHelperText,
  FormControl,
} from '@mui/material';

import {
  AppCheckboxPropTypes,
  AppCheckboxDefaultProps,
} from './AppCheckbox.types';

const AppCheckbox = ({
  name,
  label,
  checked,
  onChange,
  disabled,
  required,
  error,
  helperText,
  color,
  size,
}) => {
  return (
    <FormControl
      error={error}

      required={required}

      disabled={disabled}
    >
      <FormControlLabel
        control={
          <Checkbox
            name={name}

            checked={checked}

            onChange={onChange}

            color={color}

            size={size}
          />
        }

        label={label}
      />

      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

AppCheckbox.propTypes = AppCheckboxPropTypes;

AppCheckbox.defaultProps = AppCheckboxDefaultProps;

export default memo(AppCheckbox);
