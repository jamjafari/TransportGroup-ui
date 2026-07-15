import PropTypes from 'prop-types';

export const StatusChipPropTypes = {
  status: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,

  size: PropTypes.oneOf(['small', 'medium']),
};
