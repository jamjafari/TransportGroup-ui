import PropTypes from 'prop-types';

export const AppLinearProgressPropTypes = {
  value: PropTypes.number.isRequired,

  label: PropTypes.string,

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

export const AppLinearProgressDefaultProps = {
  showValue: true,

  color: 'primary',
};
