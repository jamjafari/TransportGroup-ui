import React, { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import AttachFileIcon from '@mui/icons-material/AttachFile';

import RecordAttachmentsDialog from './RecordAttachmentsDialog';

const AttachmentsButton = ({ ownerType, ownerId, title = 'مدارک' }) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Tooltip title={t('مشاهده مدارک')}>
        <IconButton
          size="small"
          aria-label={t('مشاهده مدارک')}
          onClick={(event) => {
            event.stopPropagation();
            setOpen(true);
          }}
        >
          <AttachFileIcon fontSize="small" />
        </IconButton>
      </Tooltip>

      <RecordAttachmentsDialog
        open={open}
        onClose={() => setOpen(false)}
        ownerType={ownerType}
        ownerId={ownerId}
        title={title}
      />
    </>
  );
};

export default memo(AttachmentsButton);
