import React, { memo } from 'react';

import {
  TableHead,
  TableRow,
  TableCell,
  Checkbox,
  TableSortLabel,
  Box,
  Typography,
  IconButton,
} from '@mui/material';

import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

import MoreVertIcon from '@mui/icons-material/MoreVert';

import {
  GridHeaderPropTypes,
  GridHeaderDefaultProps,
} from './GridHeader.types';

const GridHeader = ({
  columns,

  rowSelection,

  allSelected,

  indeterminate,

  sortable,

  stickyHeader,

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
              width: 56,

              position: stickyHeader ? 'sticky' : 'static',

              left: 0,

              zIndex: 5,

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
          const active = sortField === column.field;

          return (
            <TableCell
              key={column.field}

              align={column.align || 'left'}

              sortDirection={active ? sortDirection : false}

              sx={{
                width: column.width,

                minWidth: column.minWidth,

                maxWidth: column.maxWidth,

                whiteSpace: 'nowrap',

                position: stickyHeader ? 'sticky' : 'static',

                top: 0,

                zIndex: 4,

                bgcolor: 'background.paper',

                fontWeight: 700,
              }}
            >
              <Box
                display="flex"

                alignItems="center"

                justifyContent="space-between"

                gap={1}
              >
                {sortable && column.sortable !== false ? (
                  <TableSortLabel
                    active={active}

                    direction={active ? sortDirection : 'asc'}

                    onClick={() => onSort?.(column.field)}
                  >
                    <Typography
                      variant="subtitle2"

                      fontWeight={600}
                    >
                      {column.headerName}
                    </Typography>
                  </TableSortLabel>
                ) : (
                  <Typography
                    variant="subtitle2"

                    fontWeight={600}
                  >
                    {column.headerName}
                  </Typography>
                )}

                <Box
                  display="flex"

                  alignItems="center"
                >
                  {column.filterable && (
                    <FilterAltOutlinedIcon
                      fontSize="small"

                      color="disabled"
                    />
                  )}

                  {column.menu !== false && (
                    <IconButton
                      size="small"

                      onClick={(event) =>
                        onColumnMenu?.(
                          event,

                          column,
                        )
                      }
                    >
                      <MoreVertIcon fontSize="small" />
                    </IconButton>
                  )}
                </Box>
              </Box>
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
};

GridHeader.propTypes = GridHeaderPropTypes;

GridHeader.defaultProps = GridHeaderDefaultProps;

export default memo(GridHeader);
