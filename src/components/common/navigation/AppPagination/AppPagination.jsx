import React, { memo } from 'react';

import {
  Box,
  Pagination,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';

import Stack from '@mui/system/Stack';

import {
  AppPaginationPropTypes,
  AppPaginationDefaultProps,
} from './AppPagination.types';

const AppPagination = ({
  page,

  pageSize,

  total,

  pageSizeOptions,

  onPageChange,

  onPageSizeChange,
}) => {
  const pageCount = Math.max(
    1,

    Math.ceil(total / pageSize),
  );

  const from = total === 0 ? 0 : (page - 1) * pageSize + 1;

  const to = Math.min(
    page * pageSize,

    total,
  );

  return (
    <Stack
      direction={{
        xs: 'column',

        md: 'row',
      }}

      spacing={2}

      alignItems="center"

      justifyContent="space-between"

      sx={{
        py: 2,
      }}
    >
      <Stack
        direction="row"

        spacing={2}

        alignItems="center"
      >
        <Typography
          variant="body2"

          color="text.secondary"
        >
          {from}-{to} of {total}
        </Typography>

        <FormControl size="small">
          <Select
            value={pageSize}

            onChange={(e) => onPageSizeChange(Number(e.target.value))}
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
      </Stack>

      <Box>
        <Pagination
          color="primary"

          shape="rounded"

          page={page}

          count={pageCount}

          onChange={(_, value) => onPageChange(value)}
        />
      </Box>
    </Stack>
  );
};

AppPagination.propTypes = AppPaginationPropTypes;

AppPagination.defaultProps = AppPaginationDefaultProps;

export default memo(AppPagination);
