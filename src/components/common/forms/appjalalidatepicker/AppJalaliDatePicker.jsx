import React, { memo } from 'react';

import TextField from '@mui/material/TextField';

import * as RMDPNamespace from 'react-multi-date-picker';
import * as PersianCalendarNamespace from 'react-date-object/calendars/persian';
import * as PersianFaLocaleNamespace from 'react-date-object/locales/persian_fa';

import {
  AppJalaliDatePickerPropTypes,
  AppJalaliDatePickerDefaultProps,
} from './AppJalaliDatePicker.types';

const DatePicker = RMDPNamespace.default?.default ?? RMDPNamespace.default;

const persian =
  PersianCalendarNamespace.default?.default ?? PersianCalendarNamespace.default;

const persian_fa =
  PersianFaLocaleNamespace.default?.default ?? PersianFaLocaleNamespace.default;

const AppJalaliDatePicker = ({
  label,
  value,
  onChange,
  disabled,
  fullWidth = true,
  error,
  helperText,
  size = 'medium',
  required,
  ...props
}) => {
  return (
    <DatePicker
      calendar={persian}
      locale={persian_fa}
      containerStyle={{
        width: '100%',
      }}
      style={{
        width: '100%',
      }}
      value={value}
      onChange={(dateObject) => {
        let converted = null;

        if (dateObject) {
          converted = dateObject.toDate();
          converted.setHours(0, 0, 0, 0);
        }

        onChange?.(converted);
      }}
      disabled={disabled}
      render={(inputValue, openCalendar) => (
        <TextField
          label={label}
          value={inputValue || ''}
          onFocus={openCalendar}
          onClick={openCalendar}
          fullWidth
          size="medium"
          error={error}
          helperText={helperText}
          disabled={disabled}
          InputProps={{
            readOnly: true,
          }}
          sx={{
            width: '100%',

            '& .MuiOutlinedInput-root': {
              minHeight: 56,
              boxSizing: 'border-box',
            },
          }}
        />
      )}
      {...props}
    />
  );
};

AppJalaliDatePicker.propTypes = AppJalaliDatePickerPropTypes;

AppJalaliDatePicker.defaultProps = AppJalaliDatePickerDefaultProps;

export default memo(AppJalaliDatePicker);
