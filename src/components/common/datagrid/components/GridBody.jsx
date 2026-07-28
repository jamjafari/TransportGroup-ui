import React, { memo } from 'react';

import { TableBody } from '@mui/material';

import GridRow from './GridRow';

const GridBody = ({
  rows,

  columns,

  rowKey = 'id',

  rowSelection = false,

  isSelected,

  onToggleRow,

  onRowClick,

  onRowDoubleClick,
}) => {
  return (
    <TableBody>
      {rows.map((row) => {
        const id = row[rowKey];

        return (
          <GridRow
            key={id}
            row={row}
            columns={columns}
            rowKey={rowKey}
            rowSelection={rowSelection}
            selected={isSelected(id)}
            onToggle={onToggleRow}
            onClick={onRowClick}
            onDoubleClick={onRowDoubleClick}
          />
        );
      })}
    </TableBody>
  );
};

export default memo(GridBody);
