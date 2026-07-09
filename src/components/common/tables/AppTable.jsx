import React, { memo } from 'react';

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Box,
  Skeleton,
} from '@mui/material';

import { AppTablePropTypes } from './AppTable.types';

const AppTable = ({
  columns,

  rows,

  loading = false,

  dense = false,

  hover = true,

  stickyHeader = true,

  maxHeight = 650,

  emptyMessage = 'No data found',

  onRowClick,
}) => {
  return (
    <Paper>
      <TableContainer
        sx={{
          maxHeight,
        }}
      >
        <Table
          stickyHeader={stickyHeader}

          size={dense ? 'small' : 'medium'}
        >
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.field}

                  align={column.align ?? 'left'}

                  width={column.width}
                >
                  {column.headerName}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {loading &&
              [...Array(8)].map((_, i) => (
                <TableRow key={i}>
                  {columns.map((c) => (
                    <TableCell key={c.field}>
                      <Skeleton />
                    </TableCell>
                  ))}
                </TableRow>
              ))}

            {!loading && rows.length === 0 && (
              <TableRow>
                <TableCell colSpan={columns.length}>
                  <Box py={5}>
                    <Typography
                      align="center"

                      color="text.secondary"
                    >
                      {emptyMessage}
                    </Typography>
                  </Box>
                </TableCell>
              </TableRow>
            )}

            {!loading &&
              rows.map((row) => (
                <TableRow
                  key={row.id}

                  hover={hover}

                  onClick={() => onRowClick?.(row)}

                  sx={{
                    cursor: onRowClick ? 'pointer' : 'default',
                  }}
                >
                  {columns.map((column) => (
                    <TableCell
                      key={column.field}

                      align={column.align ?? 'left'}
                    >
                      {column.renderCell
                        ? column.renderCell(row)
                        : row[column.field]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

AppTable.propTypes = AppTablePropTypes;

export default memo(AppTable);
