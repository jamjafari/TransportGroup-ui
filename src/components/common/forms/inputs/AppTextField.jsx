import React, { forwardRef, memo, useState } from 'react';

import {
  TextField,
  InputAdornment,
  CircularProgress,
  IconButton,
} from '@mui/material';

import { Visibility, VisibilityOff } from '@mui/icons-material';

import useTranslatedField from '../useTranslatedField';

import { AppTextFieldPropTypes } from './AppTextField.types';

const AppTextField = forwardRef(
  (
    {
      type = 'text',
      loading = false,
      startIcon,
      endIcon,
      readOnly = false,
      InputProps,
      size = 'medium',
      fullWidth = true,
      sx,
      // ✅ صریحاً جدا شدند تا ترجمه شوند؛ قبلاً داخل restProps رد می‌شدند
      label,
      placeholder,
      helperText,
      ...restProps
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    const { tr } = useTranslatedField();

    const isPassword = type === 'password';

    return (
      <TextField
        {...restProps}
        label={tr(label)}
        placeholder={tr(placeholder)}
        helperText={tr(helperText)}
        ref={ref}
        type={isPassword && showPassword ? 'text' : type}
        size={size}
        fullWidth={fullWidth}
        InputProps={{
          ...InputProps,
          readOnly,

          startAdornment: startIcon ? (
            <InputAdornment position="start">{startIcon}</InputAdornment>
          ) : (
            InputProps?.startAdornment
          ),

          endAdornment: (
            <InputAdornment position="end">
              {loading && <CircularProgress size={20} />}

              {isPassword && (
                <IconButton
                  edge="end"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              )}

              {endIcon}
            </InputAdornment>
          ),
        }}
        sx={{
          width: '100%',

          '& .MuiOutlinedInput-root': {
            minHeight: 56,
            boxSizing: 'border-box',
          },

          // ✅ پیش‌فرض متن ورودی
          '& .MuiOutlinedInput-input': {
            fontSize: 16,
            fontWeight: 600,
            color: 'text.primary',
          },

          // ✅ پیش‌فرض لیبل
          '& .MuiInputLabel-root': {
            fontSize: 15,
            fontWeight: 700,
            color: 'text.secondary',
          },

          // ✅ پیش‌فرض متن راهنما (helperText)
          '& .MuiFormHelperText-root': {
            fontSize: 14,
            fontWeight: 400,
            color: 'text.secondary',
          },

          ...sx, // ← هر مصرف‌کننده می‌تواند این‌ها را در یک مورد خاص override کند
        }}
      />
    );
  },
);

AppTextField.displayName = 'AppTextField';

AppTextField.propTypes = AppTextFieldPropTypes;

export default memo(AppTextField);
