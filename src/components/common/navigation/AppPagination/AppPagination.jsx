import React, { memo } from 'react';

import {
  Box,
  Pagination,
  FormControl,
  MenuItem,
  Select,
  Stack,
  Typography,
} from '@mui/material';

const AppPagination = ({
  page = 1,

  pageSize = 10,

  total = 0,

  pageSizeOptions = [10, 25, 50, 100],

  onPageChange,

  onPageSizeChange,
}) => {
  const pageCount = Math.max(1, Math.ceil(total / pageSize));

  const from = total === 0 ? 0 : (page - 1) * pageSize + 1;

  const to = Math.min(page * pageSize, total);

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
        px: 2,
        py: 2,
      }}
    >
      <Stack direction="row" spacing={2} alignItems="center">
        <Typography variant="body2">
          نمایش {from} تا {to} از {total}
        </Typography>

        <FormControl size="small">
          <Select
            value={pageSize}
            onChange={(e) => onPageSizeChange(Number(e.target.value))}
          >
            {pageSizeOptions.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>

      <Pagination
        page={page}
        count={pageCount}
        color="primary"
        shape="rounded"
        onChange={(_, value) => onPageChange(value)}
      />
    </Stack>
  );
};

export default memo(AppPagination);
