import React, { memo } from 'react';

import { TableCell, Typography } from '@mui/material';

import StatusChip from '../../status/StatusChip';
import { ActionMenu } from '@/components';

const GridCell = ({ row, column }) => {
  const value = row[column.field];

  const renderValue = () => {
    if (column.renderCell) {
      return column.renderCell({
        row,
        value,
        column,
      });
    }

    switch (column.type) {
      case 'status':
        return <StatusChip status={value} />;

      case 'actions':
        return <ActionMenu row={row} actions={column.actions ?? []} />;

      case 'currency':
        return Number(value ?? 0).toLocaleString();

      case 'number':
        return Number(value ?? 0).toLocaleString();

      case 'date':
        return value ? new Date(value).toLocaleDateString() : '-';

      case 'datetime':
        return value ? new Date(value).toLocaleString() : '-';

      case 'boolean':
        return value ? 'بله' : 'خیر';

      default:
        return (
          <Typography
            variant="body2"
            noWrap
            // sx={{
            //   textAlign: 'center',
            //   width: '100%',
            //   fontWeight: 600,
            // }}
          >
            {value ?? '-'}
          </Typography>
        );
    }
  };

  return (
    <TableCell
      align={column.align}

      sx={{
        width: column.width,

        minWidth: column.minWidth,

        maxWidth: column.maxWidth,

        whiteSpace: 'nowrap',

        overflow: 'hidden',

        textOverflow: 'ellipsis',

        px: 2,
        textAlign: 'right',
      }}
    >
      {renderValue()}
    </TableCell>
  );
};

export default memo(GridCell);
