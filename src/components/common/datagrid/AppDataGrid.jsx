import React, { memo, useMemo } from 'react';

import { Paper } from '@mui/material';

import DataGridToolbar from './components/toolbar/DataGridToolbar';

import GridHeader from './components/GridHeader';
import GridBody from './components/GridBody';
import GridLoading from './components/GridLoading';
import GridEmpty from './components/GridEmpty';

import { AppPagination } from '@/components/common/navigation';

import useDataGrid from './hooks/useDataGrid';

import { exportToExcel, exportToPdf } from './export';
import { normalizeColumns } from './utils/columnManager';
import useColumnResize from './hooks/useColumnResize';
import {
  AppDataGridPropTypes,
  AppDataGridDefaultProps,
} from './AppDataGrid.types';

const AppDataGrid = ({
  rows = [],
  columns = [],
  rowKey = 'id',

  loading,

  toolbar,

  pagination,

  rowSelection,

  sortable,

  stickyHeader,

  initialSortField,
  initialSortDirection,
  initialPage,
  initialPageSize,

  emptyTitle,
  emptyDescription,
  emptyIcon,
  emptyAction,

  onRowClick,
  onRowDoubleClick,
}) => {
  const grid = useDataGrid({
    rows,
    columns,
    rowKey,
    initialSortField,
    initialSortDirection,
    initialPage,
    initialPageSize,
  });

  const handleExportExcel = () => {
    exportToExcel({
      rows: grid.visibleRows,
      columns,
    });
  };

  const handleExportPdf = () => {
    exportToPdf({
      rows: grid.visibleRows,
      columns,
    });
  };
  const normalizedColumns = useMemo(() => normalizeColumns(columns), [columns]);
  return (
    <Paper
      elevation={0}
      sx={{
        overflow: 'hidden',
        borderRadius: 2,
      }}
    >
      {toolbar && (
        <DataGridToolbar
          search={grid.search}
          onSearch={grid.setSearch}
          clearSearch={grid.clearSearch}
          filters={grid.filters}
          columns={columns}
          onFilterChange={grid.setFilter}
          selectedCount={grid.selectedCount}
          clearSelection={grid.clearSelection}
          onExport={handleExportExcel}
          onExportPdf={handleExportPdf}
          views={[]}
        />
      )}

      <table
        style={{
          width: '100%',
          tableLayout: 'fixed',
          borderCollapse: 'collapse',
          direction: 'rtl',
        }}
        data-sticky-header={stickyHeader ? 'true' : undefined}
      >
        <GridHeader
          columns={columns}
          rowSelection={rowSelection}
          sortable={sortable}
          stickyHeader={stickyHeader}
          sortField={grid.sortField}
          sortDirection={grid.sortDirection}
          onSort={grid.handleSort}
          allSelected={grid.allSelected}
          indeterminate={grid.indeterminate}
          onSelectAll={grid.toggleAll}
        />

        {loading ? (
          <GridLoading columns={columns.length + (rowSelection ? 1 : 0)} />
        ) : grid.visibleRows.length === 0 ? (
          <GridEmpty
            colSpan={columns.length + (rowSelection ? 1 : 0)}
            title={emptyTitle}
            description={emptyDescription}
            icon={emptyIcon}
            action={emptyAction}
          />
        ) : (
          <GridBody
            rows={grid.visibleRows}
            columns={columns}
            rowKey={rowKey}
            rowSelection={rowSelection}
            selectedRows={grid.selectedRows}
            isSelected={grid.isSelected}
            onToggleRow={grid.toggleRow}
            onRowClick={onRowClick}
            onRowDoubleClick={onRowDoubleClick}
          />
        )}
      </table>

      {pagination && (
        <AppPagination
          page={grid.page}
          pageSize={grid.pageSize}
          total={grid.filteredRows.length}
          onPageChange={grid.setPage}
          onPageSizeChange={grid.setPageSize}
        />
      )}
    </Paper>
  );
};

AppDataGrid.propTypes = AppDataGridPropTypes;
AppDataGrid.defaultProps = AppDataGridDefaultProps;

export default memo(AppDataGrid);
