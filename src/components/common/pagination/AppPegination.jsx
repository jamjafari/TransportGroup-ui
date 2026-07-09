import React, { memo } from 'react';

import {
  Box,
  Pagination,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from '@mui/material';

import {
  AppPaginationPropTypes,
  AppPaginationDefaultProps,
} from './AppPagination.types';

const AppPagination = ({
  page,

  pageSize,

  totalCount,

  pageSizeOptions,

  onPageChange,

  onPageSizeChange,
}) => {
  const totalPages = Math.max(
    1,

    Math.ceil(totalCount / pageSize),
  );

  const from = totalCount === 0 ? 0 : (page - 1) * pageSize + 1;

  const to = Math.min(
    page * pageSize,

    totalCount,
  );

  return (
    <Box
      display="flex"

      alignItems="center"

      justifyContent="space-between"

      flexWrap="wrap"

      gap={2}

      px={3}

      py={2}
    >
      <Typography
        variant="body2"

        color="text.secondary"
      >
        {`Showing ${from} - ${to} of ${totalCount}`}
      </Typography>

      <Box
        display="flex"

        alignItems="center"

        gap={2}
      >
        <FormControl
          size="small"

          sx={{
            minWidth: 100,
          }}
        >
          <InputLabel>Rows</InputLabel>

          <Select
            value={pageSize}

            label="Rows"

            onChange={(event) => onPageSizeChange?.(Number(event.target.value))}
          >
            {pageSizeOptions.map((size) => (
              <MenuItem
                key={size}

                value={size}
              >
                {size}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Pagination
          color="primary"

          shape="rounded"

          page={page}

          count={totalPages}

          onChange={(
            event,

            value,
          ) => onPageChange?.(value)}
        />
      </Box>
    </Box>
  );
};

AppPagination.propTypes = AppPaginationPropTypes;

AppPagination.defaultProps = AppPaginationDefaultProps;

export default memo(AppPagination);
