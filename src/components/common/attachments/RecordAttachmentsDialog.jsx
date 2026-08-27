import React, { memo, useState } from 'react';

import {
  Stack,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  Link,
  IconButton,
} from '@mui/material';

import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DownloadIcon from '@mui/icons-material/Download';

import AppDialog from '@/components/common/dialogs/AppDialog';

import useAttachments from '@/hooks/useAttachments';

import { getFileUrl } from '@/utils';

import AttachmentPreviewDialog from './AttachmentPreviewDialog';

const RecordAttachmentsDialog = ({
  open,
  onClose,
  ownerType,
  ownerId,
  title = 'مدارک',
}) => {
  const { attachments, loading } = useAttachments(
    ownerType,
    open ? ownerId : null,
  );

  const [previewItem, setPreviewItem] = useState(null);

  const handlePreview = (attachment) => {
    console.log('PREVIEW ATTACHMENT:', attachment);

    setPreviewItem(attachment);
  };

  const handleClosePreview = () => {
    setPreviewItem(null);
  };
  const handleDownload = (attachment) => {
    const fileUrl = getFileUrl(attachment.url);

    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = attachment.originalFileName || 'download';
    link.target = '_self';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <AppDialog open={open} title={title} onClose={onClose} maxWidth="sm">
        <Stack spacing={1}>
          {loading && (
            <Typography variant="body2">در حال بارگذاری...</Typography>
          )}

          {!loading && attachments.length === 0 && (
            <Typography variant="body2" color="text.secondary">
              مدرکی برای این رکورد ثبت نشده است.
            </Typography>
          )}

          {!loading && attachments.length > 0 && (
            <List>
              {attachments.map((item) => {
                const fileUrl = getFileUrl(item.url);

                // console.log('ATTACHMENT:', item);
                // console.log('FILE URL:', fileUrl);

                return (
                  <ListItem
                    key={item.id}
                    secondaryAction={
                      <Stack direction="row" spacing={0.5}>
                        {/* Preview */}
                        <IconButton
                          size="small"
                          onClick={() => handlePreview(item)}
                          aria-label="پیش‌نمایش فایل"
                        >
                          <VisibilityIcon fontSize="small" />
                        </IconButton>

                        {/* Download */}
                        <IconButton
                          size="small"
                          onClick={(event) => {
                            event.stopPropagation();

                            console.log('DOWNLOAD ATTACHMENT:', item);

                            handleDownload(item);
                          }}
                          aria-label="دانلود فایل"
                        >
                          <DownloadIcon fontSize="small" />
                        </IconButton>
                      </Stack>
                    }
                  >
                    <ListItemIcon>
                      <InsertDriveFileIcon />
                    </ListItemIcon>

                    <ListItemText
                      primary={
                        <Link
                          component="button"
                          variant="body2"
                          underline="hover"
                          onClick={() => handlePreview(item)}
                        >
                          {item.originalFileName}
                        </Link>
                      }
                      secondary={
                        <>
                          {/* {item.contentType && (
                            <Typography
                              component="span"
                              variant="caption"
                              display="block"
                            >
                              نوع فایل: {item.contentType}
                            </Typography>
                          )} */}

                          {/* {item.url && (
                            <Typography
                              component="span"
                              variant="caption"
                              display="block"
                              sx={{
                                wordBreak: 'break-all',
                              }}
                            >
                              URL: {fileUrl}
                            </Typography>
                          )} */}
                        </>
                      }
                    />
                  </ListItem>
                );
              })}
            </List>
          )}
        </Stack>
      </AppDialog>

      <AttachmentPreviewDialog
        open={Boolean(previewItem)}
        onClose={handleClosePreview}
        attachment={previewItem}
      />
    </>
  );
};

export default memo(RecordAttachmentsDialog);
