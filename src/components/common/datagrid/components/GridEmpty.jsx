import React, { memo } from 'react';

import { TableBody, TableRow, TableCell, Typography, Box } from '@mui/material';

import Stack from '@mui/material/Stack';

import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import { useTranslation } from 'react-i18next';

import { GridEmptyPropTypes } from './GridEmpty.types';

// ✅ پیش‌فرض‌ها از انگلیسی ('No Data') به کلید فارسی تغییر کردند — قبلاً در حالت
// فارسی هم متن انگلیسی نشان داده می‌شد.
const GridEmpty = ({
  colSpan = 1,

  title = 'اطلاعاتی وجود ندارد',

  description = 'هیچ رکوردی یافت نشد.',

  icon,

  action,
}) => {
  const { t } = useTranslation();

  return (
    <TableBody>
      <TableRow>
        <TableCell
          colSpan={colSpan}

          align="center"

          sx={{
            py: 8,
          }}
        >
          <Stack
            spacing={2}

            alignItems="center"

            justifyContent="center"
          >
            <Box
              sx={{
                color: 'text.secondary',
              }}
            >
              {icon ?? (
                <InboxOutlinedIcon
                  sx={{
                    fontSize: 64,
                  }}
                />
              )}
            </Box>

            <Typography
              variant="h6"

              fontWeight={600}
            >
              {t(title)}
            </Typography>

            <Typography
              variant="body2"

              color="text.secondary"
            >
              {t(description)}
            </Typography>

            {action}
          </Stack>
        </TableCell>
      </TableRow>
    </TableBody>
  );
};

GridEmpty.propTypes = GridEmptyPropTypes;

export default memo(GridEmpty);
