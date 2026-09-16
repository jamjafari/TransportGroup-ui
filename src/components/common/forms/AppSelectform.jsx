import React, { memo } from 'react';

import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from '@mui/material';

import colors from '@/theme/colors';

import {
  AppSelectPropTypes,
  AppSelectDefaultProps,
} from './AppSelectform.types';

const AppSelectform = ({
  id,
  name,
  label,
  value,
  options,
  placeholder,
  error,
  helperText,
  disabled,
  fullWidth,
  required,
  size,
  variant,
  onChange,
  onBlur,
  renderValue,
  children,
  sx, // ✅ اضافه شد
  MenuProps, // ✅ اضافه شد — برای امکان override دستی منو در صورت نیاز
  ...rest
}) => {
  const labelId = `${id || name}-label`;

  return (
    <FormControl
      fullWidth
      error={error}
      disabled={disabled}
      required={required}
      size={size}
      variant={variant}
      sx={{
        width: '100%',

        // ✅ پیش‌فرض لیبل
        '& .MuiInputLabel-root': {
          fontSize: 15,
          fontWeight: 700,
          color: colors.textSecondary,
        },

        // ✅ پیش‌فرض متن انتخاب‌شده داخل خود Select
        '& .MuiSelect-select': {
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

        ...sx, // ← override در سطح یک مورد خاص (برای لیبل/متن انتخاب‌شده/راهنما)
      }}
    >
      {label && <InputLabel id={labelId}>{label}</InputLabel>}

      <Select
        id={id}
        name={name}
        fullWidth
        labelId={labelId}
        value={value}
        label={label}
        displayEmpty
        onChange={(event) => onChange?.(event.target.value, event)}
        onBlur={onBlur}
        renderValue={
          renderValue ||
          ((selected) => {
            if (
              selected === '' ||
              selected === null ||
              selected === undefined
            ) {
              return placeholder;
            }

            const option = options.find((item) => item.value === selected);

            return option ? option.label : selected;
          })
        }
        MenuProps={{
          PaperProps: {
            sx: {
              // ✅ پیش‌فرض هر ردیف داخل منوی بازشونده (چون Portal است، اینجا جدا تعریف می‌شود)
              '& .MuiMenuItem-root': {
                fontSize: 16,
                fontWeight: 600,
                color: colors.textPrimary,
              },
            },
          },
          ...MenuProps, // ← override منو در صورت نیاز
        }}
        {...rest}
      >
        {placeholder && <MenuItem value="">{placeholder}</MenuItem>}

        {children ||
          options.map((option) => (
            <MenuItem
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </MenuItem>
          ))}
      </Select>

      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

AppSelectform.propTypes = AppSelectPropTypes;

AppSelectform.defaultProps = AppSelectDefaultProps;

export default memo(AppSelectform);
