import React, { memo, useMemo } from 'react';

import AppDataGrid from '../../../../common/datagrid/AppDataGrid';

import StatusChip from '../../../../common/chips/StatusChip';

import BaseTableWidget from './BaseTableWidget';

import {
  DashboardTablePropTypes,
  DashboardTableDefaultProps,
} from './DashboardTable.types';

const DashboardTable = ({
  title,

  subtitle,

  rows,

  columns,

  loading,

  error,

  refresh,

  height,

  searchable,

  sortable,

  filterable,

  pagination,

  rowKey,

  toolbar,

  footer,

  actions,
}) => {
  const gridColumns = useMemo(
    () =>
      columns.map((column) => {
        if (column.field !== 'status') {
          return column;
        }

        return {
          ...column,

          renderCell: ({ value }) => <StatusChip status={value} />,
        };
      }),

    [columns],
  );

  return (
    <BaseTableWidget
      title={title}

      subtitle={subtitle}

      loading={loading}

      error={error}

      refresh={refresh}

      toolbar={toolbar}

      footer={footer}

      actions={actions}

      height={height}
    >
      <AppDataGrid
        rows={rows}

        columns={gridColumns}

        rowKey={rowKey}

        searchable={searchable}

        sortable={sortable}

        filterable={filterable}

        pagination={pagination}

        loading={loading}

        toolbar={null}
      />
    </BaseTableWidget>
  );
};

DashboardTable.propTypes = DashboardTablePropTypes;

DashboardTable.defaultProps = DashboardTableDefaultProps;

export default memo(DashboardTable);
