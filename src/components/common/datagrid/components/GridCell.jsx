import React, { memo } from 'react';

import { TableCell, Typography } from '@mui/material';

// ✅ همان StatusChip اصلی برنامه (با برچسب ترجمه‌شده از statusLabels)، نه نسخه‌ی قدیمی status/
import StatusChip from '../../chips/StatusChip';
import { ActionMenu } from '@/components';
import { formatNumber, formatDate, formatDateTime } from '@/utils';
import i18n from '@/i18n';

const GridCell = ({ row, column }) => {
  const value = row[column.field];

  const renderValue = () => {
    if (column.renderCell) {
      return column.renderCell({
        row,
        value,
        column,
      });
    }

    switch (column.type) {
      case 'status':
        return <StatusChip status={value} />;

      case 'actions':
        return <ActionMenu row={row} actions={column.actions ?? []} />;

      case 'currency':
        return formatNumber(value ?? 0);

      case 'number':
        return formatNumber(value ?? 0);

      case 'date':
        return value ? formatDate(value) : '-';

      case 'datetime':
        return value ? formatDateTime(value) : '-';

      case 'boolean':
        return value ? i18n.t('بله') : i18n.t('خیر');

      default:
        return (
          <Typography variant="bodyText" noWrap>
            {value ?? '-'}
          </Typography>
        );
    }
  };

  return (
    <TableCell
      align={column.align}

      sx={{
        width: column.width,

        minWidth: column.minWidth,

        maxWidth: column.maxWidth,

        whiteSpace: 'nowrap',

        overflow: 'auto',
        // ✅ مقیاس مشترک: متن جدول 16px و وزن معمولی (قبلاً 15px پررنگ، هم‌وزن عنوان‌ها)
        typography: 'bodyText',
        textOverflow: 'ellipsis',

        px: 2,
        textAlign: 'center',
      }}
    >
      {renderValue()}
    </TableCell>
  );
};

export default memo(GridCell);
