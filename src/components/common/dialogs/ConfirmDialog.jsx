import React, { memo } from 'react';

import { Alert, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';

import AppDialog from './AppDialog';

import { AppButton } from '@/components';

import { ConfirmDialogPropTypes } from './ConfirmDialog.types';

// ✅ پیش‌فرض‌ها از انگلیسی ('Confirmation'، 'Are you sure?'، ...) به کلید فارسی
// تغییر کردند — قبلاً در حالت فارسی هم انگلیسی نمایش داده می‌شدند.
const ConfirmDialog = ({
  open,

  title = 'تایید عملیات',

  message = 'مطمئن هستید؟',

  confirmText = 'تایید',

  cancelText = 'انصراف',

  loading = false,

  severity = 'warning',

  onConfirm,

  onCancel,
}) => {
  const { t } = useTranslation();

  return (
    <AppDialog
      open={open}

      title={t(title)}

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
            {t(cancelText)}
          </AppButton>

          <AppButton
            color={severity === 'error' ? 'error' : 'primary'}

            loading={loading}

            onClick={onConfirm}
          >
            {t(confirmText)}
          </AppButton>
        </Stack>
      }
    >
      <Alert severity={severity}>{t(message)}</Alert>
    </AppDialog>
  );
};

ConfirmDialog.propTypes = ConfirmDialogPropTypes;

export default memo(ConfirmDialog);
