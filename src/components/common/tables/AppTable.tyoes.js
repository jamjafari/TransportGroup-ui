import PropTypes from 'prop-types';

export const AppTablePropTypes = {
  columns: PropTypes.array.isRequired,

  rows: PropTypes.array.isRequired,

  loading: PropTypes.bool,

  dense: PropTypes.bool,

  hover: PropTypes.bool,

  stickyHeader: PropTypes.bool,

  maxHeight: PropTypes.number,

  emptyMessage: PropTypes.string,

  onRowClick: PropTypes.func,
};
