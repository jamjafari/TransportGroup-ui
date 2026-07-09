import PropTypes from 'prop-types';

export const AppDatePickerPropTypes = {
  name: PropTypes.string,

  label: PropTypes.string,

  value: PropTypes.string,

  onChange: PropTypes.func,

  helperText: PropTypes.node,

  error: PropTypes.bool,

  disabled: PropTypes.bool,

  required: PropTypes.bool,

  fullWidth: PropTypes.bool,

  size: PropTypes.oneOf(['small', 'medium']),

  inputFormat: PropTypes.string,
};

export const AppDatePickerDefaultProps = {
  value: '',

  error: false,

  disabled: false,

  required: false,

  fullWidth: true,

  size: 'small',

  inputFormat: 'YYYY-MM-DD',
};
