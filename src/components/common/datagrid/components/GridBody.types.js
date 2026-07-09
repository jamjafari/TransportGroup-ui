import PropTypes from 'prop-types';

export const GridBodyPropTypes = {
  rows: PropTypes.array.isRequired,

  columns: PropTypes.array.isRequired,

  loading: PropTypes.bool,

  selectedRows: PropTypes.array,

  onRowClick: PropTypes.func,

  onRowDoubleClick: PropTypes.func,
};
