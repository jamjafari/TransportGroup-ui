import PropTypes from 'prop-types';

export const AppSelectPropTypes = {
  id: PropTypes.string,

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

  placeholder: PropTypes.string,

  helperText: PropTypes.node,

  error: PropTypes.bool,

  disabled: PropTypes.bool,

  required: PropTypes.bool,

  fullWidth: PropTypes.bool,

  size: PropTypes.oneOf(['small', 'medium']),

  variant: PropTypes.oneOf(['outlined', 'filled', 'standard']),

  renderValue: PropTypes.func,

  onChange: PropTypes.func,

  onBlur: PropTypes.func,

  children: PropTypes.node,
};

export const AppSelectDefaultProps = {
  value: '',

  options: [],

  placeholder: 'Select...',

  helperText: '',

  error: false,

  disabled: false,

  required: false,

  fullWidth: true,

  size: 'small',

  variant: 'outlined',
};
