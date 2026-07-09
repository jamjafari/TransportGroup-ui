import PropTypes from 'prop-types';

export const TableSkeletonPropTypes = {
  rows: PropTypes.number,

  columns: PropTypes.number,

  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export const TableSkeletonDefaultProps = {
  rows: 6,

  columns: 5,

  height: 420,
};
