import PropTypes from 'prop-types';

export const StatSkeletonPropTypes = {
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export const StatSkeletonDefaultProps = {
  height: 140,
};
