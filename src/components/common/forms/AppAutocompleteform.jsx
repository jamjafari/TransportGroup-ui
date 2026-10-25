import React, { memo } from 'react';

import { Autocomplete, TextField } from '@mui/material';


import useTranslatedField from './useTranslatedField';

import {
  AppAutocompletePropTypes,
  AppAutocompleteDefaultProps,
} from './AppAutocompleteform.types';

const AppAutocompleteform = ({
  id,
  name,
  label,
  value,
  options,
  placeholder,
  helperText,
  error,
  disabled,
  required,
  fullWidth,
  size,
  loading,
  multiple,
  disableClearable,
  getOptionLabel,
  isOptionEqualToValue,
  onChange,
  onInputChange,
  sx, // ✅ اضافه شد — برای override لیبل/متن/راهنما
  slotProps, // ✅ اضافه شد — برای override لیست گزینه‌ها (Portal)
  ...rest
}) => {
  const { tr } = useTranslatedField();

  // ✅ برچسب گزینه‌ها در getOptionLabel ترجمه می‌شود، نه با تغییر آرایه‌ی options —
  // چون Autocomplete گزینه‌ها را با هویت شیء مقایسه می‌کند و ساختن آرایه‌ی تازه
  // باعث می‌شد مقدار انتخاب‌شده دیگر با گزینه‌ها مطابقت پیدا نکند.
  const translatedGetOptionLabel = (option) => {
    const raw = getOptionLabel ? getOptionLabel(option) : option?.label;
    return tr(raw) ?? '';
  };

  return (
    <Autocomplete
      id={id}
      fullWidth
      value={value}
      options={options}
      loading={loading}
      multiple={multiple}
      disabled={disabled}
      disableClearable={disableClearable}
      getOptionLabel={translatedGetOptionLabel}
      isOptionEqualToValue={isOptionEqualToValue}
      onChange={onChange}
      onInputChange={onInputChange}
      slotProps={{
        paper: {
          sx: {
            // ✅ پیش‌فرض هر گزینه داخل لیست بازشونده (چون Portal است، اینجا جدا تعریف می‌شود)
            '& .MuiAutocomplete-option': {
              fontSize: 16,
              fontWeight: 600,
              color: 'text.primary',
            },
          },
        },
        ...slotProps, // ← override لیست گزینه‌ها در صورت نیاز
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          name={name}
          label={tr(label)}
          placeholder={tr(placeholder)}
          error={error}
          helperText={tr(helperText)}
          required={required}
          fullWidth
          size={size}
          sx={{
            width: '100%',

            // ✅ پیش‌فرض لیبل
            '& .MuiInputLabel-root': {
              fontSize: 15,
              fontWeight: 700,
              color: 'text.secondary',
            },

            // ✅ پیش‌فرض متن ورودی
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

            ...sx, // ← override لیبل/متن/راهنما در یک مورد خاص
          }}
        />
      )}
      {...rest}
    />
  );
};

AppAutocompleteform.propTypes = AppAutocompletePropTypes;

AppAutocompleteform.defaultProps = AppAutocompleteDefaultProps;

export default memo(AppAutocompleteform);
