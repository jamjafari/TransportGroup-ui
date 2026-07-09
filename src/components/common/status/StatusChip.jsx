import React, { memo } from 'react';

import { Chip } from '@mui/material';

import {
  StatusChipPropTypes,
  StatusChipDefaultProps,
} from './StatusChip.types';

const colorMap = {
  active: 'success',

  inactive: 'default',

  online: 'success',

  offline: 'error',

  running: 'success',

  stopped: 'warning',

  maintenance: 'warning',

  pending: 'info',

  completed: 'success',

  cancelled: 'error',
};

const StatusChip = ({
  label,

  status,

  color,

  size,

  variant,
}) => {
  const chipColor = color || colorMap[status] || 'default';

  return (
    <Chip
      label={label || status}

      color={chipColor}

      size={size}

      variant={variant}
    />
  );
};

StatusChip.propTypes = StatusChipPropTypes;

StatusChip.defaultProps = StatusChipDefaultProps;

export default memo(StatusChip);
