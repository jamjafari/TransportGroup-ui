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

      ...props
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === 'password';

    return (
      <TextField
        ref={ref}

        type={isPassword ? (showPassword ? 'text' : 'password') : type}

        InputProps={{
          ...InputProps,

          readOnly,

          startAdornment: startIcon && (
            <InputAdornment position="start">{startIcon}</InputAdornment>
          ),

          endAdornment: (
            <InputAdornment position="end">
              {loading && <CircularProgress size={20} />}

              {isPassword && (
                <IconButton
                  edge="end"

                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              )}

              {endIcon}
            </InputAdornment>
          ),
        }}

        {...props}
      />
    );
  },
);

AppTextField.displayName = 'AppTextField';

AppTextField.propTypes = AppTextFieldPropTypes;

export default memo(AppTextField);
