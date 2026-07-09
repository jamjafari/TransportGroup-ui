import React, { memo } from 'react';

import {
  FormControlLabel,
  Switch,
  FormControl,
  FormHelperText,
} from '@mui/material';

import { AppSwitchPropTypes, AppSwitchDefaultProps } from './AppSwitch.types';

const AppSwitch = ({
  name,
  label,
  checked,
  onChange,
  disabled,
  color,
  size,
  helperText,
  error,
}) => {
  return (
    <FormControl
      error={error}

      disabled={disabled}
    >
      <FormControlLabel
        control={
          <Switch
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

AppSwitch.propTypes = AppSwitchPropTypes;

AppSwitch.defaultProps = AppSwitchDefaultProps;

export default memo(AppSwitch);
