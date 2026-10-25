import React, { memo } from 'react';

import {
  Pagination,
  FormControl,
  MenuItem,
  Select,
  Stack,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

import { formatNumber } from '@/utils';

import { AppPaginationPropTypes } from './AppPagination.types';

const AppPagination = ({
  page = 1,

  pageSize = 10,

  total = 0,

  pageSizeOptions = [10, 25, 50, 100],

  onPageChange,

  onPageSizeChange,
}) => {
  const { t } = useTranslation();

  const pageCount = Math.max(1, Math.ceil(total / pageSize));

  const from = total === 0 ? 0 : (page - 1) * pageSize + 1;

  const to = Math.min(page * pageSize, total);

  // ✅ متن شمارش با جای‌گذاری نام‌دار ترجمه می‌شود، نه با چسباندن تکه‌های متن.
  // قبلاً «نمایش {from} تا {to} از {total}» به‌صورت متن و مقدار درهم نوشته شده بود؛
  // در انگلیسی ترتیب کلمات فرق می‌کند، پس ترجمه باید خودش جای مقادیر را تعیین کند.
  const summary = t('نمایش {{from}} تا {{to}} از {{total}}', {
    from: formatNumber(from),
    to: formatNumber(to),
    total: formatNumber(total),
  });

  // برچسب‌های دسترس‌پذیری دکمه‌های صفحه‌بندی (پیش‌فرض MUI انگلیسی است)
  const getItemAriaLabel = (type, itemPage) => {
    if (type === 'page') {
      return t('صفحه {{page}}', { page: formatNumber(itemPage) });
    }

    if (type === 'first') return t('صفحه اول');
    if (type === 'last') return t('صفحه آخر');
    if (type === 'next') return t('صفحه بعد');

    return t('صفحه قبل');
  };

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
        <Typography variant="body2">{summary}</Typography>

        <FormControl size="small">
          <Select
            value={pageSize}
            onChange={(e) => onPageSizeChange(Number(e.target.value))}
            inputProps={{
              'aria-label': t('تعداد ردیف در هر صفحه'),
            }}
          >
            {pageSizeOptions.map((item) => (
              <MenuItem key={item} value={item}>
                {formatNumber(item)}
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
        getItemAriaLabel={getItemAriaLabel}
        onChange={(_, value) => onPageChange(value)}
      />
    </Stack>
  );
};

AppPagination.propTypes = AppPaginationPropTypes;

export default memo(AppPagination);
