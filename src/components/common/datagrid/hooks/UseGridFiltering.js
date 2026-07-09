import { useMemo, useState, useCallback } from 'react';

const useGridFiltering = (
  rows = [],

  initialFilters = {},
) => {
  const [filters, setFilters] = useState(initialFilters);

  const setFilter = useCallback(
    (field, value) => {
      setFilters((previous) => ({
        ...previous,

        [field]: value,
      }));
    },

    [],
  );

  const removeFilter = useCallback(
    (field) => {
      setFilters((previous) => {
        const next = {
          ...previous,
        };

        delete next[field];

        return next;
      });
    },

    [],
  );

  const clearFilters = useCallback(() => {
    setFilters({});
  }, []);

  const filteredRows = useMemo(() => {
    return rows.filter((row) => {
      return Object.entries(filters)

        .every(([field, value]) => {
          if (value === undefined || value === null || value === '') {
            return true;
          }

          const cellValue = row[field];

          if (Array.isArray(value)) {
            return value.includes(cellValue);
          }

          if (typeof value === 'boolean') {
            return cellValue === value;
          }

          if (typeof value === 'number') {
            return cellValue === value;
          }

          return String(cellValue ?? '')
            .toLowerCase()

            .includes(String(value).toLowerCase());
        });
    });
  }, [rows, filters]);

  return {
    rows: filteredRows,

    filters,

    setFilter,

    removeFilter,

    clearFilters,
  };
};

export default useGridFiltering;
