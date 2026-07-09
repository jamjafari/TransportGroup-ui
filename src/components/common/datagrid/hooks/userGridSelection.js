import { useState, useMemo, useCallback } from 'react';

const useGridSelection = (
  rows = [],

  rowKey = 'id',
) => {
  const [selectedRows, setSelectedRows] = useState([]);

  const selectedSet = useMemo(
    () => new Set(selectedRows),

    [selectedRows],
  );

  const isSelected = useCallback(
    (id) => selectedSet.has(id),

    [selectedSet],
  );

  const toggleRow = useCallback(
    (row) => {
      const id = row[rowKey];

      setSelectedRows((previous) =>
        previous.includes(id)
          ? previous.filter((item) => item !== id)
          : [...previous, id],
      );
    },

    [rowKey],
  );

  const selectRow = useCallback(
    (row) => {
      const id = row[rowKey];

      setSelectedRows((previous) =>
        previous.includes(id) ? previous : [...previous, id],
      );
    },

    [rowKey],
  );

  const unselectRow = useCallback(
    (row) => {
      const id = row[rowKey];

      setSelectedRows((previous) => previous.filter((item) => item !== id));
    },

    [rowKey],
  );

  const selectAll = useCallback(() => {
    setSelectedRows(rows.map((row) => row[rowKey]));
  }, [rows, rowKey]);

  const clearSelection = useCallback(() => {
    setSelectedRows([]);
  }, []);

  const toggleAll = useCallback(() => {
    if (selectedRows.length === rows.length) {
      clearSelection();
      return;
    }

    selectAll();
  }, [rows, selectedRows, selectAll, clearSelection]);

  const selectedObjects = useMemo(
    () => rows.filter((row) => selectedSet.has(row[rowKey])),

    [rows, selectedSet, rowKey],
  );

  return {
    selectedRows,

    selectedObjects,

    selectedCount: selectedRows.length,

    isSelected,

    toggleRow,

    selectRow,

    unselectRow,

    selectAll,

    toggleAll,

    clearSelection,
  };
};

export default useGridSelection;
