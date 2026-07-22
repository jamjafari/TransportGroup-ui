import React, { memo } from 'react';

import { TableCell, Typography } from '@mui/material';

import StatusChip from '../../status/StatusChip';
import { ActionMenu } from '@/components';

import { GridCellPropTypes } from './GridCell.types';

const GridCell = ({
  column,

  row,
}) => {
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
        return (
          <ActionMenu
            row={row}

            actions={column.actions ?? []}
          />
        );

      case 'currency':
        return Number(value ?? 0).toLocaleString();

      case 'number':
        return Number(value ?? 0).toLocaleString();

      case 'date':
        return value ? new Date(value).toLocaleDateString() : '-';

      case 'datetime':
        return value ? new Date(value).toLocaleString() : '-';

      case 'boolean':
        return value ? 'Yes' : 'No';

      default:
        return (
          <Typography variant="body2" headeralign="right" align="right" noWrap>
            {value ?? '-'}
          </Typography>
        );
    }
  };

  return (
    <TableCell
      align={column.align ?? 'left'}

      sx={{
        whiteSpace: 'nowrap',
        align: 'right',
      }}
    >
      {renderValue()}
    </TableCell>
  );
};

GridCell.propTypes = GridCellPropTypes;

export default memo(GridCell);
