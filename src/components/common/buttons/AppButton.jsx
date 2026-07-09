import React, { forwardRef, memo } from 'react';

import { Button, CircularProgress } from '@mui/material';

import { AppButtonPropTypes } from './AppButton.types';

const AppButton = forwardRef(
  (
    {
      children,

      loading = false,

      variant = 'contained',

      color = 'primary',

      size = 'medium',

      disabled = false,

      fullWidth = false,

      startIcon,

      endIcon,

      type = 'button',

      ...props
    },

    ref,
  ) => {
    return (
      <Button
        ref={ref}

        variant={variant}

        color={color}

        size={size}

        disabled={disabled || loading}

        fullWidth={fullWidth}

        startIcon={!loading ? startIcon : null}

        endIcon={!loading ? endIcon : null}

        type={type}

        {...props}
      >
        {loading ? (
          <CircularProgress
            size={22}

            color="inherit"
          />
        ) : (
          children
        )}
      </Button>
    );
  },
);

AppButton.displayName = 'AppButton';

AppButton.propTypes = AppButtonPropTypes;

export default memo(AppButton);
