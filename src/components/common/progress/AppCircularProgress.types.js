import PropTypes from 'prop-types';

export const AppCircularProgressPropTypes = {
  value: PropTypes.number.isRequired,

  size: PropTypes.number,

  thickness: PropTypes.number,

  showValue: PropTypes.bool,

  color: PropTypes.oneOf([
    'primary',

    'secondary',

    'success',

    'error',

    'warning',

    'info',
  ]),
};

export const AppCircularProgressDefaultProps = {
  size: 56,

  thickness: 4,

  showValue: true,

  color: 'primary',
};
