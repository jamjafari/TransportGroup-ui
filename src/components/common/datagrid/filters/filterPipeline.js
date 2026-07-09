import {
  applyTextFilter,
  applyNumberFilter,
  applyDateFilter,
  applyBooleanFilter,
} from './filterResolver';

import { FILTER_TYPES } from './filterTypes';

export const filterRow = (row, filters = [], columns = []) => {
  return filters.every((filter) => {
    const column = columns.find((c) => c.field === filter.field);

    if (!column) return true;

    const value = row[filter.field];

    switch (column.type) {
      case FILTER_TYPES.TEXT:
        return applyTextFilter(value, filter);

      case FILTER_TYPES.NUMBER:
        return applyNumberFilter(value, filter);

      case FILTER_TYPES.DATE:
        return applyDateFilter(value, filter);

      case FILTER_TYPES.BOOLEAN:
        return applyBooleanFilter(value, filter);

      default:
        return true;
    }
  });
};

export const applyFilters = (rows, filters, columns) => {
  if (!filters.length) return rows;

  return rows.filter((row) => filterRow(row, filters, columns));
};
