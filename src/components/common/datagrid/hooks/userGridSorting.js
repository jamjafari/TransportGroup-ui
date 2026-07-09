import { useState, useMemo, useCallback } from 'react';

const compareValues = (
  a,

  b,

  direction,
) => {
  if (a === null || a === undefined) return direction === 'asc' ? -1 : 1;

  if (b === null || b === undefined) return direction === 'asc' ? 1 : -1;

  /*
    -----------------------------
    Number
    -----------------------------
    */

  if (typeof a === 'number' && typeof b === 'number') {
    return direction === 'asc' ? a - b : b - a;
  }

  /*
    -----------------------------
    Date
    -----------------------------
    */

  if (a instanceof Date && b instanceof Date) {
    return direction === 'asc'
      ? a.getTime() - b.getTime()
      : b.getTime() - a.getTime();
  }

  /*
    -----------------------------
    String
    -----------------------------
    */

  return direction === 'asc'
    ? String(a).localeCompare(
        String(b),

        undefined,

        {
          numeric: true,

          sensitivity: 'base',
        },
      )
    : String(b).localeCompare(
        String(a),

        undefined,

        {
          numeric: true,

          sensitivity: 'base',
        },
      );
};

const useGridSorting = (
  rows = [],

  initialField = '',

  initialDirection = 'asc',
) => {
  const [sortField, setSortField] = useState(initialField);

  const [sortDirection, setSortDirection] = useState(initialDirection);

  const handleSort = useCallback(
    (field) => {
      if (field === sortField) {
        setSortDirection((previous) => (previous === 'asc' ? 'desc' : 'asc'));

        return;
      }

      setSortField(field);

      setSortDirection('asc');
    },

    [sortField],
  );

  const clearSorting = useCallback(() => {
    setSortField('');

    setSortDirection('asc');
  }, []);

  const sortedRows = useMemo(() => {
    if (!sortField) {
      return rows;
    }

    return [...rows].sort(
      (
        left,

        right,
      ) =>
        compareValues(
          left[sortField],

          right[sortField],

          sortDirection,
        ),
    );
  }, [rows, sortField, sortDirection]);

  return {
    rows: sortedRows,

    sortField,

    sortDirection,

    handleSort,

    clearSorting,
  };
};

export default useGridSorting;
