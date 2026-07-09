import PropTypes from 'prop-types';

export const AppFileUploadPropTypes = {
  label: PropTypes.string,

  accept: PropTypes.string,

  multiple: PropTypes.bool,

  disabled: PropTypes.bool,

  error: PropTypes.bool,

  helperText: PropTypes.node,

  onChange: PropTypes.func,

  value: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export const AppFileUploadDefaultProps = {
  multiple: false,

  disabled: false,

  error: false,
};
