import React, { memo, useState } from 'react';

import {
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

import FileDownloadIcon from '@mui/icons-material/FileDownload';

import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

import TableChartIcon from '@mui/icons-material/TableChart';

import { ExportButtonPropTypes } from './ExportButton.types';

const ExportButton = ({
  onExcel,

  onPdf,

  loading = false,

  disabled = false,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  return (
    <>
      <Button
        variant="outlined"

        startIcon={<FileDownloadIcon />}

        loading={loading}

        disabled={disabled}

        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        Export
      </Button>

      <Menu
        open={open}

        anchorEl={anchorEl}

        onClose={() => setAnchorEl(null)}
      >
        <MenuItem
          onClick={() => {
            setAnchorEl(null);

            onExcel?.();
          }}
        >
          <ListItemIcon>
            <TableChartIcon />
          </ListItemIcon>

          <ListItemText>Excel</ListItemText>
        </MenuItem>

        <MenuItem
          onClick={() => {
            setAnchorEl(null);

            onPdf?.();
          }}
        >
          <ListItemIcon>
            <PictureAsPdfIcon />
          </ListItemIcon>

          <ListItemText>PDF</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
};

ExportButton.propTypes = ExportButtonPropTypes;

export default memo(ExportButton);
