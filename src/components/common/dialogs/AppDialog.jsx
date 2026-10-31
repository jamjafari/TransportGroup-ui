import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
  CircularProgress,
  Box,
} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';

import { AppDialogPropTypes } from './AppDialog.types';

const AppDialog = ({
  open,

  title,

  children,

  actions,

  loading = false,

  maxWidth = 'md',

  fullWidth = true,

  dividers = true,

  onClose,
}) => {
  const { t } = useTranslation();

  return (
    <Dialog
      open={open}

      onClose={onClose}

      maxWidth={maxWidth}

      fullWidth={fullWidth}
    >
      {title && (
        <DialogTitle>
          <Box
            display="flex"

            justifyContent="space-between"

            alignItems="center"
          >
            <Typography
              variant="h6"

              fontWeight={600}
            >
              {/* ✅ عنوان رشته‌ای ترجمه می‌شود؛ عنوان‌هایی که صدازننده از قبل ترجمه کرده بی‌تغییر می‌مانند */}
              {typeof title === 'string' ? t(title) : title}
            </Typography>

            {onClose && (
              <IconButton onClick={onClose} aria-label={t('بستن')}>
                <CloseIcon />
              </IconButton>
            )}
          </Box>
        </DialogTitle>
      )}

      {/* ✅ sx={{ direction: 'rtl' }} حذف شد.
          stylis-plugin-rtl (از طریق cssjanus) مقدار direction را برمی‌گرداند،
          پس این سه اعلان دقیقاً برعکس کار می‌کردند و محتوای دیالوگ LTR می‌شد.
          دیالوگ در Portal رندر می‌شود و جهت را از <html dir> به ارث می‌برد. */}
      <DialogContent dividers={dividers}>
        {loading ? (
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <CircularProgress />
          </Box>
        ) : (
          children
        )}
      </DialogContent>

      {actions && <DialogActions>{actions}</DialogActions>}
    </Dialog>
  );
};

AppDialog.propTypes = AppDialogPropTypes;

export default memo(AppDialog);
