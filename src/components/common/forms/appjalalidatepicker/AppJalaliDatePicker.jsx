import React, { memo } from 'react';

import TextField from '@mui/material/TextField';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { AdapterDateFnsJalali } from '@mui/x-date-pickers/AdapterDateFnsJalali';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import {
  AppJalaliDatePickerPropTypes,
  AppJalaliDatePickerDefaultProps,
} from './AppJalaliDatePicker.types';

const AppJalaliDatePicker = ({
  label,
  value,
  onChange,
  disabled,
  fullWidth,
  format,
  ...props
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
      <DatePicker
        label={label}
        value={value}
        onChange={onChange}
        disabled={disabled}
        format={format}
        slotProps={{
          textField: {
            fullWidth,
          },
        }}
        {...props}
      />
    </LocalizationProvider>
  );
};

AppJalaliDatePicker.propTypes = AppJalaliDatePickerPropTypes;

AppJalaliDatePicker.defaultProps = AppJalaliDatePickerDefaultProps;

export default memo(AppJalaliDatePicker);
