import React, { memo } from 'react';

import {
  FormControlLabel,
  Switch,
  FormControl,
  FormHelperText,
} from '@mui/material';

import colors from '@/theme/colors';

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
  sx, // ✅ اضافه شد
}) => {
  return (
    <FormControl
      error={error}
      disabled={disabled}
      sx={{
        // ✅ پیش‌فرض متن لیبل کنار سوییچ
        '& .MuiFormControlLabel-label': {
          fontSize: 16,
          fontWeight: 600,
          color: colors.textPrimary,
        },

        // ✅ پیش‌فرض متن راهنما
        '& .MuiFormHelperText-root': {
          fontSize: 14,
          fontWeight: 400,
          color: colors.textSecondary,
        },

        ...sx, // ← override در یک مورد خاص
      }}
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
