import React, { memo } from 'react';

import { Chip } from '@mui/material';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import BuildCircleIcon from '@mui/icons-material/BuildCircle';

import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

import { StatusChipPropTypes } from './StatusChip.types';

const statusMap = {
  Active: {
    label: 'Active',

    color: 'success',

    icon: <CheckCircleIcon />,
  },

  Inactive: {
    label: 'Inactive',

    color: 'default',

    icon: <HighlightOffIcon />,
  },

  InRepair: {
    label: 'In Repair',

    color: 'warning',

    icon: <BuildCircleIcon />,
  },

  1: {
    label: 'Active',

    color: 'success',

    icon: <CheckCircleIcon />,
  },

  2: {
    label: 'Inactive',

    color: 'default',

    icon: <HighlightOffIcon />,
  },

  3: {
    label: 'In Repair',

    color: 'warning',

    icon: <BuildCircleIcon />,
  },
};

const StatusChip = ({
  status,

  size = 'small',
}) => {
  const item = statusMap[status] ?? {
    label: status,

    color: 'info',

    icon: <HelpOutlineIcon />,
  };

  return (
    <Chip
      size={size}

      label={item.label}

      color={item.color}

      icon={item.icon}

      variant="filled"
    />
  );
};

StatusChip.propTypes = StatusChipPropTypes;

export default memo(StatusChip);
