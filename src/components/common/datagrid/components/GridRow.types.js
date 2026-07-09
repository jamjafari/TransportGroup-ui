import PropTypes from 'prop-types';

export const GridRowPropTypes = {
  row: PropTypes.object.isRequired,

  columns: PropTypes.array.isRequired,

  hover: PropTypes.bool,

  selected: PropTypes.bool,

  onClick: PropTypes.func,

  onDoubleClick: PropTypes.func,
};
