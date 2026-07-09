import PropTypes from 'prop-types';

export const AppSelectPropTypes = {
  label: PropTypes.string,

  value: PropTypes.any,

  onChange: PropTypes.func,

  options: PropTypes.array,

  fullWidth: PropTypes.bool,

  disabled: PropTypes.bool,

  error: PropTypes.bool,

  helperText: PropTypes.string,

  loading: PropTypes.bool,

  required: PropTypes.bool,

  multiple: PropTypes.bool,

  size: PropTypes.oneOf(['small', 'medium']),
};
