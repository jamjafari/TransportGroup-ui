import PropTypes from 'prop-types';

export const CardSkeletonPropTypes = {
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export const CardSkeletonDefaultProps = {
  height: 220,
};
