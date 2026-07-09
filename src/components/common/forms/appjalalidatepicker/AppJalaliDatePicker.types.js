import PropTypes from 'prop-types';

export const AppJalaliDatePickerPropTypes = {
  name: PropTypes.string,

  label: PropTypes.string,

  value: PropTypes.string,

  onChange: PropTypes.func,

  helperText: PropTypes.node,

  error: PropTypes.bool,

  disabled: PropTypes.bool,

  required: PropTypes.bool,

  fullWidth: PropTypes.bool,
};

export const AppJalaliDatePickerDefaultProps = {
  error: false,

  disabled: false,

  required: false,

  fullWidth: true,
};
