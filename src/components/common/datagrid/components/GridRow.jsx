import React, { memo } from 'react';

import { TableRow, TableCell, Checkbox } from '@mui/material';

import GridCell from './GridCell';

const GridRow = ({
  row,

  columns,

  rowKey = 'id',

  rowSelection = false,

  selected = false,

  onToggle,

  onClick,

  onDoubleClick,
}) => {
  return (
    <TableRow
      hover
      selected={selected}
      onClick={() => onClick?.(row)}
      onDoubleClick={() => onDoubleClick?.(row)}
      sx={{
        cursor: onClick ? 'pointer' : 'default',

        '&:hover': {
          backgroundColor: 'action.hover',
        },
      }}
    >
      {rowSelection && (
        <TableCell
          padding="checkbox"
          sx={{
            width: 50,
            minWidth: 50,
            maxWidth: 50,
            boxSizing: 'border-box',
          }}
        >
          <Checkbox checked={selected} onChange={() => onToggle?.(row)} />
        </TableCell>
      )}

      {columns.map((column) => (
        <GridCell key={column.field} row={row} column={column} />
      ))}
    </TableRow>
  );
};

export default memo(GridRow);
