import PropTypes from 'prop-types';

export const VehicleTablePropTypes = {
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export const VehicleTableDefaultProps = {
  height: 450,
};
