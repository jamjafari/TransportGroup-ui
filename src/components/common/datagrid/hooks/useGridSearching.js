import { useState, useMemo, useCallback } from 'react';

const useGridSearching = (
  rows = [],

  columns = [],

  initialSearch = '',
) => {
  const [search, setSearch] = useState(initialSearch);

  const clearSearch = useCallback(() => {
    setSearch('');
  }, []);

  const searchableColumns = useMemo(
    () => columns.filter((column) => column.searchable !== false),

    [columns],
  );

  const searchedRows = useMemo(() => {
    if (!search || search.trim() === '') {
      return rows;
    }

    const keyword = search

      .trim()

      .toLowerCase();

    return rows.filter((row) =>
      searchableColumns.some((column) => {
        const value = row[column.field];

        if (value === null || value === undefined) {
          return false;
        }

        return String(value)
          .toLowerCase()

          .includes(keyword);
      }),
    );
  }, [rows, searchableColumns, search]);

  return {
    rows: searchedRows,

    search,

    setSearch,

    clearSearch,
  };
};

export default useGridSearching;
