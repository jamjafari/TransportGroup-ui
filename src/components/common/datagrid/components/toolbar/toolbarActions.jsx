import React, { memo } from 'react';

import { Stack, Button, Chip } from '@mui/material';

import FileDownloadIcon from '@mui/icons-material/FileDownload';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ClearAllIcon from '@mui/icons-material/ClearAll';

const ToolbarActions = ({
  selectedCount,

  onClearSelection,

  onExport,

  onExportPdf,
}) => {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      {selectedCount > 0 && (
        <>
          <Chip color="primary" label={`${selectedCount} انتخاب شده`} />

          <Button
            size="small"
            startIcon={<ClearAllIcon />}
            onClick={onClearSelection}
          >
            لغو انتخاب
          </Button>
        </>
      )}

      <Button
        size="small"
        variant="outlined"
        startIcon={<FileDownloadIcon />}
        onClick={onExport}
      >
        Excel
      </Button>

      <Button
        size="small"
        variant="outlined"
        color="error"
        startIcon={<PictureAsPdfIcon />}
        onClick={onExportPdf}
      >
        PDF
      </Button>
    </Stack>
  );
};

export default memo(ToolbarActions);
