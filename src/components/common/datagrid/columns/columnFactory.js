import { COLUMN_TYPES } from './columnTypes';

export const createColumn = (config) => {
  return {
    id: config.id,

    field: config.field,

    headerName: config.headerName,

    type: config.type || COLUMN_TYPES.TEXT,

    sortable: config.sortable ?? true,

    filterable: config.filterable ?? true,

    width: config.width || 150,

    minWidth: config.minWidth || 80,

    align: config.align || 'left',

    render: config.render,

    valueGetter: config.valueGetter,
  };
};
