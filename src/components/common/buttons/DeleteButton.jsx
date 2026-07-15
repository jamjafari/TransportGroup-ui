import React, { memo } from 'react';

import { IconButton, Tooltip, CircularProgress } from '@mui/material';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutlined';

import PermissionGate from '../permissions/PermissionGate';

import { DeleteButtonPropTypes } from './DeleteButton.types';

const DeleteButton = ({
  onClick,

  loading = false,

  disabled = false,

  permission,

  tooltip = 'Delete',
}) => {
  return (
    <PermissionGate permission={permission}>
      <Tooltip title={tooltip}>
        <span>
          <IconButton
            color="error"

            disabled={loading || disabled}

            onClick={onClick}
          >
            {loading ? <CircularProgress size={20} /> : <DeleteOutlineIcon />}
          </IconButton>
        </span>
      </Tooltip>
    </PermissionGate>
  );
};

DeleteButton.propTypes = DeleteButtonPropTypes;

export default memo(DeleteButton);
