import React, { memo } from 'react';

import { Snackbar } from '@mui/material';

import AppAlert from './AppAlert';

import {
  AppSnackbarPropTypes,
  AppSnackbarDefaultProps,
} from './AppSnackbar.types';

const AppSnackbar = ({
  open,

  message,

  severity,

  autoHideDuration,

  anchorOrigin,

  onClose,
}) => {
  return (
    <Snackbar
      open={open}

      autoHideDuration={autoHideDuration}

      anchorOrigin={anchorOrigin}

      onClose={onClose}
    >
      <div>
        <AppAlert
          open

          severity={severity}

          onClose={onClose}
        >
          {message}
        </AppAlert>
      </div>
    </Snackbar>
  );
};

AppSnackbar.propTypes = AppSnackbarPropTypes;

AppSnackbar.defaultProps = AppSnackbarDefaultProps;

export default memo(AppSnackbar);
