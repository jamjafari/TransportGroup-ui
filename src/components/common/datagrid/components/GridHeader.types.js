import PropTypes from 'prop-types';

export const GridHeaderPropTypes = {
  /*
    -----------------------------
    Columns
    -----------------------------
    */

  columns: PropTypes.arrayOf(
    PropTypes.shape({
      field: PropTypes.string.isRequired,

      headerName: PropTypes.string.isRequired,

      width: PropTypes.number,

      minWidth: PropTypes.number,

      maxWidth: PropTypes.number,

      align: PropTypes.oneOf(['left', 'center', 'right']),

      sortable: PropTypes.bool,

      filterable: PropTypes.bool,

      searchable: PropTypes.bool,

      menu: PropTypes.bool,
    }),
  ).isRequired,

  /*
    -----------------------------
    Row Selection
    -----------------------------
    */

  rowSelection: PropTypes.bool,

  allSelected: PropTypes.bool,

  indeterminate: PropTypes.bool,

  onSelectAll: PropTypes.func,

  /*
    -----------------------------
    Sorting
    -----------------------------
    */

  sortable: PropTypes.bool,

  sortField: PropTypes.string,

  sortDirection: PropTypes.oneOf(['asc', 'desc']),

  onSort: PropTypes.func,

  /*
    -----------------------------
    Column Menu
    -----------------------------
    */

  onColumnMenu: PropTypes.func,

  /*
    -----------------------------
    Appearance
    -----------------------------
    */

  stickyHeader: PropTypes.bool,
};

export const GridHeaderDefaultProps = {
  rowSelection: false,

  allSelected: false,

  indeterminate: false,

  sortable: true,

  stickyHeader: false,
};
