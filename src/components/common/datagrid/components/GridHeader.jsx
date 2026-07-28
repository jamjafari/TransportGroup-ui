import React, { memo } from 'react';

import {
  TableHead,
  TableRow,
  TableCell,
  Checkbox,
  TableSortLabel,
  IconButton,
  Box,
} from '@mui/material';

import MoreVertIcon from '@mui/icons-material/MoreVert';

const GridHeader = ({
  columns,

  rowSelection = false,

  allSelected = false,

  indeterminate = false,

  sortable = true,

  stickyHeader = false,

  sortField,

  sortDirection,

  onSort,

  onSelectAll,

  onColumnMenu,
}) => {
  return (
    <TableHead>
      <TableRow>
        {rowSelection && (
          <TableCell
            padding="checkbox"
            sx={{
              width: 50,
              minWidth: 50,
              maxWidth: 50,
              boxSizing: 'border-box',

              position: stickyHeader ? 'sticky' : 'static',
              top: 0,
              left: 0,
              zIndex: 10,
              bgcolor: 'background.paper',
            }}
          >
            <Checkbox
              checked={allSelected}
              indeterminate={indeterminate}
              onChange={onSelectAll}
            />
          </TableCell>
        )}

        {columns.map((column) => {
          const width = column.width ?? 150;

          const active = sortField === column.field;

          return (
            <TableCell
              key={column.field}
              align={column.align || 'right'}
              sx={{
                width: column.width,

                minWidth: column.minWidth,

                maxWidth: column.maxWidth,

                boxSizing: 'border-box',

                overflow: 'hidden',

                whiteSpace: 'nowrap',

                px: 1.5,

                fontWeight: 700,

                position: stickyHeader ? 'sticky' : 'static',

                top: 0,

                zIndex: 9,

                bgcolor: 'background.paper',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  width: '100%',
                }}
              >
                <Box
                  sx={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'right',
                  }}
                >
                  <TableSortLabel
                    active={active}
                    direction={active ? sortDirection : 'asc'}
                    onClick={() => onSort?.(column.field)}
                  >
                    {column.headerName}
                  </TableSortLabel>
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  {column.filterable && (
                    <FilterAltOutlinedIcon fontSize="small" />
                  )}

                  {column.menu !== false && (
                    <IconButton size="small">
                      <MoreVertIcon fontSize="small" />
                    </IconButton>
                  )}
                </Box>
              </Box>
            </TableCell>
            // <TableCell

            // >
            //   <Box
            //     sx={{
            //       display: 'flex',
            //       flexDirection: 'row-reverse',
            //       justifyContent: 'center',
            //       alignItems: 'center',
            //       direction: 'ltr',
            //       gap: 0.5,
            //       width: '100%',
            //     }}
            //   >
            //     {sortable && column.sortable !== false ? (
            //       <TableSortLabel
            //         active={active}
            //         direction={active ? sortDirection : 'asc'}
            //         onClick={() => onSort(column.field)}
            //       >
            //         {column.headerName}
            //       </TableSortLabel>
            //     ) : (
            //       column.headerName
            //     )}

            //     {column.menu !== false && (
            //       <IconButton
            //         size="small"
            //         onClick={(event) => onColumnMenu?.(event, column)}
            //       >
            //         <MoreVertIcon fontSize="small" />
            //       </IconButton>
            //     )}
            //   </Box>
            // </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
};

export default memo(GridHeader);
