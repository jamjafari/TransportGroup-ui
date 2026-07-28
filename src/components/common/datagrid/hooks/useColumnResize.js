import { useState } from 'react';

const useColumnResize = (columns) => {
  const [columnWidths, setColumnWidths] = useState(() => {
    const result = {};

    columns.forEach((c) => {
      result[c.field] = c.width ?? 160;
    });

    return result;
  });

  const setWidth = (field, width) => {
    setColumnWidths((prev) => ({
      ...prev,
      [field]: width,
    }));
  };

  return {
    columnWidths,
    setWidth,
  };
};

export default useColumnResize;
