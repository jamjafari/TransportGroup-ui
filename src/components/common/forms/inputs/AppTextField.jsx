import React, { forwardRef, memo, useState } from 'react';

import {
  TextField,
  InputAdornment,
  CircularProgress,
  IconButton,
} from '@mui/material';

import { Visibility, VisibilityOff } from '@mui/icons-material';

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
      ...restProps
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === 'password';

    return (
      <TextField
        {...restProps}
        dir="rtl"
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

          ...sx,
        }}
      />
    );
  },
);

AppTextField.displayName = 'AppTextField';

AppTextField.propTypes = AppTextFieldPropTypes;

export default memo(AppTextField);
