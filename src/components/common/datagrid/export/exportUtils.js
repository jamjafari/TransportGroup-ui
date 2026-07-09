export const prepareExportData = ({ rows, columns }) => {
  return rows.map((row) => {
    const result = {};

    columns.forEach((col) => {
      result[col.headerName] = row[col.field];
    });

    return result;
  });
};
