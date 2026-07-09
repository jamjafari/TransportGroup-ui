import { formatValue } from './formatters';

export const resolveCellValue = (column, row) => {
  if (column.valueGetter) {
    return column.valueGetter(row);
  }

  return row[column.field];
};

export const resolveCellRender = (column, value, row) => {
  if (column.render) {
    return column.render(value, row);
  }

  return formatValue(value, column.type);
};
