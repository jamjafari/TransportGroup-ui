import React, { memo } from 'react';

import { TableBody } from '@mui/material';

import GridRow from './GridRow';

const GridBody = ({
  rows,

  columns,

  rowKey = 'id',

  rowSelection = false,

  selectedRows = [],

  isSelected,

  onToggleRow,

  onRowClick,

  onRowDoubleClick,
}) => {
  return (
    <TableBody>
      {rows.map((row) => {
        const id = row[rowKey];

        const selected = isSelected
          ? isSelected(id)
          : selectedRows.includes(id);

        return (
          <GridRow
            key={id}

            row={row}

            columns={columns}

            rowKey={rowKey}

            rowSelection={rowSelection}

            selected={selected}

            onToggle={() => onToggleRow?.(row)}

            onClick={() => onRowClick?.(row)}

            onDoubleClick={() => onRowDoubleClick?.(row)}

            disableColumnResize
            sx={{ width: 'auto' }}
          />
        );
      })}
    </TableBody>
  );
};

export default memo(GridBody);
