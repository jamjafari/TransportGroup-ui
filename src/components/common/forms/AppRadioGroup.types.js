import PropTypes from 'prop-types';

export const AppRadioGroupPropTypes = {
  name: PropTypes.string,

  label: PropTypes.string,

  value: PropTypes.any,

  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any.isRequired,

      label: PropTypes.node.isRequired,

      disabled: PropTypes.bool,
    }),
  ),

  onChange: PropTypes.func,

  row: PropTypes.bool,

  error: PropTypes.bool,

  helperText: PropTypes.node,

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
};

export const AppRadioGroupDefaultProps = {
  options: [],

  row: false,

  error: false,

  disabled: false,

  color: 'primary',

  size: 'small',
};
