import React, { memo, useMemo } from 'react';

import { Paper, Table, TableContainer } from '@mui/material';

import useDataGrid from './hooks/useDataGrid';

import GridHeader from './components/GridHeader';

import GridBody from './components/GridBody';

import GridLoading from './components/GridLoading';

import GridEmpty from './components/GridEmpty';

import DataGridToolbar from './components/toolbar/DataGridToolbar';

import { AppPagination } from '@/components/common/navigation';

import { applyFilters } from './filters';

import { exportToExcel, exportToPdf } from './export';

import { resolveCellRender, resolveCellValue } from './columns';

import {
  AppDataGridPropTypes,
  AppDataGridDefaultProps,
} from './AppDataGrid.types';

const AppDataGrid = ({
  rows,
  columns,
  rowKey,

  loading,

  toolbar,

  emptyTitle,
  emptyDescription,
  emptyIcon,
  emptyAction,

  initialSortField,
  initialSortDirection,
  initialPage,
  initialPageSize,

  rowSelection,
  sortable,
  searchable,
  filterable,
  pagination,
  stickyHeader,

  onRowClick,
  onRowDoubleClick,
}) => {
  const viewsManager = useSavedViews();
  const grid = useDataGrid({
    rows,
    columns,
    rowKey,
    initialSortField,
    initialSortDirection,
    initialPage,
    initialPageSize,
  });

  const filteredRows = useMemo(() => {
    return applyFilters(grid.rows, grid.filters, columns);
  }, [grid.rows, grid.filters, columns]);

  const handleExportExcel = () => {
    exportToExcel({
      rows: filteredRows,
      columns,
    });
  };

  const handleExportPdf = () => {
    exportToPdf({
      rows: filteredRows,
      columns,
    });
  };

  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: 3,
        overflow: 'hidden',
      }}
    >
      {toolbar && (
        <DataGridToolbar
          search={grid.search}
          onSearch={grid.setSearch}
          clearSearch={grid.clearSearch}

          filters={grid.filters}
          onFilterChange={grid.setFilter}

          selectedCount={grid.selectedCount}

          clearSelection={grid.clearSelection}

          onExport={handleExportExcel}
          onExportPdf={handleExportPdf}
        />
      )}

      <TableContainer>
        <Table stickyHeader={stickyHeader}>
          <GridHeader
            columns={columns}
            sortable={sortable}
            stickyHeader={stickyHeader}
            rowSelection={rowSelection}

            sortField={grid.sortField}
            sortDirection={grid.sortDirection}

            onSort={grid.handleSort}

            allSelected={
              grid.selectedCount > 0 &&
              grid.selectedCount === filteredRows.length
            }

            indeterminate={
              grid.selectedCount > 0 && grid.selectedCount < filteredRows.length
            }

            onSelectAll={grid.toggleAll}
          />

          {loading ? (
            <GridLoading columns={columns.length + (rowSelection ? 1 : 0)} />
          ) : filteredRows.length === 0 ? (
            <GridEmpty
              colSpan={columns.length + (rowSelection ? 1 : 0)}
              title={emptyTitle}
              description={emptyDescription}
              icon={emptyIcon}
              action={emptyAction}
            />
          ) : (
            <GridBody
              rows={filteredRows}
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
        </Table>
      </TableContainer>

      {pagination && (
        <AppPagination
          page={grid.page}
          pageSize={grid.pageSize}
          totalCount={grid.totalCount}
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
