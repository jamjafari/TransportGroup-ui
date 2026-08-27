import React, { memo } from 'react';

import { Box, Typography } from '@mui/material';

import AppDialog from '@/components/common/dialogs/AppDialog';

import { getFileUrl } from '@/utils';

const isImage = (contentType) => contentType?.startsWith('image/');
const isPdf = (contentType) => contentType === 'application/pdf';

const AttachmentPreviewDialog = ({ open, onClose, attachment }) => {
  if (!attachment) return null;

  const fileUrl = getFileUrl(attachment.url);

  return (
    <AppDialog
      open={open}
      title={attachment.originalFileName}
      onClose={onClose}
      maxWidth="md"
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          minHeight: 300,
        }}
      >
        {isImage(attachment.contentType) && (
          <Box
            component="img"
            src={fileUrl}
            alt={attachment.originalFileName}
            sx={{
              maxWidth: '100%',
              maxHeight: '70vh',
              objectFit: 'contain',
            }}
          />
        )}

        {isPdf(attachment.contentType) && (
          <Box
            component="iframe"
            src={fileUrl}
            title={attachment.originalFileName}
            sx={{
              width: '100%',
              height: '70vh',
              border: 'none',
            }}
          />
        )}

        {!isImage(attachment.contentType) && !isPdf(attachment.contentType) && (
          <Typography variant="body2" color="text.secondary" sx={{ py: 6 }}>
            پیش‌نمایش این نوع فایل پشتیبانی نمی‌شود. لطفاً از دکمه‌ی دانلود
            استفاده کنید.
          </Typography>
        )}
      </Box>
    </AppDialog>
  );
};

export default memo(AttachmentPreviewDialog);
