export const normalizeColumns = (columns = []) => {
  return columns.map((column) => ({
    width: 160,

    minWidth: 100,

    maxWidth: 500,

    align: 'center',

    headerAlign: 'center',

    sortable: true,

    filterable: true,

    searchable: true,

    visible: true,

    type: 'text',

    flex: 0,

    ...column,
  }));
};
