import { useMemo } from 'react';

import useGridSorting from './useGridSorting';

import useGridFiltering from './useGridFiltering';

import useGridSearching from './useGridSearching';

import useGridPagination from './useGridPagination';

import useGridSelection from './useGridSelection';

const useDataGrid = ({
  rows = [],

  columns = [],

  rowKey = 'id',

  initialSortField = '',

  initialSortDirection = 'asc',

  initialPage = 1,

  initialPageSize = 10,
}) => {
  /*
    ----------------------------------------
    Sorting
    ----------------------------------------
    */

  const sorting = useGridSorting(
    rows,

    initialSortField,

    initialSortDirection,
  );

  /*
    ----------------------------------------
    Filtering
    ----------------------------------------
    */

  const filtering = useGridFiltering(sorting.rows);

  /*
    ----------------------------------------
    Searching
    ----------------------------------------
    */

  const searching = useGridSearching(
    filtering.rows,

    columns,
  );

  /*
    ----------------------------------------
    Pagination
    ----------------------------------------
    */

  const pagination = useGridPagination(
    searching.rows,

    initialPage,

    initialPageSize,
  );

  /*
    ----------------------------------------
    Selection
    ----------------------------------------
    */

  const selection = useGridSelection(
    pagination.rows,

    rowKey,
  );

  /*
    ----------------------------------------
    Grid
    ----------------------------------------
    */

  return useMemo(
    () => ({
      /*
            -----------------------------
            Final Rows
            -----------------------------
            */

      rows: pagination.rows,

      /*
            -----------------------------
            Sorting
            -----------------------------
            */

      sortField: sorting.sortField,

      sortDirection: sorting.sortDirection,

      handleSort: sorting.handleSort,

      clearSorting: sorting.clearSorting,

      /*
            -----------------------------
            Filtering
            -----------------------------
            */

      filters: filtering.filters,

      setFilter: filtering.setFilter,

      removeFilter: filtering.removeFilter,

      clearFilters: filtering.clearFilters,

      /*
            -----------------------------
            Searching
            -----------------------------
            */

      search: searching.search,

      setSearch: searching.setSearch,

      clearSearch: searching.clearSearch,

      /*
            -----------------------------
            Pagination
            -----------------------------
            */

      page: pagination.page,

      pageSize: pagination.pageSize,

      totalCount: pagination.totalCount,

      totalPages: pagination.totalPages,

      setPage: pagination.setPage,

      nextPage: pagination.nextPage,

      previousPage: pagination.previousPage,

      setPageSize: pagination.setPageSize,

      /*
            -----------------------------
            Selection
            -----------------------------
            */

      selectedRows: selection.selectedRows,

      selectedObjects: selection.selectedObjects,

      selectedCount: selection.selectedCount,

      isSelected: selection.isSelected,

      toggleRow: selection.toggleRow,

      selectRow: selection.selectRow,

      unselectRow: selection.unselectRow,

      selectAll: selection.selectAll,

      toggleAll: selection.toggleAll,

      clearSelection: selection.clearSelection,
    }),

    [sorting, filtering, searching, pagination, selection],
  );
};

export default useDataGrid;
