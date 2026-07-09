import React, { memo } from 'react';

import { TableRow } from '@mui/material';

import GridCell from './GridCell';

import { GridRowPropTypes } from './GridRow.types';

const GridRow = ({
  row,

  columns,

  hover = true,

  selected = false,

  onClick,

  onDoubleClick,
}) => {
  return (
    <TableRow
      hover={hover}

      selected={selected}

      onClick={() => onClick?.(row)}

      onDoubleClick={() => onDoubleClick?.(row)}

      sx={{
        cursor: onClick ? 'pointer' : 'default',

        transition: 'background-color .2s',

        '&:hover': {
          backgroundColor: 'action.hover',
        },
      }}
    >
      {columns.map((column) => (
        <GridCell
          key={column.field}

          row={row}

          column={column}
        />
      ))}
    </TableRow>
  );
};

GridRow.propTypes = GridRowPropTypes;

export default memo(GridRow);
