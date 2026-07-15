import React, { memo } from 'react';

import { Alert, Stack } from '@mui/material';

import AppDialog from './AppDialog';

import { AppButton } from '@/components';

import { ConfirmDialogPropTypes } from './ConfirmDialog.types';

const ConfirmDialog = ({
  open,

  title = 'Confirmation',

  message = 'Are you sure?',

  confirmText = 'Confirm',

  cancelText = 'Cancel',

  loading = false,

  severity = 'warning',

  onConfirm,

  onCancel,
}) => {
  return (
    <AppDialog
      open={open}

      title={title}

      onClose={onCancel}

      maxWidth="xs"

      actions={
        <Stack
          direction="row"

          spacing={2}
        >
          <AppButton
            variant="outlined"

            onClick={onCancel}
          >
            {cancelText}
          </AppButton>

          <AppButton
            color={severity === 'error' ? 'error' : 'primary'}

            loading={loading}

            onClick={onConfirm}
          >
            {confirmText}
          </AppButton>
        </Stack>
      }
    >
      <Alert severity={severity}>{message}</Alert>
    </AppDialog>
  );
};

ConfirmDialog.propTypes = ConfirmDialogPropTypes;

export default memo(ConfirmDialog);
