export const prepareExportData = ({ rows, columns }) => {
  return rows.map((row) => {
    const result = {};

    columns.forEach((col) => {
      const rawValue = row[col.field];
      result[col.headerName] = col.valueFormatter
        ? col.valueFormatter(rawValue, row)
        : rawValue;
    });

    return result;
  });
};
