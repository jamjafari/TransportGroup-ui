import PropTypes from 'prop-types';

export const AppButtonPropTypes = {
  children: PropTypes.node,

  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),

  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'warning',
    'error',
    'info',
  ]),

  size: PropTypes.oneOf(['small', 'medium', 'large']),

  loading: PropTypes.bool,

  disabled: PropTypes.bool,

  fullWidth: PropTypes.bool,

  startIcon: PropTypes.node,

  endIcon: PropTypes.node,

  onClick: PropTypes.func,

  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};
