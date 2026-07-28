import PropTypes from 'prop-types';

export const AppDataGridPropTypes = {
  /*
    ---------------------------------
    Data
    ---------------------------------
    */

  rows: PropTypes.array.isRequired,

  columns: PropTypes.array.isRequired,
  field: PropTypes.string,
  headerName: PropTypes.string,
  width: PropTypes.number,

  rowKey: PropTypes.string,

  loading: PropTypes.bool,

  /*
    ---------------------------------
    Toolbar
    ---------------------------------
    */

  toolbar: PropTypes.node,

  /*
    ---------------------------------
    Empty State
    ---------------------------------
    */

  emptyTitle: PropTypes.string,

  emptyDescription: PropTypes.string,

  emptyIcon: PropTypes.node,

  emptyAction: PropTypes.node,

  /*
    ---------------------------------
    Row Events
    ---------------------------------
    */

  onRowClick: PropTypes.func,

  onRowDoubleClick: PropTypes.func,

  /*
    ---------------------------------
    Initial State
    ---------------------------------
    */

  initialSortField: PropTypes.string,

  initialSortDirection: PropTypes.oneOf(['asc', 'desc']),

  initialPage: PropTypes.number,

  initialPageSize: PropTypes.number,

  /*
    ---------------------------------
    Features
    ---------------------------------
    */

  sortable: PropTypes.bool,

  searchable: PropTypes.bool,

  filterable: PropTypes.bool,

  selectable: PropTypes.bool,

  pagination: PropTypes.bool,

  /*
    ---------------------------------
    Appearance
    ---------------------------------
    */

  dense: PropTypes.bool,

  striped: PropTypes.bool,

  bordered: PropTypes.bool,

  stickyHeader: PropTypes.bool,

  hover: PropTypes.bool,

  /*
    ---------------------------------
    Custom Components
    ---------------------------------
    */

  loadingComponent: PropTypes.node,

  emptyComponent: PropTypes.node,

  footerComponent: PropTypes.node,
};

export const AppDataGridDefaultProps = {
  rowKey: 'id',

  loading: false,

  sortable: true,

  searchable: true,

  filterable: true,

  selectable: true,

  pagination: true,

  dense: false,

  striped: false,

  bordered: false,

  stickyHeader: false,

  hover: true,

  initialSortField: '',

  initialSortDirection: 'asc',

  initialPage: 1,

  initialPageSize: 10,

  emptyTitle: 'No Data',

  emptyDescription: 'There are no records to display.',
};
