import PropTypes from 'prop-types';

export const AppCheckboxPropTypes = {
  name: PropTypes.string,

  label: PropTypes.node,

  checked: PropTypes.bool,

  onChange: PropTypes.func,

  disabled: PropTypes.bool,

  required: PropTypes.bool,

  error: PropTypes.bool,

  helperText: PropTypes.node,

  color: PropTypes.oneOf([
    'primary',

    'secondary',

    'success',

    'error',

    'warning',

    'info',

    'default',
  ]),

  size: PropTypes.oneOf(['small', 'medium']),
};

export const AppCheckboxDefaultProps = {
  checked: false,

  disabled: false,

  required: false,

  error: false,

  color: 'primary',

  size: 'small',
};
