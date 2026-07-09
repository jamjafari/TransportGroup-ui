import PropTypes from 'prop-types';

export const AppSwitchPropTypes = {
  name: PropTypes.string,

  label: PropTypes.node,

  checked: PropTypes.bool,

  onChange: PropTypes.func,

  disabled: PropTypes.bool,

  color: PropTypes.oneOf([
    'primary',

    'secondary',

    'success',

    'error',

    'warning',

    'info',
  ]),

  size: PropTypes.oneOf(['small', 'medium']),

  helperText: PropTypes.node,

  error: PropTypes.bool,
};

export const AppSwitchDefaultProps = {
  checked: false,

  disabled: false,

  color: 'primary',

  size: 'small',

  error: false,
};
