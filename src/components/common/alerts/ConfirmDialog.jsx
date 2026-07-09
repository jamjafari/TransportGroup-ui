import React, { memo } from 'react';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';

import AppButton from '../buttons/AppButton';

import {
  ConfirmDialogPropTypes,
  ConfirmDialogDefaultProps,
} from './ConfirmDialog.types';

const ConfirmDialog = ({
  open,

  title,

  message,

  confirmText,

  cancelText,

  confirmColor,

  loading,

  onConfirm,

  onCancel,
}) => {
  return (
    <Dialog
      open={open}

      onClose={onCancel}

      maxWidth="xs"

      fullWidth
    >
      <DialogTitle>{title}</DialogTitle>

      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>

      <DialogActions>
        <AppButton
          variant="outlined"

          onClick={onCancel}
        >
          {cancelText}
        </AppButton>

        <AppButton
          color={confirmColor}

          loading={loading}

          onClick={onConfirm}
        >
          {confirmText}
        </AppButton>
      </DialogActions>
    </Dialog>
  );
};

ConfirmDialog.propTypes = ConfirmDialogPropTypes;

ConfirmDialog.defaultProps = ConfirmDialogDefaultProps;

export default memo(ConfirmDialog);
