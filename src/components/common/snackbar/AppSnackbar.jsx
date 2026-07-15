import React, { memo } from 'react';

import { Snackbar, Alert } from '@mui/material';

import { AppSnackbarPropTypes } from './AppSnackbar.types';

const AppSnackbar = ({
  open,

  message,

  severity = 'success',

  autoHideDuration = 4000,

  anchorOrigin = {
    vertical: 'top',

    horizontal: 'right',
  },

  onClose,
}) => {
  return (
    <Snackbar
      open={open}

      autoHideDuration={autoHideDuration}

      onClose={onClose}

      anchorOrigin={anchorOrigin}
    >
      <Alert
        severity={severity}

        variant="filled"

        onClose={onClose}

        sx={{
          width: '100%',
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

AppSnackbar.propTypes = AppSnackbarPropTypes;

export default memo(AppSnackbar);
