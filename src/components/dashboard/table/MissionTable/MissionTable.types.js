import PropTypes from 'prop-types';

export const MissionTablePropTypes = {
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export const MissionTableDefaultProps = {
  height: 450,
};
