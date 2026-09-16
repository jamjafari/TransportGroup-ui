import React, { memo } from 'react';

import TextField from '@mui/material/TextField';

import * as RMDPNamespace from 'react-multi-date-picker';
import * as PersianCalendarNamespace from 'react-date-object/calendars/persian';
import * as PersianFaLocaleNamespace from 'react-date-object/locales/persian_fa';

import colors from '@/theme/colors';

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
  sx, // ✅ صریحاً جدا شد — تا به‌جای DatePicker، به TextField داخلی برسد
  ...props
}) => {
  return (
    <DatePicker
      className="app-jalali-calendar" // ✅ اضافه شد
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
          required={required}
          InputProps={{
            readOnly: true,
          }}
          sx={{
            width: '100%',

            '& .MuiOutlinedInput-root': {
              minHeight: 56,
              boxSizing: 'border-box',
            },

            // ✅ پیش‌فرض لیبل
            '& .MuiInputLabel-root': {
              fontSize: 15,
              fontWeight: 700,
              color: colors.textSecondary,
            },

            // ✅ پیش‌فرض متن ورودی (تاریخ نمایش‌داده‌شده)
            '& .MuiOutlinedInput-input': {
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

            ...sx, // ← override در سطح یک مورد خاص
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
