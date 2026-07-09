import PropTypes from 'prop-types';

export const DashboardTablePropTypes = {
  title: PropTypes.string,

  subtitle: PropTypes.string,

  rows: PropTypes.array,

  columns: PropTypes.array,

  loading: PropTypes.bool,

  error: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),

  refresh: PropTypes.func,

  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  searchable: PropTypes.bool,

  sortable: PropTypes.bool,

  filterable: PropTypes.bool,

  pagination: PropTypes.bool,

  rowKey: PropTypes.string,

  toolbar: PropTypes.node,

  footer: PropTypes.node,

  actions: PropTypes.node,
};

export const DashboardTableDefaultProps = {
  title: '',

  subtitle: '',

  rows: [],

  columns: [],

  loading: false,

  error: null,

  refresh: null,

  height: 450,

  searchable: true,

  sortable: true,

  filterable: true,

  pagination: false,

  rowKey: 'id',

  toolbar: null,

  footer: null,

  actions: null,
};
