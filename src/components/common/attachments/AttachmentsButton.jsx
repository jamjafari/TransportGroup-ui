import React, { memo, useState } from 'react';

import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import AttachFileIcon from '@mui/icons-material/AttachFile';

import RecordAttachmentsDialog from './RecordAttachmentsDialog';

const AttachmentsButton = ({ ownerType, ownerId, title = 'مدارک' }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Tooltip title="مشاهده مدارک">
        <IconButton
          size="small"
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
