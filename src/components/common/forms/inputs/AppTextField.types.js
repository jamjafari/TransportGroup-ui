import PropTypes from 'prop-types';

export const AppTextFieldPropTypes = {
  label: PropTypes.string,

  value: PropTypes.any,

  onChange: PropTypes.func,

  placeholder: PropTypes.string,

  helperText: PropTypes.string,

  error: PropTypes.bool,

  required: PropTypes.bool,

  disabled: PropTypes.bool,

  readOnly: PropTypes.bool,

  fullWidth: PropTypes.bool,

  multiline: PropTypes.bool,

  rows: PropTypes.number,

  type: PropTypes.string,

  loading: PropTypes.bool,

  startIcon: PropTypes.node,

  endIcon: PropTypes.node,

  name: PropTypes.string,

  autoComplete: PropTypes.string,
};
