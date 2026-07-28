import { useMemo, useState } from 'react';

const useDataGrid = ({
  rows = [],
  columns = [],
  rowKey = 'id',

  initialSortField = '',
  initialSortDirection = 'asc',

  initialPage = 1,
  initialPageSize = 10,
}) => {
  const [search, setSearch] = useState('');

  const [filters, setFilters] = useState({});

  const [sortField, setSortField] = useState(initialSortField);

  const [sortDirection, setSortDirection] = useState(initialSortDirection);

  const [page, setPage] = useState(initialPage);

  const [pageSize, setPageSize] = useState(initialPageSize);

  const [selectedRows, setSelectedRows] = useState([]);

  //--------------------------------------------------

  const filteredRows = useMemo(() => {
    let result = [...rows];

    //---------------- Search ----------------

    if (search.trim() !== '') {
      const keyword = search.toLowerCase();

      result = result.filter((row) =>
        columns.some((column) => {
          const value = row[column.field];

          if (value == null) return false;

          return String(value).toLowerCase().includes(keyword);
        }),
      );
    }

    //---------------- Filters ----------------

    Object.keys(filters).forEach((key) => {
      const value = filters[key];

      if (value !== undefined && value !== null && value !== '') {
        result = result.filter((row) => row[key] === value);
      }
    });

    return result;
  }, [rows, columns, search, filters]);

  //--------------------------------------------------

  const sortedRows = useMemo(() => {
    if (!sortField) return filteredRows;

    return [...filteredRows].sort((a, b) => {
      let first = a[sortField];

      let second = b[sortField];

      if (first == null) first = '';

      if (second == null) second = '';

      if (typeof first === 'string') {
        first = first.toLowerCase();
      }

      if (typeof second === 'string') {
        second = second.toLowerCase();
      }

      if (first < second) return sortDirection === 'asc' ? -1 : 1;

      if (first > second) return sortDirection === 'asc' ? 1 : -1;

      return 0;
    });
  }, [filteredRows, sortField, sortDirection]);

  //--------------------------------------------------

  const visibleRows = useMemo(() => {
    const start = (page - 1) * pageSize;

    const end = start + pageSize;

    return sortedRows.slice(start, end);
  }, [sortedRows, page, pageSize]);

  //--------------------------------------------------

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection((prev) => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortField(field);

      setSortDirection('asc');
    }
  };

  //--------------------------------------------------

  const toggleRow = (row) => {
    const id = row[rowKey];

    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

  //--------------------------------------------------

  const toggleAll = () => {
    if (selectedRows.length === filteredRows.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(filteredRows.map((x) => x[rowKey]));
    }
  };

  //--------------------------------------------------

  const isSelected = (id) => selectedRows.includes(id);

  //--------------------------------------------------

  const clearSelection = () => setSelectedRows([]);

  //--------------------------------------------------

  const clearSearch = () => setSearch('');

  //--------------------------------------------------

  const setFilter = (field, value) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  //--------------------------------------------------

  return {
    rows,

    filteredRows,

    sortedRows,

    visibleRows,

    search,

    setSearch,

    clearSearch,

    filters,

    setFilter,

    sortField,

    sortDirection,

    handleSort,

    page,

    pageSize,

    setPage,

    setPageSize,

    selectedRows,

    selectedCount: selectedRows.length,

    isSelected,

    toggleRow,

    toggleAll,

    clearSelection,

    totalCount: filteredRows.length,

    allSelected:
      filteredRows.length > 0 && selectedRows.length === filteredRows.length,

    indeterminate:
      selectedRows.length > 0 && selectedRows.length < filteredRows.length,
  };
};

export default useDataGrid;
