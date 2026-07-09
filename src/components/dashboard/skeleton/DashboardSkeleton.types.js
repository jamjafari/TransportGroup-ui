import PropTypes from 'prop-types';

export const DashboardSkeletonPropTypes = {
  statCount: PropTypes.number,

  chartCount: PropTypes.number,

  tableCount: PropTypes.number,
};

export const DashboardSkeletonDefaultProps = {
  statCount: 4,

  chartCount: 4,

  tableCount: 2,
};
