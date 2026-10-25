import React, { memo } from 'react';

import TextField from '@mui/material/TextField';

import * as RMDPNamespace from 'react-multi-date-picker';

import { getDateLocale } from '@/utils/data/dateLocale';

import useTranslatedField from '../useTranslatedField';

import {
  AppJalaliDatePickerPropTypes,
  AppJalaliDatePickerDefaultProps,
} from './AppJalaliDatePicker.types';

const DatePicker = RMDPNamespace.default?.default ?? RMDPNamespace.default;

// ✅ همین دو مقدار (calendar و locale) تقویم هر ۳۲ محل استفاده‌ی این کامپوننت را
// تعیین می‌کنند؛ react-multi-date-picker هر دو تقویم شمسی و میلادی را پشتیبانی می‌کند.
const unwrap = (module) => module?.default?.default ?? module?.default ?? module;

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
  const { calendar, locale } = getDateLocale();

  const { tr } = useTranslatedField();

  return (
    <DatePicker
      className="app-jalali-calendar" // ✅ اضافه شد
      calendar={unwrap(calendar)}
      locale={unwrap(locale)}
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
          // ✅ نیمه‌شب UTC، نه نیمه‌شب محلی.
          // قبلاً setHours(0,0,0,0) روی وقت محلی اعمال می‌شد، ولی axios تاریخ را
          // با toJSON به UTC می‌فرستد؛ در ایران (UTC+3:30) نیمه‌شب محلی به
          // ساعت ۲۰:۳۰ روزِ *قبل* تبدیل می‌شد و سرور یک روز عقب‌تر را می‌دید.
          const picked = dateObject.toDate();

          converted = new Date(
            Date.UTC(
              picked.getFullYear(),
              picked.getMonth(),
              picked.getDate(),
            ),
          );
        }

        onChange?.(converted);
      }}
      disabled={disabled}
      render={(inputValue, openCalendar) => (
        <TextField
          label={tr(label)}
          value={inputValue || ''}
          onFocus={openCalendar}
          onClick={openCalendar}
          fullWidth
          size="medium"
          error={error}
          helperText={tr(helperText)}
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
              color: 'text.secondary',
            },

            // ✅ پیش‌فرض متن ورودی (تاریخ نمایش‌داده‌شده)
            '& .MuiOutlinedInput-input': {
              fontSize: 16,
              fontWeight: 600,
              color: 'text.primary',
            },

            // ✅ پیش‌فرض متن راهنما
            '& .MuiFormHelperText-root': {
              fontSize: 14,
              fontWeight: 400,
              color: 'text.secondary',
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
